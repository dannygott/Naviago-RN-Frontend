'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _app = require('./src/props/naviago_map_planning/containers/app');

var _app2 = babelHelpers.interopRequireDefault(_app);

var MyApp = function (_Component) {
  babelHelpers.inherits(MyApp, _Component);

  function MyApp() {
    babelHelpers.classCallCheck(this, MyApp);
    return babelHelpers.possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  babelHelpers.createClass(MyApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_app2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      });
    }
  }]);
  return MyApp;
}(_react.Component);

exports.default = MyApp;