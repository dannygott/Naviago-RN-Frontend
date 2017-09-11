'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/src/props/naviago_map_planning/containers/counterApp.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = require('redux');

var _counter = require('../components/counter');

var _counter2 = _interopRequireDefault(_counter);

var _counterActions = require('../actions/counterActions');

var counterActions = _interopRequireWildcard(_counterActions);

var _reactRedux = require('react-redux');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CounterApp: {
    displayName: 'CounterApp'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/mnt/c/Users/Daniel/Naviago-RN-Frontend/src/props/naviago_map_planning/containers/counterApp.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var CounterApp = _wrapComponent('CounterApp')(function (_Component) {
  _inherits(CounterApp, _Component);

  function CounterApp(props) {
    _classCallCheck(this, CounterApp);

    return _possibleConstructorReturn(this, (CounterApp.__proto__ || Object.getPrototypeOf(CounterApp)).call(this, props));
  }

  _createClass(CounterApp, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          state = _props.state,
          actions = _props.actions;

      return _react3.default.createElement(_counter2.default, _extends({
        counter: state.count,
        locations: state.locations
      }, actions, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }));
    }
  }]);

  return CounterApp;
}(_react2.Component));

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    state: state.counter
  };
}, function (dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(counterActions, dispatch)
  };
})(CounterApp);