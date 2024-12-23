var _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/react-native-maps/lib/components/MapPolygon.js';

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

  holes: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.shape({
    latitude: _propTypes2.default.number.isRequired,
    longitude: _propTypes2.default.number.isRequired
  }))),

  onPress: _propTypes2.default.func,

  tappable: _propTypes2.default.bool,

  strokeWidth: _propTypes2.default.number,

  strokeColor: _propTypes2.default.string,

  fillColor: _propTypes2.default.string,

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

var MapPolygon = function (_React$Component) {
  babelHelpers.inherits(MapPolygon, _React$Component);

  function MapPolygon() {
    babelHelpers.classCallCheck(this, MapPolygon);
    return babelHelpers.possibleConstructorReturn(this, (MapPolygon.__proto__ || Object.getPrototypeOf(MapPolygon)).apply(this, arguments));
  }

  babelHelpers.createClass(MapPolygon, [{
    key: 'setNativeProps',
    value: function setNativeProps(props) {
      this.polygon.setNativeProps(props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var AIRMapPolygon = this.getAirComponent();
      return _react2.default.createElement(AIRMapPolygon, babelHelpers.extends({}, this.props, { ref: function ref(_ref) {
          _this2.polygon = _ref;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }));
    }
  }]);
  return MapPolygon;
}(_react2.default.Component);

MapPolygon.propTypes = propTypes;
MapPolygon.defaultProps = defaultProps;

module.exports = (0, _decorateMapComponent2.default)(MapPolygon, {
  componentType: 'Polygon',
  providers: {
    google: {
      ios: _decorateMapComponent.SUPPORTED,
      android: _decorateMapComponent.USES_DEFAULT_IMPLEMENTATION
    }
  }
});