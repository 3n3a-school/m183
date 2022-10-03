FROM httpd:2.4-alpine

COPY my-httpd.conf /usr/local/apache2/conf/httpd.conf
COPY entrypoint.sh /
ENTRYPOINT [ "/bin/sh" ]
CMD [ "/entrypoint.sh" ]