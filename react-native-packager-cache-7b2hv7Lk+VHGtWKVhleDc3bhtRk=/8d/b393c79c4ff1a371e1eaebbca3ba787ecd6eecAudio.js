Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recording = exports.Sound = exports.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS = exports.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX = exports.INTERRUPTION_MODE_IOS_DUCK_OTHERS = exports.INTERRUPTION_MODE_IOS_DO_NOT_MIX = exports.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _this4 = this;

exports.setIsEnabledAsync = setIsEnabledAsync;
exports.setAudioModeAsync = setAudioModeAsync;

var _reactNative = require('react-native');

var _Asset = require('./Asset');

var _Asset2 = _interopRequireDefault(_Asset);

var _AV = require('./AV');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS = exports.INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS = 0;
var INTERRUPTION_MODE_IOS_DO_NOT_MIX = exports.INTERRUPTION_MODE_IOS_DO_NOT_MIX = 1;
var INTERRUPTION_MODE_IOS_DUCK_OTHERS = exports.INTERRUPTION_MODE_IOS_DUCK_OTHERS = 2;

var INTERRUPTION_MODE_ANDROID_DO_NOT_MIX = exports.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX = 1;
var INTERRUPTION_MODE_ANDROID_DUCK_OTHERS = exports.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS = 2;

var _enabled = true;
var _recorderExists = false;
var _DISABLED_ERROR = new Error('Cannot complete operation because audio is not enabled.');

function setIsEnabledAsync(value) {
  return regeneratorRuntime.async(function setIsEnabledAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _enabled = value;
          _context.next = 3;
          return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentAV.setAudioIsEnabled(value));

        case 3:
        case 'end':
          return _context.stop();
      }
    }
  }, null, this);
}

function setAudioModeAsync(mode) {
  return regeneratorRuntime.async(function setAudioModeAsync$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(!('allowsRecordingIOS' in mode) || !('interruptionModeIOS' in mode) || !('playsInSilentLockedModeIOS' in mode) || !('interruptionModeAndroid' in mode) || !('shouldDuckAndroid' in mode))) {
            _context2.next = 2;
            break;
          }

          throw new Error('Audio mode must contain keys "allowsRecordingIOS", "interruptionModeIOS", "playsInSilentLockedModeIOS", "interruptionModeAndroid", and "shouldDuckAndroid".');

        case 2:
          if (!(mode.interruptionModeIOS !== INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS && mode.interruptionModeIOS !== INTERRUPTION_MODE_IOS_DO_NOT_MIX && mode.interruptionModeIOS !== INTERRUPTION_MODE_IOS_DUCK_OTHERS)) {
            _context2.next = 4;
            break;
          }

          throw new Error('"interruptionModeIOS" must an integer between ' + INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS + ' and ' + INTERRUPTION_MODE_IOS_DUCK_OTHERS + '.');

        case 4:
          if (!(mode.interruptionModeAndroid !== INTERRUPTION_MODE_ANDROID_DO_NOT_MIX && mode.interruptionModeAndroid !== INTERRUPTION_MODE_ANDROID_DUCK_OTHERS)) {
            _context2.next = 6;
            break;
          }

          throw new Error('"interruptionModeAndroid" must an integer between ' + INTERRUPTION_MODE_ANDROID_DO_NOT_MIX + ' and ' + INTERRUPTION_MODE_ANDROID_DUCK_OTHERS + '.');

        case 6:
          if (!(typeof mode.allowsRecordingIOS !== 'boolean' || typeof mode.playsInSilentLockedModeIOS !== 'boolean' || typeof mode.shouldDuckAndroid !== 'boolean')) {
            _context2.next = 8;
            break;
          }

          throw new Error('"allowsRecordingIOS", "playsInSilentLockedModeIOS", and "shouldDuckAndroid" must be booleans.');

        case 8:
          _context2.next = 10;
          return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentAV.setAudioMode(mode));

        case 10:
        case 'end':
          return _context2.stop();
      }
    }
  }, null, this);
}

var Sound = exports.Sound = (_temp = _class = function () {
  function Sound() {
    var _this = this;

    _classCallCheck(this, Sound);

    this._statusUpdateCallback = function (status) {
      _this._callCallbackForNewStatus(status);
      _this._setStatusUpdateCallback();
    };

    this._errorCallback = function (error) {
      _this._loaded = false;
      _this._key = -1;
      _this._callCallbackForNewStatus((0, _AV._getUnloadedStatus)(error));
    };

    this.getStatusAsync = function _callee() {
      var status;
      return regeneratorRuntime.async(function _callee$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!_this._loaded) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt('return', _this._performOperationAndHandleStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAV.getStatusForSound(_this._key);
              }));

            case 2:
              status = (0, _AV._getUnloadedStatus)();

              _this._callCallbackForNewStatus(status);
              return _context3.abrupt('return', status);

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, null, _this);
    };

    this._loaded = false;
    this._loading = false;
    this._key = -1;
    this._callback = null;
  }

  _createClass(Sound, [{
    key: '_callCallbackForNewStatus',
    value: function _callCallbackForNewStatus(status) {
      if (this._callback != null) {
        this._callback(status);
      }
    }
  }, {
    key: '_performOperationAndHandleStatusAsync',
    value: function _performOperationAndHandleStatusAsync(operation) {
      var _status;

      return regeneratorRuntime.async(function _performOperationAndHandleStatusAsync$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (_enabled) {
                _context4.next = 2;
                break;
              }

              throw _DISABLED_ERROR;

            case 2:
              if (!this._loaded) {
                _context4.next = 10;
                break;
              }

              _context4.next = 5;
              return regeneratorRuntime.awrap(operation());

            case 5:
              _status = _context4.sent;

              this._callCallbackForNewStatus(_status);
              return _context4.abrupt('return', _status);

            case 10:
              throw new Error('Cannot complete operation because sound is not loaded.');

            case 11:
            case 'end':
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: '_setStatusUpdateCallback',
    value: function _setStatusUpdateCallback() {
      if (this._loaded) {
        _reactNative.NativeModules.ExponentAV.setStatusUpdateCallbackForSound(this._key, this._statusUpdateCallback);
      }
    }
  }, {
    key: 'setCallback',
    value: function setCallback(callback) {
      this._callback = callback;
      this.getStatusAsync();
    }
  }, {
    key: 'loadAsync',
    value: function loadAsync(source) {
      var initialStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var downloadFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var _ref, uri, fullInitialStatus;

      return regeneratorRuntime.async(function loadAsync$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (_enabled) {
                _context5.next = 2;
                break;
              }

              throw _DISABLED_ERROR;

            case 2:
              if (!this.loading) {
                _context5.next = 4;
                break;
              }

              throw new Error('The Sound is already loading.');

            case 4:
              if (this._loaded) {
                _context5.next = 14;
                break;
              }

              this._loading = true;

              _context5.next = 8;
              return regeneratorRuntime.awrap((0, _AV._getURIAndFullInitialStatusForLoadAsync)(source, initialStatus, downloadFirst));

            case 8:
              _ref = _context5.sent;
              uri = _ref.uri;
              fullInitialStatus = _ref.fullInitialStatus;
              return _context5.abrupt('return', new Promise(function (resolve, reject) {
                var _this2 = this;

                var loadSuccess = function loadSuccess(key, status) {
                  _this2._key = key;
                  _this2._loaded = true;
                  _this2._loading = false;
                  _reactNative.NativeModules.ExponentAV.setErrorCallbackForSound(_this2._key, _this2._errorCallback);
                  _this2._setStatusUpdateCallback();
                  _this2._callCallbackForNewStatus(status);
                  resolve(status);
                };
                var loadError = function loadError(error) {
                  _this2._loading = false;
                  reject(new Error(error));
                };
                _reactNative.NativeModules.ExponentAV.loadForSound(uri, fullInitialStatus, loadSuccess, loadError);
              }.bind(this)));

            case 14:
              throw new Error('The Sound is already loaded.');

            case 15:
            case 'end':
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'unloadAsync',
    value: function unloadAsync() {
      var key, _status2;

      return regeneratorRuntime.async(function unloadAsync$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!this._loaded) {
                _context6.next = 11;
                break;
              }

              this._loaded = false;
              key = this._key;

              this._key = -1;
              _context6.next = 6;
              return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentAV.unloadForSound(key));

            case 6:
              _status2 = _context6.sent;

              this._callCallbackForNewStatus(_status2);
              return _context6.abrupt('return', _status2);

            case 11:
              return _context6.abrupt('return', this.getStatusAsync());

            case 12:
            case 'end':
              return _context6.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'setStatusAsync',
    value: function setStatusAsync(status) {
      var _this3 = this;

      return regeneratorRuntime.async(function setStatusAsync$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              (0, _AV._throwErrorIfValuesOutOfBoundsInStatus)(status);
              return _context7.abrupt('return', this._performOperationAndHandleStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAV.setStatusForSound(_this3._key, status);
              }));

            case 2:
            case 'end':
              return _context7.stop();
          }
        }
      }, null, this);
    }
  }]);

  return Sound;
}(), _class.create = function _callee2(source) {
  var initialStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var downloadFirst = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var sound, status;
  return regeneratorRuntime.async(function _callee2$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          sound = new Sound();

          sound.setCallback(callback);
          _context8.next = 4;
          return regeneratorRuntime.awrap(sound.loadAsync(source, initialStatus, downloadFirst));

        case 4:
          status = _context8.sent;
          return _context8.abrupt('return', { sound: sound, status: status });

        case 6:
        case 'end':
          return _context8.stop();
      }
    }
  }, null, _this4);
}, _temp);


_extends(Sound.prototype, _AV._COMMON_AV_PLAYBACK_METHODS);

var Recording = exports.Recording = function () {
  function Recording() {
    var _this5 = this;

    _classCallCheck(this, Recording);

    this._pollingLoop = function () {
      if (_enabled && _this5._canRecord && _this5._callback != null) {
        _this5.getStatusAsync();
        _this5._progressUpdateTimeoutVariable = setTimeout(_this5._pollingLoop, _this5._progressUpdateIntervalMillis);
      }
    };

    this.getStatusAsync = function _callee3() {
      var status;
      return regeneratorRuntime.async(function _callee3$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!_this5._canRecord) {
                _context9.next = 2;
                break;
              }

              return _context9.abrupt('return', _this5._performOperationAndHandleStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAV.getAudioRecordingStatus();
              }));

            case 2:
              status = _this5._isDoneRecording ? {
                canRecord: false,
                isDoneRecording: true,
                durationMillis: _this5._finalDurationMillis
              } : {
                canRecord: false,
                isDoneRecording: false
              };

              _this5._callCallbackForNewStatus(status);
              return _context9.abrupt('return', status);

            case 5:
            case 'end':
              return _context9.stop();
          }
        }
      }, null, _this5);
    };

    this._canRecord = false;
    this._isDoneRecording = false;
    this._finalDurationMillis = 0;
    this._uri = null;
    this._progressUpdateTimeoutVariable = null;
    this._progressUpdateIntervalMillis = _AV._DEFAULT_PROGRESS_UPDATE_INTERVAL_MILLIS;
  }

  _createClass(Recording, [{
    key: '_disablePolling',
    value: function _disablePolling() {
      if (this._progressUpdateTimeoutVariable != null) {
        clearTimeout(this._progressUpdateTimeoutVariable);
        this._progressUpdateTimeoutVariable = null;
      }
    }
  }, {
    key: '_enablePollingIfNecessaryAndPossible',
    value: function _enablePollingIfNecessaryAndPossible() {
      if (_enabled && this._canRecord && this._callback != null) {
        this._disablePolling();
        this._pollingLoop();
      }
    }
  }, {
    key: '_callCallbackForNewStatus',
    value: function _callCallbackForNewStatus(status) {
      if (this._callback != null) {
        this._callback(status);
      }
    }
  }, {
    key: '_performOperationAndHandleStatusAsync',
    value: function _performOperationAndHandleStatusAsync(operation) {
      var _status3;

      return regeneratorRuntime.async(function _performOperationAndHandleStatusAsync$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (_enabled) {
                _context10.next = 2;
                break;
              }

              throw _DISABLED_ERROR;

            case 2:
              if (!this._canRecord) {
                _context10.next = 10;
                break;
              }

              _context10.next = 5;
              return regeneratorRuntime.awrap(operation());

            case 5:
              _status3 = _context10.sent;

              this._callCallbackForNewStatus(_status3);
              return _context10.abrupt('return', _status3);

            case 10:
              throw new Error('Cannot complete operation because this recorder is not ready to record.');

            case 11:
            case 'end':
              return _context10.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'setCallback',
    value: function setCallback(callback) {
      this._callback = callback;
      if (callback == null) {
        this._disablePolling();
      } else {
        this._enablePollingIfNecessaryAndPossible();
      }
      this.getStatusAsync();
    }
  }, {
    key: 'setProgressUpdateInterval',
    value: function setProgressUpdateInterval(progressUpdateIntervalMillis) {
      this._progressUpdateIntervalMillis = progressUpdateIntervalMillis;
      this.getStatusAsync();
    }
  }, {
    key: 'prepareToRecordAsync',
    value: function prepareToRecordAsync() {
      var _ref2, uri, _status4;

      return regeneratorRuntime.async(function prepareToRecordAsync$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (_enabled) {
                _context11.next = 2;
                break;
              }

              throw _DISABLED_ERROR;

            case 2:
              if (!_recorderExists) {
                _context11.next = 4;
                break;
              }

              throw new Error('Only one Recording object can be prepared at a given time.');

            case 4:
              if (!this._isDoneRecording) {
                _context11.next = 6;
                break;
              }

              throw new Error('This Recording object is done recording; you must make a new one.');

            case 6:
              if (this._canRecord) {
                _context11.next = 20;
                break;
              }

              _context11.next = 9;
              return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentAV.prepareAudioRecorder());

            case 9:
              _ref2 = _context11.sent;
              uri = _ref2.uri;
              _status4 = _ref2.status;

              _recorderExists = true;
              this._uri = uri;
              this._canRecord = true;
              this._callCallbackForNewStatus(_status4);
              this._enablePollingIfNecessaryAndPossible();
              return _context11.abrupt('return', _status4);

            case 20:
              throw new Error('This Recording object is already prepared to record.');

            case 21:
            case 'end':
              return _context11.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'startAsync',
    value: function startAsync() {
      return regeneratorRuntime.async(function startAsync$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt('return', this._performOperationAndHandleStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAV.startAudioRecording();
              }));

            case 1:
            case 'end':
              return _context12.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'pauseAsync',
    value: function pauseAsync() {
      return regeneratorRuntime.async(function pauseAsync$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt('return', this._performOperationAndHandleStatusAsync(function () {
                return _reactNative.NativeModules.ExponentAV.pauseAudioRecording();
              }));

            case 1:
            case 'end':
              return _context13.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'stopAndUnloadAsync',
    value: function stopAndUnloadAsync() {
      var stopStatus;
      return regeneratorRuntime.async(function stopAndUnloadAsync$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              if (this._canRecord) {
                _context14.next = 2;
                break;
              }

              throw new Error('Cannot unload a Recording that has not been prepared.');

            case 2:
              _context14.next = 4;
              return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentAV.stopAudioRecording());

            case 4:
              stopStatus = _context14.sent;

              this._finalDurationMillis = stopStatus.durationMillis;
              this._disablePolling();

              _context14.next = 9;
              return regeneratorRuntime.awrap(_reactNative.NativeModules.ExponentAV.unloadAudioRecorder());

            case 9:
              this._canRecord = false;
              this._isDoneRecording = true;
              _recorderExists = false;
              return _context14.abrupt('return', this.getStatusAsync());

            case 13:
            case 'end':
              return _context14.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: 'getURI',
    value: function getURI() {
      return this._uri;
    }
  }, {
    key: 'createNewLoadedSound',
    value: function createNewLoadedSound() {
      var initialStatus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return regeneratorRuntime.async(function createNewLoadedSound$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              if (!(this._uri === null || !this._isDoneRecording)) {
                _context15.next = 2;
                break;
              }

              throw new Error('Cannot create sound when the Recording has not finished!');

            case 2:
              return _context15.abrupt('return', Sound.create({ uri: this._uri }, initialStatus, callback, false));

            case 3:
            case 'end':
              return _context15.stop();
          }
        }
      }, null, this);
    }
  }]);

  return Recording;
}();