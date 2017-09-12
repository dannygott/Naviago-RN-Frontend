'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.enableXDELogging = enableXDELogging;
exports.disableXDELogging = disableXDELogging;

var _uuidJs = require('uuid-js');

var _uuidJs2 = _interopRequireDefault(_uuidJs);

var _Constants = require('./Constants');

var Constants = _interopRequireWildcard(_Constants);

var _Queue = require('./lib/Queue');

var _Queue2 = _interopRequireDefault(_Queue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logQueue = new _Queue2.default();
var logCounter = 0;
var sessionId = _uuidJs2.default.create().toString();
var isSendingLogs = false;
var groupDepth = 0;

function enableXDELogging() {
  replaceConsoleFunction('log', 'info');
  replaceConsoleFunction('debug', 'info');
  replaceConsoleFunction('info', 'info');
  replaceConsoleFunction('warn', 'warn');
  replaceConsoleFunction('error', 'error');

  var originalGroup = console.group;
  console.group = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (originalGroup) {
      originalGroup.apply(console, args);
    }

    queueRemoteLog('info', {}, args);
    groupDepth++;
  };
  console.group.__restore = function () {
    console.group = originalGroup;
  };

  var originalGroupCollapsed = console.groupCollapsed;
  console.groupCollapsed = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (originalGroupCollapsed) {
      originalGroupCollapsed.apply(console, args);
    }

    queueRemoteLog('info', {
      groupCollapsed: true
    }, args);
    groupDepth++;
  };
  console.groupCollapsed.__restore = function () {
    console.groupCollapsed = originalGroupCollapsed;
  };

  var originalGroupEnd = console.groupEnd;
  console.groupEnd = function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    if (originalGroupEnd) {
      originalGroupEnd.apply(console, args);
    }

    if (groupDepth > 0) {
      groupDepth--;
    }
    queueRemoteLog('info', {
      shouldHide: true
    }, args);
  };
  console.groupEnd.__restore = function () {
    console.groupEnd = originalGroupEnd;
  };

  var originalAssert = console.assert;
  console.assert = function (assertion, errorString) {
    if (originalAssert) {
      originalAssert.apply(console, [assertion, errorString]);
    }

    if (!assertion) {
      queueRemoteLog('error', {}, 'Assertion failed: ' + errorString);
    }
  };
  console.assert.__restore = function () {
    console.assert = originalAssert;
  };
}

function disableXDELogging() {
  console.log.__restore();
  console.debug.__restore();
  console.info.__restore();
  console.warn.__restore();
  console.error.__restore();

  console.group.__restore();
  console.groupCollapsed.__restore();
  console.groupEnd.__restore();

  console.assert.__restore();
}

function sendRemoteLogsAsync() {
  var logs, currentLog;
  return regeneratorRuntime.async(function sendRemoteLogsAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!isSendingLogs) {
            _context.next = 2;
            break;
          }

          return _context.abrupt('return');

        case 2:
          logs = [];
          currentLog = logQueue.dequeue();

          if (currentLog) {
            _context.next = 8;
            break;
          }

          return _context.abrupt('return');

        case 8:
          isSendingLogs = true;

        case 9:

          while (currentLog) {
            logs.push(currentLog);
            currentLog = logQueue.dequeue();
          }

          _context.prev = 10;
          _context.next = 13;
          return regeneratorRuntime.awrap(fetch(Constants.manifest.logUrl, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              Connection: 'keep-alive',
              'Proxy-Connection': 'keep-alive',
              Accept: 'application/json',
              'Device-Id': Constants.deviceId,
              'Device-Name': Constants.deviceName,
              'Session-Id': sessionId
            },
            body: JSON.stringify(logs)
          }));

        case 13:
          _context.next = 17;
          break;

        case 15:
          _context.prev = 15;
          _context.t0 = _context['catch'](10);

        case 17:

          isSendingLogs = false;
          sendRemoteLogsAsync();

        case 19:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this, [[10, 15]]);
}

function queueRemoteLog(level, additionalFields, args) {
  logQueue.enqueue(_extends({
    count: logCounter++,
    level: level,
    groupDepth: groupDepth,
    body: args
  }, additionalFields));

  sendRemoteLogsAsync();
}

function replaceConsoleFunction(consoleFunc, level, additionalFields) {
  var original = console[consoleFunc];
  var newConsoleFunc = function newConsoleFunc() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    if (original) {
      original.apply(console, args);
    }
    queueRemoteLog(level, additionalFields, args);
  };

  newConsoleFunc.__restore = function () {
    console[consoleFunc] = original;
  };

  console[consoleFunc] = newConsoleFunc;
}

if (Constants.manifest && Constants.manifest.logUrl) {
  enableXDELogging();
}