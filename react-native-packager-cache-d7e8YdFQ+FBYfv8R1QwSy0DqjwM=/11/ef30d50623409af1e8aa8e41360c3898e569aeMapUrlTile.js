var _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/react-native-maps/lib/components/MapUrlTile.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _decorateMapComponent = require('./decorateMapComponent');

var _decorateMapComponent2 = babelHelpers.interopRequireDefault(_decorateMapComponent);

var propTypes = babelHelpers.extends({}, _reactNative.ViewPropTypes, {
  urlTemplate: _propTypes2.default.string.isRequired,

  zIndex: _propTypes2.default.number
});

var MapUrlTile = function (_React$Component) {
  babelHelpers.inherits(MapUrlTile, _React$Component);

  function MapUrlTile() {
    babelHelpers.classCallCheck(this, MapUrlTile);
    return babelHelpers.possibleConstructorReturn(this, (MapUrlTile.__proto__ || Object.getPrototypeOf(MapUrlTile)).apply(this, arguments));
  }

  babelHelpers.createClass(MapUrlTile, [{
    key: 'render',
    value: function render() {
      var AIRMapUrlTile = this.getAirComponent();
      return _react2.default.createElement(AIRMapUrlTile, babelHelpers.extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }));
    }
  }]);
  return MapUrlTile;
}(_react2.default.Component);

MapUrlTile.propTypes = propTypes;

module.exports = (0, _decorateMapComponent2.default)(MapUrlTile, {
  componentType: 'UrlTile',
  providers: {
    google: {
      ios: _decorateMapComponent.SUPPORTED,
      android: _decorateMapComponent.USES_DEFAULT_IMPLEMENTATION
    }
  }
});