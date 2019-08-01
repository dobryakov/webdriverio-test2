#!/bin/sh

npm run build
./node_modules/.bin/wdio wdio.conf.js
