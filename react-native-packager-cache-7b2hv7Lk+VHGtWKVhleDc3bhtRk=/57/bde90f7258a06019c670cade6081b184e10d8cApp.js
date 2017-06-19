var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/App.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var Login = require('./src/props/naviago_map_planning/components/Login');

var userReducers = require('./src/props/naviago_map_planning/reducers/user');


var store = (0, _redux.createStore)((0, _redux.combineReducers)({ userReducers: userReducers }));

var App = function (_React$Component) {
  babelHelpers.inherits(App, _React$Component);

  function App() {
    babelHelpers.classCallCheck(this, App);
    return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  babelHelpers.createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(Login, { markers: [], __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      });
    }
  }]);
  return App;
}(_react2.default.Component);

var MyApp = function (_React$Component2) {
  babelHelpers.inherits(MyApp, _React$Component2);

  function MyApp() {
    babelHelpers.classCallCheck(this, MyApp);
    return babelHelpers.possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  babelHelpers.createClass(MyApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        function () {
          return _react2.default.createElement(App, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          });
        }
      );
    }
  }]);
  return MyApp;
}(_react2.default.Component);

_reactNative.AppRegistry.registerComponent('MyApp', function () {
  return MyApp;
});