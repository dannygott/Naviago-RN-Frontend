Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/Naviago-RN-Frontend/src/props/naviago_map_planning/naviago_map_planning.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNative2 = babelHelpers.interopRequireDefault(_reactNative);

var _reactNativeMaps = require('react-native-maps');

var _reactNativeMaps2 = babelHelpers.interopRequireDefault(_reactNativeMaps);

var Naviago_Map = function (_React$Component) {
  babelHelpers.inherits(Naviago_Map, _React$Component);

  function Naviago_Map() {
    babelHelpers.classCallCheck(this, Naviago_Map);
    return babelHelpers.possibleConstructorReturn(this, (Naviago_Map.__proto__ || Object.getPrototypeOf(Naviago_Map)).apply(this, arguments));
  }

  babelHelpers.createClass(Naviago_Map, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return {
        region: {
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      };
    }
  }, {
    key: 'onRegionChange',
    value: function onRegionChange(region) {
      this.setState({ region: region });
    }
  }, {
    key: 'render',
    value: function render() {

      this.state = {
        markers: [{
          title: 'hello',
          coordinates: {
            latitude: 3.148561,
            longitude: 101.652778
          }
        }, {
          title: 'hello',
          coordinates: {
            latitude: 3.149771,
            longitude: 101.655449
          }
        }]
      };

      return _react2.default.createElement(
        _reactNativeMaps2.default,
        {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0

          },

          initialRegion: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          },

          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          }
        },
        this.state.markers.map(function (marker) {
          return _react2.default.createElement(_reactNativeMaps2.default.Marker, {
            image: require("./Flag-1.png"),
            coordinate: marker.coordinates,
            title: marker.title,
            anchor: {
              x: 0,
              y: 1
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          });
        })
      );
    }
  }]);
  return Naviago_Map;
}(_react2.default.Component);

exports.default = Naviago_Map;