#!/bin/bash
set -e

# chown -R www-data:www-data /var/www/html

# Apache gets grumpy about PID files pre-existing
rm -f /usr/local/apache2/logs/httpd.pid

exec httpd -DFOREGROUND "$@"