Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/@expo/vector-icons/vendor/react-native-vector-icons/lib/create-icon-set.js';
exports.default = createIconSet;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('./react-native');

var _iconButton = require('./icon-button');

var _iconButton2 = babelHelpers.interopRequireDefault(_iconButton);

var _tabBarItemIos = require('./tab-bar-item-ios');

var _tabBarItemIos2 = babelHelpers.interopRequireDefault(_tabBarItemIos);

var _toolbarAndroid = require('./toolbar-android');

var _toolbarAndroid2 = babelHelpers.interopRequireDefault(_toolbarAndroid);

var NativeIconAPI = _reactNative.NativeModules.RNVectorIconsManager || _reactNative.NativeModules.RNVectorIconsModule;

var DEFAULT_ICON_SIZE = 12;
var DEFAULT_ICON_COLOR = 'black';

function createIconSet(glyphMap, fontFamily, fontFile) {
  var _class, _temp2;

  var fontReference = fontFamily;

  if (_reactNative.Platform.OS === 'android' && fontFile) {
    fontReference = fontFile.replace(/\.(otf|ttf)$/, '');
  }

  if (_reactNative.Platform.OS === 'windows' && fontFile) {
    fontReference = 'Assets/' + fontFile + '#' + fontFamily;
  }

  var IconNamePropType = _propTypes2.default.oneOf(Object.keys(glyphMap));

  var Icon = (_temp2 = _class = function (_Component) {
    babelHelpers.inherits(Icon, _Component);

    function Icon() {
      var _ref;

      var _temp, _this, _ret;

      babelHelpers.classCallCheck(this, Icon);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Icon.__proto__ || Object.getPrototypeOf(Icon)).call.apply(_ref, [this].concat(args))), _this), _this.root = null, _this.handleRef = function (ref) {
        _this.root = ref;
      }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(Icon, [{
      key: 'setNativeProps',
      value: function setNativeProps(nativeProps) {
        if (this.root) {
          this.root.setNativeProps(nativeProps);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            name = _props.name,
            size = _props.size,
            color = _props.color,
            style = _props.style,
            props = babelHelpers.objectWithoutProperties(_props, ['name', 'size', 'color', 'style']);


        var glyph = glyphMap[name] || '?';
        if (typeof glyph === 'number') {
          glyph = String.fromCharCode(glyph);
        }

        var styleDefaults = {
          fontSize: size,
          color: color
        };

        var styleOverrides = {
          fontFamily: fontReference,
          fontWeight: 'normal',
          fontStyle: 'normal'
        };

        props.style = [styleDefaults, style, styleOverrides];
        props.ref = this.handleRef;

        return _react2.default.createElement(
          _reactNative.Text,
          babelHelpers.extends({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          }),
          glyph,
          this.props.children
        );
      }
    }]);
    return Icon;
  }(_react.Component), _class.propTypes = {
    name: IconNamePropType.isRequired,
    size: _propTypes2.default.number,
    color: _propTypes2.default.string,
    children: _propTypes2.default.node,
    style: _propTypes2.default.any }, _class.defaultProps = {
    size: DEFAULT_ICON_SIZE,
    allowFontScaling: false
  }, _temp2);


  var imageSourceCache = {};

  function getImageSource(name) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ICON_SIZE;
    var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_ICON_COLOR;

    if (!NativeIconAPI) {
      if (_reactNative.Platform.OS === 'android') {
        throw new Error('RNVectorIconsModule not available, did you properly integrate the module?');
      }
      throw new Error('RNVectorIconsManager not available, did you add the library to your project and link with libRNVectorIcons.a?');
    }

    var glyph = glyphMap[name] || '?';
    if (typeof glyph === 'number') {
      glyph = String.fromCharCode(glyph);
    }

    var processedColor = (0, _reactNative.processColor)(color);
    var cacheKey = glyph + ':' + size + ':' + processedColor;
    var scale = _reactNative.PixelRatio.get();

    return new Promise(function (resolve, reject) {
      var cached = imageSourceCache[cacheKey];
      if (typeof cached !== 'undefined') {
        if (!cached || cached instanceof Error) {
          reject(cached);
        } else {
          resolve({ uri: cached, scale: scale });
        }
      } else {
        NativeIconAPI.getImageForFont(fontReference, glyph, size, processedColor, function (err, image) {
          var error = typeof err === 'string' ? new Error(err) : err;
          imageSourceCache[cacheKey] = image || error || false;
          if (!error && image) {
            resolve({ uri: image, scale: scale });
          } else {
            reject(error);
          }
        });
      }
    });
  }

  Icon.Button = (0, _iconButton2.default)(Icon);
  Icon.TabBarItem = (0, _tabBarItemIos2.default)(IconNamePropType, getImageSource);
  Icon.TabBarItemIOS = Icon.TabBarItem;
  Icon.ToolbarAndroid = (0, _toolbarAndroid2.default)(IconNamePropType, getImageSource);
  Icon.getImageSource = getImageSource;

  return Icon;
}