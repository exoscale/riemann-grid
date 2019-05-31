# riemann-grid

Simple grid views for your riemann events

## Installing

Either download the jar file from the downloads section, or compile yourself

## Compiling

Compiling follows leiningen's SOP:

```
lein uberjar
```

The resulting jar is good to go, I would advise running at a very
low `Xmx` value, such as `-Xmx32m`

## Running

Just run the resulting jar, it optionally takes the
following arguments:

* `-l` or `--listen`: HTTP address to listen on
* `-p` or `--listen-port`: HTTP port to listen on
* `-H` or `--riemann-host`: Address where the riemann index lives
* `-P` or `--riemann-port`: Port the index listens on
* `-S` or `--riemann-hosts`: For multiple indexes, e.g. '--riemann-hosts server1.example.com:5555,server2.example.com:5757'
* `-e` or `--environment`: Enable some debugging if set to "development"
* `-h` or `--help`: display help and exit

## Caveats

This first release is rough around the edges, it was
put together in about a day, please mind the following
issues:

* Without a working connection at startup, the daemon will not launch
* Logging configuration has to be supplied with `-Dlog4j.configuration=...`

## Roadmap

Small items:

* Optional authentication with github or google
* Retrying client
* Logging configuration
* WAR distribution support

Big items:

* Dashboard mode
* Link to graphite

## License

Copyright (c) 2012 Exoscale SA

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
