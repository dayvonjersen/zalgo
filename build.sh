#!/bin/bash
rm tmp/*.* 2>/dev/null
rm dist/*.* 2>/dev/null
./zalgo
cat CustomElements.js hecomes.js tmp/*.js > dist/webcomponents.js
cat tmp/*.css > dist/webcomponents.css
