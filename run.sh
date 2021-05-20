#!/usr/bin/env bash
sed -i '/.*set \$rtdir.*/c\set $rtdir '"$(pwd)"';' $(pwd)/../nginx/conf/nginx.conf

sudo $(pwd)/../nginx/sbin/nginx -c $(pwd)/../nginx/conf/nginx.conf -p $(pwd)/../nginx &

/usr/bin/google-chrome-stable localhost &
guile start.scm



#GUILE_LOAD_PATH="$PWD:$GUILE_LOAD_PATH" guile test.scm
#/media/stor/gentoo-files/execs/compilers/programs/scheme/guile/SSE/upstream/guile-websocket#
#sudo lighttpd -D -f /etc/lighttpd/lighttpd.conf
