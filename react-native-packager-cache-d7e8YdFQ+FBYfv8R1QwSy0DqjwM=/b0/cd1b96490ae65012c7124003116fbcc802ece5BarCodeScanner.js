Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Constants = exports.default = undefined;

var _class,
    _temp2,
    _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/expo/src/BarCodeScanner.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var BarCodeScannerManager = _reactNative.NativeModules.ExponentBarCodeScannerManager || _reactNative.NativeModules.ExponentBarCodeScannerModule;

function convertNativeProps(props) {
  var newProps = babelHelpers.extends({}, props);
  if (typeof props.torchMode === 'string') {
    newProps.torchMode = BarCodeScanner.Constants.TorchMode[props.torchMode];
  }

  if (typeof props.type === 'string') {
    newProps.type = BarCodeScanner.Constants.Type[props.type];
  }

  return newProps;
}

var EventThrottleMs = 500;

var BarCodeScanner = (_temp2 = _class = function (_React$Component) {
  babelHelpers.inherits(BarCodeScanner, _React$Component);

  function BarCodeScanner() {
    var _ref;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, BarCodeScanner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = BarCodeScanner.__proto__ || Object.getPrototypeOf(BarCodeScanner)).call.apply(_ref, [this].concat(args))), _this), _this._onBarCodeRead = function (_ref2) {
      var nativeEvent = _ref2.nativeEvent;

      if (_this._lastEvent && JSON.stringify(nativeEvent) === _this._lastEvent && new Date() - _this._lastEventTime < EventThrottleMs) {
        return;
      }

      if (_this.props.onBarCodeRead) {
        _this.props.onBarCodeRead(nativeEvent);
        _this._lastEvent = JSON.stringify(nativeEvent);
        _this._lastEventTime = new Date();
      }
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(BarCodeScanner, [{
    key: 'setNativeProps',
    value: function setNativeProps(props) {
      this.refs[CAMERA_REF].setNativeProps(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var nativeProps = convertNativeProps(this.props);

      return _react2.default.createElement(ExponentBarCodeScanner, babelHelpers.extends({}, nativeProps, {
        onBarCodeRead: this._onBarCodeRead,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }));
    }
  }]);
  return BarCodeScanner;
}(_react2.default.Component), _class.Constants = {
  BarCodeType: BarCodeScannerManager.BarCodeType,
  Type: BarCodeScannerManager.Type,
  TorchMode: BarCodeScannerManager.TorchMode
}, _class.propTypes = babelHelpers.extends({}, _reactNative.ViewPropTypes, {
  onBarCodeRead: _react.PropTypes.func,
  barCodeTypes: _react.PropTypes.array,
  torchMode: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  type: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
}), _class.defaultProps = {
  type: BarCodeScannerManager.Type.back,
  torchMode: BarCodeScannerManager.TorchMode.off,
  barCodeTypes: Object.values(BarCodeScannerManager.BarCodeType)
}, _temp2);
exports.default = BarCodeScanner;
var Constants = exports.Constants = BarCodeScanner.Constants;

var ExponentBarCodeScanner = (0, _reactNative.requireNativeComponent)('ExponentBarCodeScanner', BarCodeScanner, {
  nativeOnly: {
    onBarCodeRead: true
  }
});