var _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/react-native-maps/lib/components/MapCallout.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _decorateMapComponent = require('./decorateMapComponent');

var _decorateMapComponent2 = babelHelpers.interopRequireDefault(_decorateMapComponent);

var propTypes = babelHelpers.extends({}, _reactNative.ViewPropTypes, {
  tooltip: _propTypes2.default.bool,
  onPress: _propTypes2.default.func
});

var defaultProps = {
  tooltip: false
};

var MapCallout = function (_React$Component) {
  babelHelpers.inherits(MapCallout, _React$Component);

  function MapCallout() {
    babelHelpers.classCallCheck(this, MapCallout);
    return babelHelpers.possibleConstructorReturn(this, (MapCallout.__proto__ || Object.getPrototypeOf(MapCallout)).apply(this, arguments));
  }

  babelHelpers.createClass(MapCallout, [{
    key: 'render',
    value: function render() {
      var AIRMapCallout = this.getAirComponent();
      return _react2.default.createElement(AIRMapCallout, babelHelpers.extends({}, this.props, { style: [styles.callout, this.props.style], __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }));
    }
  }]);
  return MapCallout;
}(_react2.default.Component);

MapCallout.propTypes = propTypes;
MapCallout.defaultProps = defaultProps;

var styles = _reactNative.StyleSheet.create({
  callout: {
    position: 'absolute'
  }
});

module.exports = (0, _decorateMapComponent2.default)(MapCallout, {
  componentType: 'Callout',
  providers: {
    google: {
      ios: _decorateMapComponent.SUPPORTED,
      android: _decorateMapComponent.USES_DEFAULT_IMPLEMENTATION
    }
  }
});