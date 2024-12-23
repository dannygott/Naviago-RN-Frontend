Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/@expo/vector-icons/createIconSet.js';

exports.default = function (glyphMap, fontName, expoAssetId) {
  var _class, _temp2;

  var expoFontName = _expo.Font.style(fontName, {
    ignoreWarning: true
  }).fontFamily;
  var font = babelHelpers.defineProperty({}, fontName, expoAssetId);
  var RNVIconComponent = (0, _createIconSet2.default)(glyphMap, expoFontName);

  var Icon = (_temp2 = _class = function (_React$Component) {
    babelHelpers.inherits(Icon, _React$Component);

    function Icon() {
      var _ref;

      var _temp, _this, _ret;

      babelHelpers.classCallCheck(this, Icon);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Icon.__proto__ || Object.getPrototypeOf(Icon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        fontIsLoaded: _expo.Font.isLoaded(fontName)
      }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(Icon, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        return regeneratorRuntime.async(function componentWillMount$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.state.fontIsLoaded) {
                  _context.next = 4;
                  break;
                }

                _context.next = 3;
                return regeneratorRuntime.awrap(_expo.Font.loadAsync(font));

              case 3:
                this.setState({ fontIsLoaded: true });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, null, this);
      }
    }, {
      key: 'setNativeProps',
      value: function setNativeProps(props) {
        if (this._icon) {
          this._icon.setNativeProps(props);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        if (!this.state.fontIsLoaded) {
          return _react2.default.createElement(_reactNative.Text, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            }
          });
        }

        return _react2.default.createElement(RNVIconComponent, babelHelpers.extends({
          ref: function ref(view) {
            _this2._icon = view;
          }
        }, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }));
      }
    }]);
    return Icon;
  }(_react2.default.Component), _class.propTypes = RNVIconComponent.propTypes, _class.defaultProps = RNVIconComponent.defaultProps, _temp2);


  Icon.Button = (0, _iconButton2.default)(Icon);
  Icon.glyphMap = glyphMap;
  Icon.font = font;

  return Icon;
};

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _expo = require('expo');

var _createIconSet = require('./vendor/react-native-vector-icons/lib/create-icon-set');

var _createIconSet2 = babelHelpers.interopRequireDefault(_createIconSet);

var _iconButton = require('./vendor/react-native-vector-icons/lib/icon-button');

var _iconButton2 = babelHelpers.interopRequireDefault(_iconButton);