[![NPM version](https://badge.fury.io/js/mm-mongoose-connection.svg)](http://badge.fury.io/js/mm-mongoose-connection)
mm-mongoose-connection
======================
The `mm-mongoose-connection` module follow best practice for creating, maintaining and using a mongoose connection like:
 * open the connection when the app process start
 * start the app server after the database connection is open (optional)
 * monitor the connection events (`connected`, `open`, `error` and `disconnected`)
 * close the connection when the app process terminates

## Installation

```bash
$ npm install mm-mongoose-connection --save
```

## Configuration
The `mm-mongoose-connection` module accept two arguments `config` and `callback`. The `config` objects must contains `dbURI`
and `dbOptions` properties as you can see in usages below (see full list of `dbOptions` properties [here](http://mongoosejs.com/docs/connections.html)). The `callback` argument is optional and it's up to you if you want
to start app the server after mongodb connection is open.
> **Hint:** It's good practice to start app server after database connection is open.

## Usage

```js
var app = require('express')();
var mongodb = require('mm-mongoose-connection');

var config = {
  dbURI: 'mongodb://127.0.0.1:27017/connectionDemo',
  dbOptions: {user: '', pass: ''}
}
// start up the mongodb
mongodb(config, function startServer() {
    // start up the server
    app.listen(3000, function () {
        console.info('app started on port: 3000');
    });
});
```
> **Hint:** See real app usage [here](https://github.com/martinmicunda/employee-scheduling).

## Example
You can view live examples here:

<a href="http://runnable.com/U-I3ooLFYVYguhni/mm-mongoose-connection-example-for-node-js-mongodb-and-express" target="_blank"><img src="https://runnable.com/external/styles/assets/runnablebtn.png" style="width:67px;height:25px;"></a>

## License

    The MIT License
    
    Copyright (c) 2014 Martin Micunda  

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
