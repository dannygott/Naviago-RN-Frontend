Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/expo/src/registerRootComponent.js';
exports.default = registerRootComponent;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Constants = require('./Constants');

var _Constants2 = babelHelpers.interopRequireDefault(_Constants);

var _Font = require('./Font');

var _Notifications = require('./Notifications');

var _Notifications2 = babelHelpers.interopRequireDefault(_Notifications);

function wrapWithExponentRoot(AppRootComponent) {
  var ExponentRootComponent = function (_React$Component) {
    babelHelpers.inherits(ExponentRootComponent, _React$Component);

    function ExponentRootComponent() {
      babelHelpers.classCallCheck(this, ExponentRootComponent);
      return babelHelpers.possibleConstructorReturn(this, (ExponentRootComponent.__proto__ || Object.getPrototypeOf(ExponentRootComponent)).apply(this, arguments));
    }

    babelHelpers.createClass(ExponentRootComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        _reactNative.StyleSheet.setStyleAttributePreprocessor('fontFamily', _Font.processFontFamily);

        if (this.props.exp.notification) {
          _Notifications2.default._setInitialNotification(this.props.exp.notification);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(AppRootComponent, babelHelpers.extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        }));
      }
    }]);
    return ExponentRootComponent;
  }(_react2.default.Component);

  return ExponentRootComponent;
}

function registerRootComponent(component) {
  _reactNative.AppRegistry.registerComponent('main', function () {
    return wrapWithExponentRoot(component);
  });
}