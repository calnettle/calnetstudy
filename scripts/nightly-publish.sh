#!/bin/bash
#
# calnetstudy — nightly publish
#
# Commits any changed markdown under content/, pushes, and deploys to Vercel.
# Scheduled by ~/Library/LaunchAgents/com.calnetcorp.calnetstudy.nightly.plist
# (2:00am daily; launchd runs it on the next wake if the Mac was asleep).
#
#   ./scripts/nightly-publish.sh              publish
#   ./scripts/nightly-publish.sh --dry-run    report what it would do, change nothing
#
# Deliberately scoped to content/ only. It will not commit build.js, the
# files under public/, vercel.json or CLAUDE.md — an unattended job that
# commits the whole tree publishes whatever happens to be sitting in it,
# reviewed or not. Code changes stay a manual, deliberate act.
#
# The Vercel project is not linked to GitHub, so pushing does not build.
# This script deploys explicitly; that is the only thing that ships to prod.

set -uo pipefail

REPO="/Users/caln/Desktop/Desktop - MacBook Air (31)/QUT/calnetstudy"
BRANCH="master"
SCOPE="calnettles-projects"
LOG="$HOME/Library/Logs/calnetstudy-nightly.log"

# launchd gives us a bare environment; Homebrew is not on the default PATH.
export PATH="/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin"

DRY_RUN=0
[ "${1:-}" = "--dry-run" ] && DRY_RUN=1

mkdir -p "$(dirname "$LOG")"
log() { printf '%s  %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*" | tee -a "$LOG"; }
die() { log "ABORT: $*"; exit 1; }

log "──────── nightly publish$([ $DRY_RUN -eq 1 ] && echo ' (dry run)') ────────"

cd "$REPO" || die "repo not found at $REPO"

# Never publish from a feature branch — Cal may be mid-experiment.
current="$(git rev-parse --abbrev-ref HEAD 2>/dev/null)" || die "not a git repo"
[ "$current" = "$BRANCH" ] || die "on branch '$current', expected '$BRANCH' — skipping"

# Stage notes only. -A picks up new, edited and deleted files under content/.
git add -A -- content || die "git add failed"

if git diff --cached --quiet -- content; then
  log "no note changes since last run — nothing to publish"
  git reset -q
  exit 0
fi

changed="$(git diff --cached --name-only -- content)"
count="$(printf '%s\n' "$changed" | grep -c .)"
log "$count changed file(s):"
printf '%s\n' "$changed" | sed 's/^/    /' | tee -a "$LOG"

# Build before committing. build.js throws on the <hundefined> heading bug,
# which is silent otherwise and would wreck every anchor and search hit.
[ -d node_modules ] || { log "installing deps…"; npm install --silent >>"$LOG" 2>&1; }
if ! node build.js >>"$LOG" 2>&1; then
  git reset -q
  die "build failed — nothing committed, see $LOG"
fi
log "build OK"

if [ $DRY_RUN -eq 1 ]; then
  git reset -q
  log "dry run: would commit, push to $BRANCH, then deploy to Vercel"
  log "──────── end (dry run, no changes made) ────────"
  exit 0
fi

git commit -q -m "notes: nightly update $(date '+%Y-%m-%d')" \
             -m "$count file(s) changed under content/. Committed by scripts/nightly-publish.sh." \
  || die "commit failed"
log "committed $(git rev-parse --short HEAD)"

if git push -q origin "$BRANCH" 2>>"$LOG"; then
  log "pushed to origin/$BRANCH"
else
  # Non-fatal: the commit is safe locally and the next run retries the push.
  # Still deploy — the point of this job is getting notes onto the phone.
  log "WARNING: push failed (offline?) — commit is local, will retry next run"
fi

log "deploying…"
if url="$(vercel --prod --yes --scope "$SCOPE" 2>>"$LOG" | tail -1)"; then
  log "deployed: https://calnetstudy.vercel.app"
else
  die "vercel deploy failed — see $LOG"
fi

log "──────── done ────────"
