#!/bin/sh

set -e

# nabbed from SO; cd to directory project lives in:
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
RS_PKG_NAME="rust"
echo $DIR

cd $DIR/rs
# cargo build --release --target wasm32-unknown-unknown
wasm-pack build --out-dir rs-pkg 

rust_pkg=`yarn list --pattern $RS_PKG_NAME --depth=0 --silent`
if [ ! -z "${rust_pkg}"  ]; then
  yarn remove $RS_PKG_NAME
fi
yarn add file:./rs/rs-pkg
yarn install