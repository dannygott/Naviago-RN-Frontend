Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Naviago_Map = require('./src/props/Naviago_Map.js');

var _Naviago_Map2 = babelHelpers.interopRequireDefault(_Naviago_Map);

var App = function (_React$Component) {
  babelHelpers.inherits(App, _React$Component);

  function App() {
    babelHelpers.classCallCheck(this, App);
    return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  babelHelpers.createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        _react2.default.createElement(_Naviago_Map2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        })
      );
    }
  }]);
  return App;
}(_react2.default.Component);

exports.default = App;


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});