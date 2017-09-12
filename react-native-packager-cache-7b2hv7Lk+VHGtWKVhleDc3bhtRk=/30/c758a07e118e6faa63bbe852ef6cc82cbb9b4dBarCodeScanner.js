Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Constants = undefined;

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp2,
    _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/expo/src/BarCodeScanner.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  BarCodeScanner: {
    displayName: 'BarCodeScanner'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/expo/src/BarCodeScanner.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var BarCodeScannerManager = _reactNative.NativeModules.ExponentBarCodeScannerManager || _reactNative.NativeModules.ExponentBarCodeScannerModule;

function convertNativeProps(props) {
  var newProps = _extends({}, props);
  if (typeof props.torchMode === 'string') {
    newProps.torchMode = BarCodeScanner.Constants.TorchMode[props.torchMode];
  }

  if (typeof props.type === 'string') {
    newProps.type = BarCodeScanner.Constants.Type[props.type];
  }

  return newProps;
}

var EventThrottleMs = 500;

var BarCodeScanner = _wrapComponent('BarCodeScanner')((_temp2 = _class = function (_React$Component) {
  _inherits(BarCodeScanner, _React$Component);

  function BarCodeScanner() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BarCodeScanner);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BarCodeScanner.__proto__ || Object.getPrototypeOf(BarCodeScanner)).call.apply(_ref, [this].concat(args))), _this), _this._onBarCodeRead = function (_ref2) {
      var nativeEvent = _ref2.nativeEvent;

      if (_this._lastEvent && JSON.stringify(nativeEvent) === _this._lastEvent && new Date() - _this._lastEventTime < EventThrottleMs) {
        return;
      }

      if (_this.props.onBarCodeRead) {
        _this.props.onBarCodeRead(nativeEvent);
        _this._lastEvent = JSON.stringify(nativeEvent);
        _this._lastEventTime = new Date();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BarCodeScanner, [{
    key: 'setNativeProps',
    value: function setNativeProps(props) {
      this.refs[CAMERA_REF].setNativeProps(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var nativeProps = convertNativeProps(this.props);

      return _react3.default.createElement(ExponentBarCodeScanner, _extends({}, nativeProps, {
        onBarCodeRead: this._onBarCodeRead,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }));
    }
  }]);

  return BarCodeScanner;
}(_react3.default.Component), _class.Constants = {
  BarCodeType: BarCodeScannerManager.BarCodeType,
  Type: BarCodeScannerManager.Type,
  TorchMode: BarCodeScannerManager.TorchMode
}, _class.propTypes = _extends({}, _reactNative.ViewPropTypes, {
  onBarCodeRead: _react2.PropTypes.func,
  barCodeTypes: _react2.PropTypes.array,
  torchMode: _react2.PropTypes.oneOfType([_react2.PropTypes.string, _react2.PropTypes.number]),
  type: _react2.PropTypes.oneOfType([_react2.PropTypes.string, _react2.PropTypes.number])
}), _class.defaultProps = {
  type: BarCodeScannerManager.Type.back,
  torchMode: BarCodeScannerManager.TorchMode.off,
  barCodeTypes: Object.values(BarCodeScannerManager.BarCodeType)
}, _temp2));

exports.default = BarCodeScanner;
var Constants = exports.Constants = BarCodeScanner.Constants;

var ExponentBarCodeScanner = (0, _reactNative.requireNativeComponent)('ExponentBarCodeScanner', BarCodeScanner, {
  nativeOnly: {
    onBarCodeRead: true
  }
});