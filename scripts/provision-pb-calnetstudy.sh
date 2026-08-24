#!/usr/bin/env bash
#
# Provision the `calnetstudy` PocketBase tenant on the CalnetCorp droplet.
#
# Follows the multi-instance pattern in CalnetCorp Web Services/SYSTEM-MAP.md
# §4.1: shared binary at /opt/pocketbase/pocketbase, per-tenant data dir,
# per-tenant systemd unit, Caddy in front. This tenant is served at
#   https://pb.calnetcorp.com.au/study  →  127.0.0.1:8095
# via a handle_path route (no new DNS record needed — DNS is on GoDaddy).
#
# Run from Cal's Mac (needs SSH to the droplet):
#   ./scripts/provision-pb-calnetstudy.sh
#
# Idempotent: safe to re-run; each step checks before it changes anything.
# Prints the generated credentials at the end — store them in 1Password.

set -euo pipefail

DROPLET="root@170.64.196.75"
TENANT="calnetstudy"
PORT="8095"
TEMPLATE_UNIT="pocketbase-calnetcorp-website-services.service"
ADMIN_EMAIL="cal+pbadmin@calnetcorp.com.au"
USER_EMAIL="cal@calnetcorp.com.au"

ADMIN_PASS="$(openssl rand -base64 18 | tr -d '/+=')"
USER_PASS="$(openssl rand -base64 18 | tr -d '/+=')"

echo "→ Provisioning tenant '$TENANT' on $DROPLET (port $PORT)…"

ssh "$DROPLET" bash -s -- "$TENANT" "$PORT" "$TEMPLATE_UNIT" \
    "$ADMIN_EMAIL" "$ADMIN_PASS" "$USER_EMAIL" "$USER_PASS" <<'REMOTE'
set -euo pipefail
TENANT="$1"; PORT="$2"; TEMPLATE_UNIT="$3"
ADMIN_EMAIL="$4"; ADMIN_PASS="$5"; USER_EMAIL="$6"; USER_PASS="$7"
PB=/opt/pocketbase/pocketbase
DATA="/opt/pb-data/$TENANT"
UNIT="pocketbase-$TENANT.service"

# --- 1. data dir + superuser (before first start) -------------------------
mkdir -p "$DATA"
"$PB" superuser upsert "$ADMIN_EMAIL" "$ADMIN_PASS" --dir="$DATA"

# --- 2. systemd unit, cloned from the house template ----------------------
if [ ! -f "/etc/systemd/system/$UNIT" ]; then
  sed -e "s/calnetcorp-website-services/$TENANT/g" \
      -e "s/:809[0-9]/:$PORT/g" -e "s/=809[0-9]/=$PORT/g" \
      "/etc/systemd/system/$TEMPLATE_UNIT" > "/etc/systemd/system/$UNIT"
  systemctl daemon-reload
fi
systemctl enable --now "$UNIT"

for i in $(seq 1 20); do
  curl -sf "http://127.0.0.1:$PORT/api/health" >/dev/null && break
  sleep 1
done
curl -sf "http://127.0.0.1:$PORT/api/health" >/dev/null \
  || { echo "!! tenant did not come up"; journalctl -u "$UNIT" -n 20 --no-pager; exit 1; }

# --- 3. schema: study_notes collection ------------------------------------
TOKEN=$(curl -sf "http://127.0.0.1:$PORT/api/collections/_superusers/auth-with-password" \
  -H 'Content-Type: application/json' \
  -d "{\"identity\":\"$ADMIN_EMAIL\",\"password\":\"$ADMIN_PASS\"}" \
  | sed -n 's/.*"token":"\([^"]*\)".*/\1/p')
[ -n "$TOKEN" ] || { echo "!! superuser auth failed"; exit 1; }

if ! curl -sf -H "Authorization: $TOKEN" \
     "http://127.0.0.1:$PORT/api/collections/study_notes" >/dev/null 2>&1; then
  USERS_ID=$(curl -sf -H "Authorization: $TOKEN" \
    "http://127.0.0.1:$PORT/api/collections/users" \
    | sed -n 's/^{"id":"\([^"]*\)".*/\1/p')
  [ -n "$USERS_ID" ] || USERS_ID="_pb_users_auth_"
  curl -sf -H "Authorization: $TOKEN" -H 'Content-Type: application/json' \
    "http://127.0.0.1:$PORT/api/collections" -d @- <<JSON >/dev/null
{
  "name": "study_notes",
  "type": "base",
  "fields": [
    {"name":"owner","type":"relation","required":true,"collectionId":"$USERS_ID","cascadeDelete":true,"maxSelect":1},
    {"name":"doc","type":"text","required":true,"max":200},
    {"name":"anchor","type":"text","required":true,"max":200},
    {"name":"heading","type":"text","max":300},
    {"name":"body","type":"text","max":20000},
    {"name":"stamp","type":"text","required":true,"max":40},
    {"name":"deleted","type":"bool"}
  ],
  "indexes": ["CREATE UNIQUE INDEX idx_study_notes_owner_doc_anchor ON study_notes (owner, doc, anchor)"],
  "listRule":  "owner = @request.auth.id",
  "viewRule":  "owner = @request.auth.id",
  "createRule":"@request.auth.id != \"\" && owner = @request.auth.id",
  "updateRule":"owner = @request.auth.id",
  "deleteRule":"owner = @request.auth.id"
}
JSON
  echo "   collection study_notes created"
else
  echo "   collection study_notes already exists"
fi

# --- 4. Cal's app user -----------------------------------------------------
if ! curl -sf -H "Authorization: $TOKEN" \
     "http://127.0.0.1:$PORT/api/collections/users/records?filter=(email='$USER_EMAIL')" \
     | grep -q '"totalItems":0'; then
  echo "   user $USER_EMAIL already exists (password NOT changed)"
else
  curl -sf -H "Authorization: $TOKEN" -H 'Content-Type: application/json' \
    "http://127.0.0.1:$PORT/api/collections/users/records" \
    -d "{\"email\":\"$USER_EMAIL\",\"password\":\"$USER_PASS\",\"passwordConfirm\":\"$USER_PASS\",\"verified\":true}" \
    >/dev/null
  echo "   user $USER_EMAIL created"
fi

# --- 5. Caddy route: pb.calnetcorp.com.au/study/* → :$PORT ----------------
if ! grep -q "handle_path /study/\*" /etc/caddy/Caddyfile; then
  cp /etc/caddy/Caddyfile "/etc/caddy/Caddyfile.bak.$(date +%s)"
  awk -v port="$PORT" '
    /^pb\.calnetcorp\.com\.au[[:space:]]*{/ && !done {
      print
      print "\thandle_path /study/* {"
      print "\t\treverse_proxy 127.0.0.1:" port
      print "\t}"
      done=1; next
    }
    { print }
  ' /etc/caddy/Caddyfile > /etc/caddy/Caddyfile.new
  caddy validate --config /etc/caddy/Caddyfile.new --adapter caddyfile
  mv /etc/caddy/Caddyfile.new /etc/caddy/Caddyfile
  systemctl reload caddy
  echo "   caddy route added"
else
  echo "   caddy route already present"
fi

echo "REMOTE_OK"
REMOTE

echo
echo "→ Verifying public endpoint…"
sleep 2
curl -sf "https://pb.calnetcorp.com.au/study/api/health" && echo && echo "✅ live"

cat <<SUMMARY

============================================================
 calnetstudy PocketBase tenant — store these in 1Password:

   Admin UI:   https://pb.calnetcorp.com.au/study/_/
   Superuser:  $ADMIN_EMAIL / $ADMIN_PASS

   App sign-in (used on the calnetstudy site, #/notes page):
   Email:      $USER_EMAIL
   Password:   $USER_PASS

 Reminder: add '$TENANT' to the nightly PB backup job
 (SOPs/pocketbase-backup-restore-sop.md) and to SYSTEM-MAP §4.1.
============================================================
SUMMARY
