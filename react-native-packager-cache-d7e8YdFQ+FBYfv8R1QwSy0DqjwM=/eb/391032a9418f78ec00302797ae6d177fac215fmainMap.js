Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/src/props/naviago_map_planning/components/mainMap.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeMaps = require('react-native-maps');

var _reactNativeMaps2 = babelHelpers.interopRequireDefault(_reactNativeMaps);

var _reactNativePopupDialog = require('react-native-popup-dialog');

var _reactNativePopupDialog2 = babelHelpers.interopRequireDefault(_reactNativePopupDialog);

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

var Counter = function (_Component) {
  babelHelpers.inherits(Counter, _Component);

  function Counter(props) {
    babelHelpers.classCallCheck(this, Counter);

    var _this = babelHelpers.possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      tagSelected: false,
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

  babelHelpers.createClass(Counter, [{
    key: '_updateMaps',
    value: function _updateMaps() {
      if (this.props.locations.markers[0] != undefined) {
        this.setState(this.props.locations);
      }
      console.log(this.props.locations);
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
          locations = _props.locations,
          location_add = _props.location_add;

      return _react2.default.createElement(
        _reactNative.View,
        { style: { flex: 1, alignItems: 'center', justifyContent: 'center' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 57
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
              latitude: 3.149771,
              longitude: 101.655449,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            },

            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          this.state.markers.map(function (marker) {
            return _react2.default.createElement(_reactNativeMaps2.default.Marker, {
              image: require("./Flag-1.png"),
              coordinate: marker.coordinates,
              title: marker.title,
              anchor: marker.anchor,
              onCalloutPress: map_pull,
              onPress: function onPress() {

                _this2.setState({ "tagSelected": marker }, function () {
                  _this2.popupDialog.show();
                  console.log(_this2.state);
                });
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            });
          })
        ),
        _react2.default.createElement(
          _reactNative.Text,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            }
          },
          counter
        ),
        _react2.default.createElement(
          _reactNativePopupDialog2.default,
          {
            dialogTitle: _react2.default.createElement(_reactNativePopupDialog.DialogTitle, { title: this.state.tagSelected.title, __source: {
                fileName: _jsxFileName,
                lineNumber: 101
              }
            }),
            ref: function ref(popupDialog) {
              _this2.popupDialog = popupDialog;
            },
            dialogAnimation: new _reactNativePopupDialog.SlideAnimation({ slideFrom: 'bottom' }),
            dialogStyle: { height: "70%", width: "95%" },
            overlayBackgroundColor: "rgba(108, 52, 199, 0)",
            dismissOnTouchOutside: "True",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            }
          },
          _react2.default.createElement(
            _reactNative.View,
            { style: { flex: 1 }, __source: {
                fileName: _jsxFileName,
                lineNumber: 109
              }
            },
            _react2.default.createElement(
              _reactNative.ScrollView,
              { style: { flex: 1 }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 110
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                { style: {
                    flex: 0,
                    width: "100%",
                    height: 200
                  }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                  }
                },
                _react2.default.createElement(_reactNative.Image, { style: stylesGlobal.locationImage, source: require('./tempLocPic-1.jpg'), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                  }
                })
              ),
              _react2.default.createElement(
                _reactNative.View,
                { style: [stylesGlobal.starContainer, stylesGlobal.inlineContainer], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                  }
                },
                _react2.default.createElement(_reactNative.Image, { style: [stylesGlobal.star, stylesGlobal.inlineContent], source: require('./star-1.png'), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                  }
                }),
                _react2.default.createElement(_reactNative.Image, { style: [stylesGlobal.star, stylesGlobal.inlineContent], source: require('./star-1.png'), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                  }
                }),
                _react2.default.createElement(_reactNative.Image, { style: [stylesGlobal.star, stylesGlobal.inlineContent], source: require('./star-1.png'), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                  }
                }),
                _react2.default.createElement(_reactNative.Image, { style: [stylesGlobal.star, stylesGlobal.inlineContent], source: require('./star-1.png'), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                  }
                }),
                _react2.default.createElement(_reactNative.Image, { style: [stylesGlobal.star, stylesGlobal.inlineContent], source: require('./star-1.png'), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                  }
                }),
                _react2.default.createElement(
                  _reactNative.Text,
                  { style: stylesGlobal.inlineContent, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 124
                    }
                  },
                  '(5/5)'
                )
              ),
              _react2.default.createElement(
                _reactNative.Text,
                { style: { margin: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                  }
                },
                this.state.tagSelected.key
              )
            ),
            _react2.default.createElement(_reactNative.Button, { style: { width: "20%" }, title: "Add This", onPress: this._updateMaps.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              }
            })
          )
        )
      );
    }
  }]);
  return Counter;
}(_react.Component);

exports.default = Counter;