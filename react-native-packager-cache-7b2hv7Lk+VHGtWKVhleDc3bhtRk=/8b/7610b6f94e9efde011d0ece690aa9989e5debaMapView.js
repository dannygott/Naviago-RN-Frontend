var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-maps/lib/components/MapView.js';

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _MapMarker = require('./MapMarker');

var _MapMarker2 = babelHelpers.interopRequireDefault(_MapMarker);

var _MapPolyline = require('./MapPolyline');

var _MapPolyline2 = babelHelpers.interopRequireDefault(_MapPolyline);

var _MapPolygon = require('./MapPolygon');

var _MapPolygon2 = babelHelpers.interopRequireDefault(_MapPolygon);

var _MapCircle = require('./MapCircle');

var _MapCircle2 = babelHelpers.interopRequireDefault(_MapCircle);

var _MapCallout = require('./MapCallout');

var _MapCallout2 = babelHelpers.interopRequireDefault(_MapCallout);

var _MapUrlTile = require('./MapUrlTile');

var _MapUrlTile2 = babelHelpers.interopRequireDefault(_MapUrlTile);

var _AnimatedRegion = require('./AnimatedRegion');

var _AnimatedRegion2 = babelHelpers.interopRequireDefault(_AnimatedRegion);

var _decorateMapComponent = require('./decorateMapComponent');

var _ProviderConstants = require('./ProviderConstants');

var ProviderConstants = babelHelpers.interopRequireWildcard(_ProviderConstants);


var MAP_TYPES = {
  STANDARD: 'standard',
  SATELLITE: 'satellite',
  HYBRID: 'hybrid',
  TERRAIN: 'terrain',
  NONE: 'none'
};

var GOOGLE_MAPS_ONLY_TYPES = [MAP_TYPES.TERRAIN, MAP_TYPES.NONE];

var viewConfig = {
  uiViewClassName: 'AIR<provider>Map',
  validAttributes: {
    region: true
  }
};

var propTypes = babelHelpers.extends({}, _reactNative.ViewPropTypes, {
  provider: _propTypes2.default.oneOf(['google']),

  style: _reactNative.ViewPropTypes.style,

  customMapStyle: _propTypes2.default.array,

  customMapStyleString: _propTypes2.default.string,

  showsUserLocation: _propTypes2.default.bool,

  userLocationAnnotationTitle: _propTypes2.default.string,

  showsMyLocationButton: _propTypes2.default.bool,

  followsUserLocation: _propTypes2.default.bool,

  showsPointsOfInterest: _propTypes2.default.bool,

  showsCompass: _propTypes2.default.bool,

  zoomEnabled: _propTypes2.default.bool,

  rotateEnabled: _propTypes2.default.bool,

  cacheEnabled: _propTypes2.default.bool,

  loadingEnabled: _propTypes2.default.bool,

  loadingBackgroundColor: _reactNative.ColorPropType,

  loadingIndicatorColor: _reactNative.ColorPropType,

  scrollEnabled: _propTypes2.default.bool,

  pitchEnabled: _propTypes2.default.bool,

  toolbarEnabled: _propTypes2.default.bool,

  moveOnMarkerPress: _propTypes2.default.bool,

  showsScale: _propTypes2.default.bool,

  showsBuildings: _propTypes2.default.bool,

  showsTraffic: _propTypes2.default.bool,

  showsIndoors: _propTypes2.default.bool,

  showsIndoorLevelPicker: _propTypes2.default.bool,

  mapType: _propTypes2.default.oneOf(Object.values(MAP_TYPES)),

  region: _propTypes2.default.shape({
    latitude: _propTypes2.default.number.isRequired,
    longitude: _propTypes2.default.number.isRequired,

    latitudeDelta: _propTypes2.default.number.isRequired,
    longitudeDelta: _propTypes2.default.number.isRequired
  }),

  initialRegion: _propTypes2.default.shape({
    latitude: _propTypes2.default.number.isRequired,
    longitude: _propTypes2.default.number.isRequired,

    latitudeDelta: _propTypes2.default.number.isRequired,
    longitudeDelta: _propTypes2.default.number.isRequired
  }),

  liteMode: _propTypes2.default.bool,

  maxDelta: _propTypes2.default.number,

  minDelta: _propTypes2.default.number,

  legalLabelInsets: _reactNative.EdgeInsetsPropType,

  onRegionChange: _propTypes2.default.func,

  onRegionChangeComplete: _propTypes2.default.func,

  onPress: _propTypes2.default.func,

  onLongPress: _propTypes2.default.func,

  onPanDrag: _propTypes2.default.func,

  onMarkerPress: _propTypes2.default.func,

  onMarkerSelect: _propTypes2.default.func,

  onMarkerDeselect: _propTypes2.default.func,

  onCalloutPress: _propTypes2.default.func,

  onMarkerDragStart: _propTypes2.default.func,

  onMarkerDrag: _propTypes2.default.func,

  onMarkerDragEnd: _propTypes2.default.func

});

var MapView = function (_React$Component) {
  babelHelpers.inherits(MapView, _React$Component);

  function MapView(props) {
    babelHelpers.classCallCheck(this, MapView);

    var _this = babelHelpers.possibleConstructorReturn(this, (MapView.__proto__ || Object.getPrototypeOf(MapView)).call(this, props));

    _this.state = {
      isReady: _reactNative.Platform.OS === 'ios'
    };

    _this._onMapReady = _this._onMapReady.bind(_this);
    _this._onChange = _this._onChange.bind(_this);
    _this._onLayout = _this._onLayout.bind(_this);
    return _this;
  }

  babelHelpers.createClass(MapView, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { provider: this.props.provider };
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      var a = this.__lastRegion;
      var b = nextProps.region;
      if (!a || !b) return;
      if (a.latitude !== b.latitude || a.longitude !== b.longitude || a.latitudeDelta !== b.latitudeDelta || a.longitudeDelta !== b.longitudeDelta) {
        this.map.setNativeProps({ region: b });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var isReady = this.state.isReady;

      if (isReady) {
        this._updateStyle();
      }
    }
  }, {
    key: '_updateStyle',
    value: function _updateStyle() {
      var customMapStyle = this.props.customMapStyle;

      this.map.setNativeProps({ customMapStyleString: JSON.stringify(customMapStyle) });
    }
  }, {
    key: '_onMapReady',
    value: function _onMapReady() {
      var _props = this.props,
          region = _props.region,
          initialRegion = _props.initialRegion;

      if (region) {
        this.map.setNativeProps({ region: region });
      } else if (initialRegion) {
        this.map.setNativeProps({ region: initialRegion });
      }
      this._updateStyle();
      this.setState({ isReady: true });
    }
  }, {
    key: '_onLayout',
    value: function _onLayout(e) {
      var layout = e.nativeEvent.layout;

      if (!layout.width || !layout.height) return;
      if (this.state.isReady && !this.__layoutCalled) {
        var region = this.props.region || this.props.initialRegion;
        if (region) {
          this.__layoutCalled = true;
          this.map.setNativeProps({ region: region });
        }
      }
      if (this.props.onLayout) {
        this.props.onLayout(e);
      }
    }
  }, {
    key: '_onChange',
    value: function _onChange(event) {
      this.__lastRegion = event.nativeEvent.region;
      if (event.nativeEvent.continuous) {
        if (this.props.onRegionChange) {
          this.props.onRegionChange(event.nativeEvent.region);
        }
      } else if (this.props.onRegionChangeComplete) {
        this.props.onRegionChangeComplete(event.nativeEvent.region);
      }
    }
  }, {
    key: 'animateToRegion',
    value: function animateToRegion(region, duration) {
      this._runCommand('animateToRegion', [region, duration || 500]);
    }
  }, {
    key: 'animateToCoordinate',
    value: function animateToCoordinate(latLng, duration) {
      this._runCommand('animateToCoordinate', [latLng, duration || 500]);
    }
  }, {
    key: 'fitToElements',
    value: function fitToElements(animated) {
      this._runCommand('fitToElements', [animated]);
    }
  }, {
    key: 'fitToSuppliedMarkers',
    value: function fitToSuppliedMarkers(markers, animated) {
      this._runCommand('fitToSuppliedMarkers', [markers, animated]);
    }
  }, {
    key: 'fitToCoordinates',
    value: function fitToCoordinates() {
      var coordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var options = arguments[1];
      var _options$edgePadding = options.edgePadding,
          edgePadding = _options$edgePadding === undefined ? { top: 0, right: 0, bottom: 0, left: 0 } : _options$edgePadding,
          _options$animated = options.animated,
          animated = _options$animated === undefined ? true : _options$animated;


      this._runCommand('fitToCoordinates', [coordinates, edgePadding, animated]);
    }
  }, {
    key: 'takeSnapshot',
    value: function takeSnapshot(args) {
      var _this2 = this;

      if (_reactNative.Platform.OS === 'ios' && arguments.length === 4) {
        console.warn('Old takeSnapshot API has been deprecated; will be removed in the near future');
        var width = arguments[0];
        var height = arguments[1];
        var region = arguments[2];
        var callback = arguments[3];
        this._runCommand('takeSnapshot', [width || 0, height || 0, region || {}, 'png', 1, 'legacy', callback]);
        return undefined;
      }

      var config = {
        width: args.width || 0,
        height: args.height || 0,
        region: args.region || {},
        format: args.format || 'png',
        quality: args.quality || 1.0,
        result: args.result || 'file'
      };
      if (config.format !== 'png' && config.format !== 'jpg') throw new Error('Invalid format specified');
      if (config.result !== 'file' && config.result !== 'base64') throw new Error('Invalid result specified');

      if (_reactNative.Platform.OS === 'android') {
        return _reactNative.NativeModules.AirMapModule.takeSnapshot(this._getHandle(), config);
      } else if (_reactNative.Platform.OS === 'ios') {
        return new Promise(function (resolve, reject) {
          _this2._runCommand('takeSnapshot', [config.width, config.height, config.region, config.format, config.quality, config.result, function (err, snapshot) {
            if (err) {
              reject(err);
            } else {
              resolve(snapshot);
            }
          }]);
        });
      }
      return Promise.reject('takeSnapshot not supported on this platform');
    }
  }, {
    key: '_uiManagerCommand',
    value: function _uiManagerCommand(name) {
      return _reactNative.NativeModules.UIManager[(0, _decorateMapComponent.getAirMapName)(this.props.provider)].Commands[name];
    }
  }, {
    key: '_mapManagerCommand',
    value: function _mapManagerCommand(name) {
      return _reactNative.NativeModules[(0, _decorateMapComponent.getAirMapName)(this.props.provider) + 'Manager'][name];
    }
  }, {
    key: '_getHandle',
    value: function _getHandle() {
      return (0, _reactNative.findNodeHandle)(this.map);
    }
  }, {
    key: '_runCommand',
    value: function _runCommand(name, args) {
      switch (_reactNative.Platform.OS) {
        case 'android':
          _reactNative.NativeModules.UIManager.dispatchViewManagerCommand(this._getHandle(), this._uiManagerCommand(name), args);
          break;

        case 'ios':
          this._mapManagerCommand(name).apply(undefined, [this._getHandle()].concat(babelHelpers.toConsumableArray(args)));
          break;

        default:
          break;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var props = void 0;

      if (this.state.isReady) {
        props = babelHelpers.extends({}, this.props, {
          region: null,
          initialRegion: null,
          onChange: this._onChange,
          onMapReady: this._onMapReady,
          onLayout: this._onLayout
        });
        if (_reactNative.Platform.OS === 'ios' && props.provider === ProviderConstants.PROVIDER_DEFAULT && GOOGLE_MAPS_ONLY_TYPES.includes(props.mapType)) {
          props.mapType = MAP_TYPES.standard;
        }
        props.handlePanDrag = !!props.onPanDrag;
      } else {
        props = {
          style: this.props.style,
          region: null,
          initialRegion: null,
          onChange: this._onChange,
          onMapReady: this._onMapReady,
          onLayout: this._onLayout
        };
      }

      if (_reactNative.Platform.OS === 'android' && this.props.liteMode) {
        return _react2.default.createElement(AIRMapLite, babelHelpers.extends({
          ref: function ref(_ref) {
            _this3.map = _ref;
          }
        }, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 631
          }
        }));
      }

      var AIRMap = getAirMapComponent(this.props.provider);

      return _react2.default.createElement(AIRMap, babelHelpers.extends({
        ref: function ref(_ref2) {
          _this3.map = _ref2;
        }
      }, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 641
        }
      }));
    }
  }]);
  return MapView;
}(_react2.default.Component);

MapView.propTypes = propTypes;
MapView.viewConfig = viewConfig;
MapView.childContextTypes = _decorateMapComponent.contextTypes;

MapView.MAP_TYPES = MAP_TYPES;

var nativeComponent = function nativeComponent(Component) {
  return (0, _reactNative.requireNativeComponent)(Component, MapView, {
    nativeOnly: {
      onChange: true,
      onMapReady: true,
      handlePanDrag: true
    }
  });
};
var airMaps = {
  default: nativeComponent('AIRMap')
};
if (_reactNative.Platform.OS === 'android') {
  airMaps.google = airMaps.default;
} else {
  airMaps.google = _decorateMapComponent.googleMapIsInstalled ? nativeComponent('AIRGoogleMap') : (0, _decorateMapComponent.createNotSupportedComponent)('react-native-maps: AirGoogleMaps dir must be added to your xCode project to support GoogleMaps on iOS.');
}
var getAirMapComponent = function getAirMapComponent(provider) {
  return airMaps[provider || 'default'];
};

var AIRMapLite = _reactNative.NativeModules.UIManager.AIRMapLite && (0, _reactNative.requireNativeComponent)('AIRMapLite', MapView, {
  nativeOnly: {
    onChange: true,
    onMapReady: true,
    handlePanDrag: true
  }
});

MapView.Marker = _MapMarker2.default;
MapView.Polyline = _MapPolyline2.default;
MapView.Polygon = _MapPolygon2.default;
MapView.Circle = _MapCircle2.default;
MapView.UrlTile = _MapUrlTile2.default;
MapView.Callout = _MapCallout2.default;
babelHelpers.extends(MapView, ProviderConstants);
MapView.ProviderPropType = _propTypes2.default.oneOf(Object.values(ProviderConstants));

MapView.Animated = _reactNative.Animated.createAnimatedComponent(MapView);
MapView.AnimatedRegion = _AnimatedRegion2.default;

module.exports = MapView;