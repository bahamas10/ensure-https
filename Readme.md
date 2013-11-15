# Ensure-HTTPS

This is a little utility package that creates an HTTP-Server that directly redirects to an HTTPS server. We use this, because our entire site is running under HTTPS. Of course when users type an address into their browser, or external people link to us, they often do not specify the protocol so HTTP is used. So we use this little server to redirect every HTTP URL to its HTTPS equivalent.

## Usage

    var ensure=require('ensure-https');
    var options={
      'accessLog':undefined       // If this is set then Apache style access logs are written to stdout
      'forceHost':undefined,      // If this is set then the destination URL is forced to this hostname
      'host':'localhost',         // This is the default host to use (for HTTP/0.9 clients) (default: localhost)
      'serverName':'ensure-https' // This is the `server` response header sent to clients   (default: ensure-https)
      'sslPort':443,              // This is the port of your HTTPS server if it is not 443 (default: 443)
      'statusCode':301,           // This is the HTTP Status-Code to use                    (defualt: 301)
    };
    var server=ensure.createServer(options);
    server.listen(80);

## Command Line

Install the command line server with

    [sudo] npm install -g ensure-https

Then fire it up:

    $ [sudo] ensure-https
    server started: http://0.0.0.0:8080
    127.0.0.1 - - [15/Nov/2013:11:53:00 -0500] "GET / HTTP/1.1" 301 - "-" "curl/7.30.0"

You can set various server options by setting environmental variables

- `ENSURE_HTTPS_FORCE_HOST`: same as `options.forceHost`
- `ENSURE_HTTPS_HOST`: same as `options.host`
- `ENSURE_HTTPS_SERVER_NAME`: same as `options.serverName`
- `ENSURE_HTTPS_SSL_PORT`: same as `options.sslPort`
- `ENSURE_HTTPS_STATUS_CODE`: same as `options.statusCode`
- `ENSURE_HTTPS_SERVER_PORT`: port on which to listen, defaults to `80`
- `ENSURE_HTTPS_SERVER_HOST`: host on which to listen, defaults to `0.0.0.0`

## License

MIT License
-----------

Copyright (C) 2012 YOUSURE Tarifvergleich GmbH

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
