#!/usr/bin/env bash
sudo $(pwd)/nginx/sbin/nginx -c $(pwd)/nginx/conf/nginx.conf &
/usr/bin/google-chrome-stable localhost &
guile start.scm



#GUILE_LOAD_PATH="$PWD:$GUILE_LOAD_PATH" guile test.scm
#/media/stor/gentoo-files/execs/compilers/programs/scheme/guile/SSE/upstream/guile-websocket#
#sudo lighttpd -D -f /etc/lighttpd/lighttpd.conf
