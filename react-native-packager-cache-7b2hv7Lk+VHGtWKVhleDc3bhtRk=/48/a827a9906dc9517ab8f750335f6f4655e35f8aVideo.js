Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS = exports.IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS = exports.IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT = exports.IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT = undefined;

var _class,
    _temp,
    _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/expo/src/Video.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Asset = require('./Asset');

var _Asset2 = babelHelpers.interopRequireDefault(_Asset);

var _AV = require('./AV');

var IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT = exports.IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT = 0;
var IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT = exports.IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT = 1;
var IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS = exports.IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS = 2;
var IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS = exports.IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS = 3;

var _STYLES = _reactNative.StyleSheet.create({
  base: {
    overflow: 'hidden'
  },
  poster: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'contain'
  }
});

var Video = (_temp = _class = function (_Component) {
  babelHelpers.inherits(Video, _Component);

  function Video(props) {
    var _this2 = this;

    babelHelpers.classCallCheck(this, Video);

    var _this = babelHelpers.possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));

    _this._assignRoot = function (component) {
      _this._root = component;
    };

    _this._handleNewStatus = function (status) {
      if (_this.state.showPoster && status.isLoaded && (status.isPlaying || status.positionMillis !== 0)) {
        _this.setState({ showPoster: false });
      }

      if (_this.props.callback) {
        _this.props.callback(status);
      }
    };

    _this._performOperationAndHandleStatusAsync = function _callee(operation) {
      var _status;

      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_this._root) {
                _context.next = 8;
                break;
              }

              _context.next = 3;
              return regeneratorRuntime.awrap(operation((0, _reactNative.findNodeHandle)(_this._root)));

            case 3:
              _status = _context.sent;

              _this._handleNewStatus(_status);
              return _context.abrupt('return', _status);

            case 8:
              throw new Error('Cannot complete operation because the Video component has not yet loaded.');

            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, null, _this2);
    };

    _this._setIOSFullscreen = function _callee2(value) {
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(_reactNative.Platform.OS !== 'ios')) {
                _context2.next = 2;
                break;
              }

              throw new Error('Cannot call fullscreen method if the OS is not iOS!');

            case 2:
              return _context2.abrupt('return', _this._performOperationAndHandleStatusAsync(function (tag) {
                return _reactNative.NativeModules.ExponentVideoManager.setFullscreen(tag, true);
              }));

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, null, _this2);
    };

    _this.presentIOSFullscreenPlayer = function _callee3() {
      return regeneratorRuntime.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt('return', _this._setIOSFullscreen(true));

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, null, _this2);
    };

    _this.dismissIOSFullscreenPlayer = function _callee4() {
      return regeneratorRuntime.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt('return', _this._setIOSFullscreen(false));

            case 1:
            case 'end':
              return _context4.stop();
          }
        }
      }, null, _this2);
    };

    _this.getStatusAsync = function _callee5() {
      return regeneratorRuntime.async(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt('return', _this._performOperationAndHandleStatusAsync(function (tag) {
                return _reactNative.NativeModules.ExponentAV.getStatusForVideo(tag);
              }));

            case 1:
            case 'end':
              return _context5.stop();
          }
        }
      }, null, _this2);
    };

    _this.setCallback = function (callback) {
      _this.setNativeProps({ callback: callback });
      _this.getStatusAsync();
    };

    _this.loadAsync = function _callee6(source) {
      var initialStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var downloadFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var _ref, uri, fullInitialStatus;

      return regeneratorRuntime.async(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap((0, _AV._getURIAndFullInitialStatusForLoadAsync)(source, initialStatus, downloadFirst));

            case 2:
              _ref = _context6.sent;
              uri = _ref.uri;
              fullInitialStatus = _ref.fullInitialStatus;
              return _context6.abrupt('return', _this._performOperationAndHandleStatusAsync(function (tag) {
                return _reactNative.NativeModules.ExponentAV.loadForVideo(tag, uri, fullInitialStatus);
              }));

            case 6:
            case 'end':
              return _context6.stop();
          }
        }
      }, null, _this2);
    };

    _this.unloadAsync = function _callee7() {
      return regeneratorRuntime.async(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt('return', _this._performOperationAndHandleStatusAsync(function (tag) {
                return _reactNative.NativeModules.ExponentAV.unloadForVideo(tag);
              }));

            case 1:
            case 'end':
              return _context7.stop();
          }
        }
      }, null, _this2);
    };

    _this.setStatusAsync = function _callee8(status) {
      return regeneratorRuntime.async(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              (0, _AV._throwErrorIfValuesOutOfBoundsInStatus)(status);
              return _context8.abrupt('return', _this._performOperationAndHandleStatusAsync(function (tag) {
                return _reactNative.NativeModules.ExponentAV.setStatusForVideo(tag, status);
              }));

            case 2:
            case 'end':
              return _context8.stop();
          }
        }
      }, null, _this2);
    };

    _this._nativeCallback = function (event) {
      _this._handleNewStatus(event.nativeEvent);
    };

    _this._nativeOnLoadStart = function (event) {
      if (_this.props.onLoadStart) {
        _this.props.onLoadStart();
      }
    };

    _this._nativeOnLoad = function (event) {
      if (_this.props.onLoad) {
        _this.props.onLoad(event.nativeEvent);
      }
      _this._handleNewStatus(event.nativeEvent);
    };

    _this._nativeOnError = function (event) {
      var error = event.nativeEvent.error;
      if (_this.props.onError) {
        _this.props.onError(error);
      }
      _this._handleNewStatus((0, _AV._getUnloadedStatus)(error));
    };

    _this._nativeOnReadyForDisplay = function (event) {
      if (_this.props.onReadyForDisplay) {
        _this.props.onReadyForDisplay(event.nativeEvent);
      }
    };

    _this._nativeOnFullscreenUpdate = function (event) {
      if (_this.props.onIOSFullscreenUpdate) {
        _this.props.onIOSFullscreenUpdate(event.nativeEvent);
      }
    };

    _this.state = {
      showPoster: props.usePoster != null && props.usePoster
    };
    return _this;
  }

  babelHelpers.createClass(Video, [{
    key: 'setNativeProps',
    value: function setNativeProps(nativeProps) {
      this._root.setNativeProps(nativeProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var uri = (0, _AV._getURIFromSource)(this.props.source);

      var nativeResizeMode = _reactNative.NativeModules.UIManager.ExponentVideo.Constants.ScaleNone;
      if (this.props.resizeMode) {
        var _resizeMode = this.props.resizeMode;
        if (_resizeMode === Video.RESIZE_MODE_STRETCH) {
          nativeResizeMode = _reactNative.NativeModules.UIManager.ExponentVideo.Constants.ScaleToFill;
        } else if (_resizeMode === Video.RESIZE_MODE_CONTAIN) {
          nativeResizeMode = _reactNative.NativeModules.UIManager.ExponentVideo.Constants.ScaleAspectFit;
        } else if (_resizeMode === Video.RESIZE_MODE_COVER) {
          nativeResizeMode = _reactNative.NativeModules.UIManager.ExponentVideo.Constants.ScaleAspectFill;
        }
      }

      var status = babelHelpers.extends({}, this.props.status);
      ['progressUpdateIntervalMillis', 'positionMillis', 'shouldPlay', 'rate', 'shouldCorrectPitch', 'volume', 'isMuted', 'isLooping'].forEach(function (prop) {
        if (prop in _this3.props) {
          status[prop] = _this3.props[prop];
        }
      });

      var nativeProps = babelHelpers.extends({
        style: _STYLES.base
      }, this.props, {
        uri: uri,
        nativeResizeMode: nativeResizeMode,
        status: status,
        onStatusUpdateNative: this._nativeCallback,
        onLoadStartNative: this._nativeOnLoadStart,
        onLoadNative: this._nativeOnLoad,
        onErrorNative: this._nativeOnError,
        onReadyForDisplayNative: this._nativeOnReadyForDisplay,
        onFullscreenUpdateNative: this._nativeOnFullscreenUpdate
      });

      return this.props.usePoster && this.state.showPoster ? _react2.default.createElement(
        _reactNative.View,
        { style: nativeProps.style, __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          }
        },
        _react2.default.createElement(ExponentVideo, babelHelpers.extends({ ref: this._assignRoot }, nativeProps, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355
          }
        })),
        _react2.default.createElement(_reactNative.Image, { style: _STYLES.poster, source: this.props.posterSource, __source: {
            fileName: _jsxFileName,
            lineNumber: 356
          }
        })
      ) : _react2.default.createElement(ExponentVideo, babelHelpers.extends({ ref: this._assignRoot }, nativeProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }));
    }
  }]);
  return Video;
}(_react.Component), _class.RESIZE_MODE_CONTAIN = 'contain', _class.RESIZE_MODE_COVER = 'cover', _class.RESIZE_MODE_STRETCH = 'stretch', _temp);
exports.default = Video;


babelHelpers.extends(Video.prototype, _AV._COMMON_AV_PLAYBACK_METHODS);

Video.propTypes = babelHelpers.extends({
  source: _react.PropTypes.oneOfType([_react.PropTypes.shape({
    uri: _react.PropTypes.string
  }), _react.PropTypes.number]),
  posterSource: _react.PropTypes.oneOfType([_react.PropTypes.shape({
    uri: _react.PropTypes.string
  }), _react.PropTypes.number]),

  callback: _react.PropTypes.func,
  onLoadStart: _react.PropTypes.func,
  onLoad: _react.PropTypes.func,
  onError: _react.PropTypes.func,
  onIOSFullscreenUpdate: _react.PropTypes.func,
  onReadyForDisplay: _react.PropTypes.func,

  useNativeControls: _react.PropTypes.bool,
  resizeMode: _react.PropTypes.string,
  usePoster: _react.PropTypes.bool,

  status: _react.PropTypes.shape({
    progressUpdateIntervalMillis: _react.PropTypes.number,
    positionMillis: _react.PropTypes.number,
    shouldPlay: _react.PropTypes.bool,
    rate: _react.PropTypes.number,
    shouldCorrectPitch: _react.PropTypes.bool,
    volume: _react.PropTypes.number,
    isMuted: _react.PropTypes.bool,
    isLooping: _react.PropTypes.bool
  }),
  progressUpdateIntervalMillis: _react.PropTypes.number,
  positionMillis: _react.PropTypes.number,
  shouldPlay: _react.PropTypes.bool,
  rate: _react.PropTypes.number,
  shouldCorrectPitch: _react.PropTypes.bool,
  volume: _react.PropTypes.number,
  isMuted: _react.PropTypes.bool,
  isLooping: _react.PropTypes.bool,

  scaleX: _react2.default.PropTypes.number,
  scaleY: _react2.default.PropTypes.number,
  translateX: _react2.default.PropTypes.number,
  translateY: _react2.default.PropTypes.number,
  rotation: _react2.default.PropTypes.number
}, _reactNative.ViewPropTypes);

var ExponentVideo = (0, _reactNative.requireNativeComponent)('ExponentVideo', Video, {
  nativeOnly: {
    uri: true,
    nativeResizeMode: true,
    onStatusUpdateNative: true,
    onLoadStartNative: true,
    onLoadNative: true,
    onErrorNative: true,
    onReadyForDisplayNative: true,
    onFullscreenUpdateNative: true
  }
});