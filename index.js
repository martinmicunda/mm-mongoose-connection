'use strict';

/**
 * Module dependencies.
 */
var logger   = require('mm-node-logger')(module),
    mongoose = require('mongoose');

/**
 * This module follow best practice for creating, maintaining and using a Mongoose connection like:
 *  - open the connection when the app starts
 *  - monitor the connection events (`connected`, `error` and `disconnected`)
 *  - close the connection when the app process terminates
 *
 * @example
 *  ```js
 *      var mongo = require('mm-mongoose-connection');
 *      var config = {
 *          dbURI: 'mongodb://127.0.0.1:27017/connectionDemo',
 *          dbOptions: {user: '', pass: ''}
 *      }
 *      // start mongo db
 *      mongo(config.get('mongo'));
 *  ```
 *
 * @param {Object} config - the mongo config connection options
 */
module.exports = function(config) {

    // create the database connection
    mongoose.connect(config.dbURI, config.dbOptions);

    // when successfully connected
    mongoose.connection.on('connected', function () {
        logger.info('Mongoose connected to ' + config.dbURI);
    });

    // ff the connection throws an error
    mongoose.connection.on('error', function (err) {
        logger.error('Mongoose connection error: ' + err);
    });

    // when the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        logger.info('Mongoose disconnected');
    });

    // if the Node process ends, close the Mongoose connection
    process.on('SIGINT', function() {
        mongoose.connection.close(function () {
            logger.info('Mongoose disconnected through app termination');
            process.exit(0);
        });
    });
};

// TODO: test
// http://www.scotchmedia.com/tutorials/express/authentication/1/06
// https://github.com/elliotf/mocha-mongoose
