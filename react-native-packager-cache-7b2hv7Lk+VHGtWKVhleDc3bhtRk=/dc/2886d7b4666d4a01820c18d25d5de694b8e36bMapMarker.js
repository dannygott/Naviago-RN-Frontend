var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-maps/lib/components/MapMarker.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');

var _resolveAssetSource2 = babelHelpers.interopRequireDefault(_resolveAssetSource);

var _decorateMapComponent = require('./decorateMapComponent');

var _decorateMapComponent2 = babelHelpers.interopRequireDefault(_decorateMapComponent);

var viewConfig = {
  uiViewClassName: 'AIR<provider>MapMarker',
  validAttributes: {
    coordinate: true
  }
};

var propTypes = babelHelpers.extends({}, _reactNative.ViewPropTypes, {
  identifier: _propTypes2.default.string,
  reuseIdentifier: _propTypes2.default.string,

  title: _propTypes2.default.string,

  description: _propTypes2.default.string,

  image: _propTypes2.default.any,

  opacity: _propTypes2.default.number,

  pinColor: _propTypes2.default.string,

  coordinate: _propTypes2.default.shape({
    latitude: _propTypes2.default.number.isRequired,
    longitude: _propTypes2.default.number.isRequired
  }).isRequired,

  centerOffset: _propTypes2.default.shape({
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired
  }),

  calloutOffset: _propTypes2.default.shape({
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired
  }),

  anchor: _propTypes2.default.shape({
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired
  }),

  calloutAnchor: _propTypes2.default.shape({
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired
  }),

  flat: _propTypes2.default.bool,

  draggable: _propTypes2.default.bool,

  onPress: _propTypes2.default.func,

  onSelect: _propTypes2.default.func,

  onDeselect: _propTypes2.default.func,

  onCalloutPress: _propTypes2.default.func,

  onDragStart: _propTypes2.default.func,

  onDrag: _propTypes2.default.func,

  onDragEnd: _propTypes2.default.func
});

var defaultProps = {
  onPress: function onPress() {}
};

var MapMarker = function (_React$Component) {
  babelHelpers.inherits(MapMarker, _React$Component);

  function MapMarker(props) {
    babelHelpers.classCallCheck(this, MapMarker);

    var _this = babelHelpers.possibleConstructorReturn(this, (MapMarker.__proto__ || Object.getPrototypeOf(MapMarker)).call(this, props));

    _this.showCallout = _this.showCallout.bind(_this);
    _this.hideCallout = _this.hideCallout.bind(_this);
    return _this;
  }

  babelHelpers.createClass(MapMarker, [{
    key: 'setNativeProps',
    value: function setNativeProps(props) {
      this.marker.setNativeProps(props);
    }
  }, {
    key: 'showCallout',
    value: function showCallout() {
      this._runCommand('showCallout', []);
    }
  }, {
    key: 'hideCallout',
    value: function hideCallout() {
      this._runCommand('hideCallout', []);
    }
  }, {
    key: '_getHandle',
    value: function _getHandle() {
      return (0, _reactNative.findNodeHandle)(this.marker);
    }
  }, {
    key: '_runCommand',
    value: function _runCommand(name, args) {
      switch (_reactNative.Platform.OS) {
        case 'android':
          _reactNative.NativeModules.UIManager.dispatchViewManagerCommand(this._getHandle(), this.getUIManagerCommand(name), args);
          break;

        case 'ios':
          this.getMapManagerCommand(name).apply(undefined, [this._getHandle()].concat(babelHelpers.toConsumableArray(args)));
          break;

        default:
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var image = void 0;
      if (this.props.image) {
        image = (0, _resolveAssetSource2.default)(this.props.image) || {};
        image = image.uri;
      }

      var AIRMapMarker = this.getAirComponent();

      return _react2.default.createElement(AIRMapMarker, babelHelpers.extends({
        ref: function ref(_ref) {
          _this2.marker = _ref;
        }
      }, this.props, {
        image: image,
        style: [styles.marker, this.props.style],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }));
    }
  }]);
  return MapMarker;
}(_react2.default.Component);

MapMarker.propTypes = propTypes;
MapMarker.defaultProps = defaultProps;
MapMarker.viewConfig = viewConfig;

var styles = _reactNative.StyleSheet.create({
  marker: {
    position: 'absolute',
    backgroundColor: 'transparent'
  }
});

MapMarker.Animated = _reactNative.Animated.createAnimatedComponent(MapMarker);

module.exports = (0, _decorateMapComponent2.default)(MapMarker, {
  componentType: 'Marker',
  providers: {
    google: {
      ios: _decorateMapComponent.SUPPORTED,
      android: _decorateMapComponent.USES_DEFAULT_IMPLEMENTATION
    }
  }
});