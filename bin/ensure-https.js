#!/usr/bin/env node
/*
 * Ensure HTTPs command line server
 */

var ensure = require('../');

var options = {
  accessLogs: true,
  forceHost: process.env.ENSURE_HTTPS_FORCE_HOST,
  host: process.env.ENSURE_HTTPS_HOST,
  serverName: process.env.ENSURE_HTTPS_SERVER_NAME,
  sslPort: process.env.ENSURE_HTTPS_SSL_PORT,
  statusCode: process.env.ENSURE_HTTPS_STATUS_CODE
};
var port = process.env.ENSURE_HTTPS_SERVER_PORT || 80;
var host = process.env.ENSURE_HTTPS_SERVER_HOST || '0.0.0.0';

var server = ensure.createServer(options);
server.listen(port, host, started);

function started() {
  console.log('server started: http://%s:%d', host, port);
}
