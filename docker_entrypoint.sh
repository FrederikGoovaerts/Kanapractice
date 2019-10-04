#!/bin/sh

sed -i \
 -e "s/NORMAL_VAL_PLACEHOLDER/$NORMAL_VAL/g"\
 -e "s@SPECIAL_CHAR_VAL_PLACEHOLDER@$SPECIAL_CHAR_VAL@g"\
 /usr/share/nginx/html/bundle.*.js

nginx -g "daemon off;"
