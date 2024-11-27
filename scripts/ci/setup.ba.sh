#!/bin/bash

set -e

file_path="src/globals.js"

set -x
cp "${file_path}.ci" "${file_path}"

node src/globals.spec.js

set +x
set +e
