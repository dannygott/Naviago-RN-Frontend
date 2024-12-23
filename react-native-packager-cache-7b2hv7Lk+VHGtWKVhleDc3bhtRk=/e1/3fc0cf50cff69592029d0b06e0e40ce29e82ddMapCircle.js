var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-maps/lib/components/MapCircle.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _decorateMapComponent = require('./decorateMapComponent');

var _decorateMapComponent2 = babelHelpers.interopRequireDefault(_decorateMapComponent);

var propTypes = babelHelpers.extends({}, _reactNative.ViewPropTypes, {
  center: _propTypes2.default.shape({
    latitude: _propTypes2.default.number.isRequired,
    longitude: _propTypes2.default.number.isRequired
  }).isRequired,

  radius: _propTypes2.default.number.isRequired,

  onPress: _propTypes2.default.func,

  strokeWidth: _propTypes2.default.number,

  strokeColor: _propTypes2.default.string,

  fillColor: _propTypes2.default.string,

  zIndex: _propTypes2.default.number,

  lineCap: _propTypes2.default.oneOf(['butt', 'round', 'square']),

  lineJoin: _propTypes2.default.oneOf(['miter', 'round', 'bevel']),

  miterLimit: _propTypes2.default.number,

  lineDashPhase: _propTypes2.default.number,

  lineDashPattern: _propTypes2.default.arrayOf(_propTypes2.default.number)
});

var defaultProps = {
  strokeColor: '#000',
  strokeWidth: 1
};

var MapCircle = function (_React$Component) {
  babelHelpers.inherits(MapCircle, _React$Component);

  function MapCircle() {
    babelHelpers.classCallCheck(this, MapCircle);
    return babelHelpers.possibleConstructorReturn(this, (MapCircle.__proto__ || Object.getPrototypeOf(MapCircle)).apply(this, arguments));
  }

  babelHelpers.createClass(MapCircle, [{
    key: 'setNativeProps',
    value: function setNativeProps(props) {
      this.circle.setNativeProps(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var AIRMapCircle = this.getAirComponent();
      return _react2.default.createElement(AIRMapCircle, babelHelpers.extends({}, this.props, { ref: function ref(_ref) {
          _this2.circle = _ref;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }));
    }
  }]);
  return MapCircle;
}(_react2.default.Component);

MapCircle.propTypes = propTypes;
MapCircle.defaultProps = defaultProps;

module.exports = (0, _decorateMapComponent2.default)(MapCircle, {
  componentType: 'Circle',
  providers: {
    google: {
      ios: _decorateMapComponent.SUPPORTED,
      android: _decorateMapComponent.USES_DEFAULT_IMPLEMENTATION
    }
  }
});