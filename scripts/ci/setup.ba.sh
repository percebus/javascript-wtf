#!/bin/bash

set -e

file_path="__tests__/global.js"

set -x
cp "${file_path}.ci" "${file_path}"

set +x
set +e
