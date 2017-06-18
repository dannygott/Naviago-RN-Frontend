Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/Naviago-RN-Frontend/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _naviago_map_planning = require('./src/props/naviago_map_planning/naviago_map_planning.js');

var _naviago_map_planning2 = babelHelpers.interopRequireDefault(_naviago_map_planning);

var width_Full = _reactNative.Dimensions.get('window').width;
var height_Full = _reactNative.Dimensions.get('window').height;
var App = function (_React$Component) {
  babelHelpers.inherits(App, _React$Component);

  function App() {
    babelHelpers.classCallCheck(this, App);
    return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  babelHelpers.createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_naviago_map_planning2.default, { markers: [], __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      });
    }
  }]);
  return App;
}(_react2.default.Component);

exports.default = App;