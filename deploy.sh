#!/usr/bin/env sh

set -e

npm run build

cp -r CNAME ./dist

cd dist

surge

cd -
