'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/expo/src/BlurView.android.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _deprecatedPropType = require('react-native/Libraries/Utilities/deprecatedPropType');

var _deprecatedPropType2 = babelHelpers.interopRequireDefault(_deprecatedPropType);

var BlurView = (_temp = _class = function (_Component) {
  babelHelpers.inherits(BlurView, _Component);

  function BlurView() {
    babelHelpers.classCallCheck(this, BlurView);
    return babelHelpers.possibleConstructorReturn(this, (BlurView.__proto__ || Object.getPrototypeOf(BlurView)).apply(this, arguments));
  }

  babelHelpers.createClass(BlurView, [{
    key: 'render',
    value: function render() {
      var tint = this.props.tint;


      var backgroundColor = void 0;
      if (tint === 'dark') {
        backgroundColor = 'rgba(0,0,0,0.5)';
      } else if (tint === 'light') {
        backgroundColor = 'rgba(255,255,255,0.7)';
      } else {
        backgroundColor = 'rgba(255,255,255,0.4)';
      }

      return _react2.default.createElement(_reactNative.View, babelHelpers.extends({}, this.props, { style: [this.props.style, { backgroundColor: backgroundColor }], __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }));
    }
  }]);
  return BlurView;
}(_react.Component), _class.propTypes = babelHelpers.extends({
  tintEffect: (0, _deprecatedPropType2.default)(_react.PropTypes.string, 'Use the `tint` prop instead.'),
  tint: _react.PropTypes.oneOf(['light', 'default', 'dark'])
}, _reactNative.ViewPropTypes), _temp);
exports.default = BlurView;