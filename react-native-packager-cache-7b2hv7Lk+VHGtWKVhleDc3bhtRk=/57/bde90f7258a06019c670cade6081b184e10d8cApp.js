'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _app = require('./src/props/naviago_map_planning/containers/app');

var _app2 = babelHelpers.interopRequireDefault(_app);

var _search = require('./src/props/naviago_map_planning/components/search');

var _search2 = babelHelpers.interopRequireDefault(_search);

var _login = require('./src/props/naviago_map_planning/components/login');

var _login2 = babelHelpers.interopRequireDefault(_login);

var MyApp = function (_Component) {
  babelHelpers.inherits(MyApp, _Component);

  function MyApp() {
    babelHelpers.classCallCheck(this, MyApp);
    return babelHelpers.possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  babelHelpers.createClass(MyApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1 }, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        _react2.default.createElement(_app2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }),
        _react2.default.createElement(_search2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        })
      );
    }
  }]);
  return MyApp;
}(_react.Component);

exports.default = MyApp;