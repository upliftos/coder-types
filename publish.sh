#!/usr/bin/env bash
#
# Publish @upliftos/coder package to its own repo.
# Pushes only packages/config/ as the root of the target repo.
#
# Usage:  ./packages/config/publish.sh
#
set -euo pipefail

REMOTE="git@github.com:upliftos/coder.git"
BRANCH="main"
PREFIX="packages/config"

cd "$(git rev-parse --show-toplevel)"

# Use git subtree split to create a commit with only packages/config as root
echo "Splitting $PREFIX into temporary branch..."
SPLIT_BRANCH="__config-publish-$$"
git subtree split --prefix="$PREFIX" -b "$SPLIT_BRANCH"

echo "Pushing to $REMOTE ($BRANCH)..."
git push "$REMOTE" "$SPLIT_BRANCH:$BRANCH" --force

# Clean up
git branch -D "$SPLIT_BRANCH"

echo "Done. Published $PREFIX → $REMOTE#$BRANCH"
