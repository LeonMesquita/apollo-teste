#!/bin/bash

PATCH_FILE=patches/cornerstoneTools.patch
TARGET_FILE=node_modules/cornerstone-tools/dist/cornerstoneTools.js

diff -u node_modules/cornerstone-tools/dist/cornerstoneTools.js patches/cornerstoneTools.js > patches/cornerstoneTools.patch

patch -p1 -i "$PATCH_FILE" "$TARGET_FILE"
