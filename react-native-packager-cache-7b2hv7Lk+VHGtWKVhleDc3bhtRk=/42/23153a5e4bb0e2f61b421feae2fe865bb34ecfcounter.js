Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/src/props/naviago_map_planning/components/counter.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeMaps = require('react-native-maps');

var _reactNativeMaps2 = babelHelpers.interopRequireDefault(_reactNativeMaps);

var styles = _reactNative.StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});

var Counter = function (_Component) {
  babelHelpers.inherits(Counter, _Component);

  function Counter(props) {
    babelHelpers.classCallCheck(this, Counter);

    var _this = babelHelpers.possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      markers: [{
        title: "hello",
        coordinates: {
          latitude: 3.148561,
          longitude: 101.652778 },
        key: 22222222222222
      }, {
        title: 'hello',
        coordinates: {
          latitude: 3.149771,
          longitude: 101.655449 },
        image: "./Flag-1.png",
        anchor: { x: 0, y: 1 },
        key: 11111111
      }]
    };

    return _this;
  }

  babelHelpers.createClass(Counter, [{
    key: '_updateMaps',
    value: function _updateMaps() {
      console.log("yaaaa");
      this.setState({
        markers: [{
          title: "CUNT",
          coordinates: {
            latitude: 3.148561,
            longitude: 101.652778 },
          key: 22222222222222
        }, {
          title: 'hello',
          coordinates: {
            latitude: 3.149771,
            longitude: 101.655449 },
          image: "./Flag-1.png",
          anchor: { x: 0, y: 1 },
          key: 11111111
        }]
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          counter = _props.counter,
          increment = _props.increment,
          decrement = _props.decrement;


      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1, alignItems: 'center', justifyContent: 'center' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        },
        _react2.default.createElement(
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
            onRegionChangeComplete: this._updateMaps.bind(this),

            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          },
          this.state.markers.map(function (marker) {
            return _react2.default.createElement(_reactNativeMaps2.default.Marker, {
              image: require("./Flag-1.png"),
              coordinate: marker.coordinates,
              title: marker.title,
              anchor: marker.anchor,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 102
              }
            });
          })
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 111
            }
          },
          counter
        ),
        _react2.default.createElement(
          _reactNative.TouchableOpacity,
          { onPress: increment, style: styles.button, __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            }
          },
          _react2.default.createElement(
            _reactNative.Text,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              }
            },
            'up'
          )
        ),
        _react2.default.createElement(
          _reactNative.TouchableOpacity,
          { onPress: decrement, style: styles.button, __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            }
          },
          _react2.default.createElement(
            _reactNative.Text,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 116
              }
            },
            'down'
          )
        )
      );
    }
  }]);
  return Counter;
}(_react.Component);

exports.default = Counter;