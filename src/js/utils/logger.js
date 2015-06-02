"use strict";

var _ = require('lodash');


var levelValues = {
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
};


export default class Logger {

  constructor (prefix, minLevel = null) {
    this.prefix = prefix || '';
    this.minLevel = minLevel || 'debug';

    this._initMethods();
  }


  create (childName, minLevel = null) {
    return new Logger(
      ( this.prefix.length ? this.prefix + '/' : '' ) + childName,
      minLevel || this.minLevel
    );
  }


  _writeToLog (level, msg) {
    console[level].call(console, `${this.prefix}[${level.toUpperCase()}]: ${msg}`);
  }


  _constructLogMethod (level) {
    var self = this;

    if (levelValues[level] >= levelValues[self.minLevel]) {
      self[level] = function() {
        _.toArray(arguments).forEach(function(arg) {
          self._writeToLog(level, arg);
        });
      }      
    } else {
      self[level] = self._noop;
    }
  }

  _initMethods () {
    this._constructLogMethod('debug');
    this._constructLogMethod('info');
    this._constructLogMethod('warn');
    this._constructLogMethod('error');
  }

  _noop () {}
}

