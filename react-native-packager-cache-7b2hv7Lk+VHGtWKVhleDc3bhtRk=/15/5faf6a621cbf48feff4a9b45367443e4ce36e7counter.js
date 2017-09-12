Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/src/props/naviago_map_planning/components/counter.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _reactNativeMaps = require('react-native-maps');

var _reactNativeMaps2 = _interopRequireDefault(_reactNativeMaps);

var _reactNativePopupDialog = require('react-native-popup-dialog');

var _reactNativePopupDialog2 = _interopRequireDefault(_reactNativePopupDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Counter: {
    displayName: 'Counter'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/mnt/c/Users/Daniel/Naviago-RN-Frontend/src/props/naviago_map_planning/components/counter.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var stylesGlobal = require("./stylesGlobal.js");

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

var Counter = _wrapComponent('Counter')(function (_Component) {
  _inherits(Counter, _Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      infoShown: false,
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

  _createClass(Counter, [{
    key: '_updateMaps',
    value: function _updateMaps() {
      if (this.props.locations.markers[0] != undefined) {
        this.setState(this.props.locations);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          counter = _props.counter,
          increment = _props.increment,
          decrement = _props.decrement,
          map_pull = _props.map_pull,
          locations = _props.locations;

      return _react3.default.createElement(
        _reactNative.View,
        { style: { flex: 1, alignItems: 'center', justifyContent: 'center' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        },
        _react3.default.createElement(
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
              lineNumber: 58
            }
          },
          this.state.markers.map(function (marker) {
            return _react3.default.createElement(_reactNativeMaps2.default.Marker, {
              image: require("./Flag-1.png"),
              coordinate: marker.coordinates,
              title: marker.title,
              anchor: marker.anchor,

              onPress: function onPress() {
                console.log("jaun");
                _this2._updateMaps.bind(_this2);
                _this2.popupDialog.show();
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            });
          })
        ),
        _react3.default.createElement(
          _reactNativePopupDialog2.default,
          {
            dialogTitle: _react3.default.createElement(_reactNativePopupDialog.DialogTitle, { title: 'Jaun Bitch Park', __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            }),
            ref: function ref(popupDialog) {
              _this2.popupDialog = popupDialog;
            },
            dialogAnimation: new _reactNativePopupDialog.SlideAnimation({ slideFrom: 'bottom' }),
            dialogStyle: { height: "70%", width: "90%" },
            overlayBackgroundColor: "rgba(108, 52, 199, 0)",
            dismissOnTouchOutside: "false",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            }
          },
          _react3.default.createElement(
            _reactNative.View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              }
            },
            _react3.default.createElement(
              _reactNative.ScrollView,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 102
                }
              },
              _react3.default.createElement(_reactNative.Image, { style: stylesGlobal.locationImage, source: require('./tempLocPic-1.jpg'), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 104
                }
              }),
              _react3.default.createElement(
                _reactNative.View,
                { style: [stylesGlobal.starContainer, stylesGlobal.inlineContainer], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                  }
                },
                _react3.default.createElement(_reactNative.Image, { style: [stylesGlobal.star, stylesGlobal.inlineContent], source: require('./star-1.png'), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                  }
                }),
                _react3.default.createElement(_reactNative.Image, { style: [stylesGlobal.star, stylesGlobal.inlineContent], source: require('./star-1.png'), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                  }
                }),
                _react3.default.createElement(_reactNative.Image, { style: [stylesGlobal.star, stylesGlobal.inlineContent], source: require('./star-1.png'), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                  }
                }),
                _react3.default.createElement(_reactNative.Image, { style: [stylesGlobal.star, stylesGlobal.inlineContent], source: require('./star-1.png'), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                  }
                }),
                _react3.default.createElement(_reactNative.Image, { style: [stylesGlobal.star, stylesGlobal.inlineContent], source: require('./star-1.png'), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                  }
                }),
                _react3.default.createElement(
                  _reactNative.Text,
                  { style: stylesGlobal.inlineContent, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 111
                    }
                  },
                  '(5/5)'
                )
              ),
              _react3.default.createElement(
                _reactNative.Text,
                { style: { margin: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                  }
                },
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              )
            )
          )
        )
      );
    }
  }]);

  return Counter;
}(_react2.Component));

exports.default = Counter;