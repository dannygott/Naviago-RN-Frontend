Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/src/props/naviago_map_planning/containers/app.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = babelHelpers.interopRequireDefault(_reduxThunk);

var _reducers = require('../reducers');

var reducers = babelHelpers.interopRequireWildcard(_reducers);

var _mainMapApp = require('./mainMapApp');

var _mainMapApp2 = babelHelpers.interopRequireDefault(_mainMapApp);

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default)(_redux.createStore);
var reducer = (0, _redux.combineReducers)(reducers);
var store = createStoreWithMiddleware(reducer);

var App = function (_Component) {
  babelHelpers.inherits(App, _Component);

  function App() {
    babelHelpers.classCallCheck(this, App);
    return babelHelpers.possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  babelHelpers.createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        _react2.default.createElement(_mainMapApp2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        })
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;