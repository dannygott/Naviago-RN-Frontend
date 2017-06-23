'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/src/props/naviago_map_planning/containers/counterApp.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _redux = require('redux');

var _counter = require('../components/counter');

var _counter2 = babelHelpers.interopRequireDefault(_counter);

var _counterActions = require('../actions/counterActions');

var counterActions = babelHelpers.interopRequireWildcard(_counterActions);

var _reactRedux = require('react-redux');

var CounterApp = function (_Component) {
  babelHelpers.inherits(CounterApp, _Component);

  function CounterApp(props) {
    babelHelpers.classCallCheck(this, CounterApp);
    return babelHelpers.possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).call(this, props));
  }

  babelHelpers.createClass(CounterApp, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          state = _props.state,
          actions = _props.actions;

      return _react2.default.createElement(_counter2.default, babelHelpers.extends({
        counter: state.count
      }, actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }));
    }
  }]);
  return CounterApp;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    state: state.counter
  };
}, function (dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(counterActions, dispatch)
  };
})(CounterApp);