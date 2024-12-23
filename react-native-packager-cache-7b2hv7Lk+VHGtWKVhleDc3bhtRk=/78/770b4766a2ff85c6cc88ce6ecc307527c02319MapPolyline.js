var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-maps/lib/components/MapPolyline.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _decorateMapComponent = require('./decorateMapComponent');

var _decorateMapComponent2 = babelHelpers.interopRequireDefault(_decorateMapComponent);

var propTypes = babelHelpers.extends({}, _reactNative.ViewPropTypes, {
  coordinates: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    latitude: _propTypes2.default.number.isRequired,
    longitude: _propTypes2.default.number.isRequired
  })),

  onPress: _propTypes2.default.func,

  tappable: _propTypes2.default.bool,

  fillColor: _propTypes2.default.string,

  strokeWidth: _propTypes2.default.number,

  strokeColor: _propTypes2.default.string,

  zIndex: _propTypes2.default.number,

  lineCap: _propTypes2.default.oneOf(['butt', 'round', 'square']),

  lineJoin: _propTypes2.default.oneOf(['miter', 'round', 'bevel']),

  miterLimit: _propTypes2.default.number,

  geodesic: _propTypes2.default.bool,

  lineDashPhase: _propTypes2.default.number,

  lineDashPattern: _propTypes2.default.arrayOf(_propTypes2.default.number)
});

var defaultProps = {
  strokeColor: '#000',
  strokeWidth: 1
};

var MapPolyline = function (_React$Component) {
  babelHelpers.inherits(MapPolyline, _React$Component);

  function MapPolyline() {
    babelHelpers.classCallCheck(this, MapPolyline);
    return babelHelpers.possibleConstructorReturn(this, (MapPolyline.__proto__ || Object.getPrototypeOf(MapPolyline)).apply(this, arguments));
  }

  babelHelpers.createClass(MapPolyline, [{
    key: 'setNativeProps',
    value: function setNativeProps(props) {
      this.polyline.setNativeProps(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var AIRMapPolyline = this.getAirComponent();
      return _react2.default.createElement(AIRMapPolyline, babelHelpers.extends({}, this.props, { ref: function ref(_ref) {
          _this2.polyline = _ref;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }));
    }
  }]);
  return MapPolyline;
}(_react2.default.Component);

MapPolyline.propTypes = propTypes;
MapPolyline.defaultProps = defaultProps;

module.exports = (0, _decorateMapComponent2.default)(MapPolyline, {
  componentType: 'Polyline',
  providers: {
    google: {
      ios: _decorateMapComponent.SUPPORTED,
      android: _decorateMapComponent.USES_DEFAULT_IMPLEMENTATION
    }
  }
});