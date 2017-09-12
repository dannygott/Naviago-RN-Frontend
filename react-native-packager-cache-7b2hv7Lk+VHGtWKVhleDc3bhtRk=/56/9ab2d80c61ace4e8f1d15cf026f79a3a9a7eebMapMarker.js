var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-maps/lib/components/MapMarker.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactNative = require('react-native');

var _resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');

var _resolveAssetSource2 = _interopRequireDefault(_resolveAssetSource);

var _decorateMapComponent = require('./decorateMapComponent');

var _decorateMapComponent2 = _interopRequireDefault(_decorateMapComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  MapMarker: {
    displayName: 'MapMarker'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-maps/lib/components/MapMarker.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var viewConfig = {
  uiViewClassName: 'AIR<provider>MapMarker',
  validAttributes: {
    coordinate: true
  }
};

var propTypes = _extends({}, _reactNative.ViewPropTypes, {
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

var MapMarker = _wrapComponent('MapMarker')(function (_React$Component) {
  _inherits(MapMarker, _React$Component);

  function MapMarker(props) {
    _classCallCheck(this, MapMarker);

    var _this = _possibleConstructorReturn(this, (MapMarker.__proto__ || Object.getPrototypeOf(MapMarker)).call(this, props));

    _this.showCallout = _this.showCallout.bind(_this);
    _this.hideCallout = _this.hideCallout.bind(_this);
    return _this;
  }

  _createClass(MapMarker, [{
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
          this.getMapManagerCommand(name).apply(undefined, [this._getHandle()].concat(_toConsumableArray(args)));
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

      return _react3.default.createElement(AIRMapMarker, _extends({
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
}(_react3.default.Component));

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