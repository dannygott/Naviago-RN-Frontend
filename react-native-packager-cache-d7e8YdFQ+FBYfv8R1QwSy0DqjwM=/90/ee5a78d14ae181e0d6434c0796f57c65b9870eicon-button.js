Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/@expo/vector-icons/vendor/react-native-vector-icons/lib/icon-button.js';
exports.default = createIconButtonComponent;

var _isString = require('lodash/isString');

var _isString2 = babelHelpers.interopRequireDefault(_isString);

var _omit = require('lodash/omit');

var _omit2 = babelHelpers.interopRequireDefault(_omit);

var _pick = require('lodash/pick');

var _pick2 = babelHelpers.interopRequireDefault(_pick);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = babelHelpers.interopRequireDefault(_propTypes);

var _reactNative = require('./react-native');

var styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8
  },
  touchable: {
    overflow: 'hidden'
  },
  icon: {
    marginRight: 10
  },
  text: {
    fontWeight: '600',
    backgroundColor: 'transparent'
  }
});

var IOS7_BLUE = '#007AFF';

function createIconButtonComponent(Icon) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    babelHelpers.inherits(IconButton, _Component);

    function IconButton() {
      babelHelpers.classCallCheck(this, IconButton);
      return babelHelpers.possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
    }

    babelHelpers.createClass(IconButton, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            style = _props.style,
            iconStyle = _props.iconStyle,
            children = _props.children,
            restProps = babelHelpers.objectWithoutProperties(_props, ['style', 'iconStyle', 'children']);


        var iconProps = (0, _pick2.default)(restProps, Object.keys(_reactNative.Text.propTypes), 'style', 'name', 'size', 'color');
        var touchableProps = (0, _pick2.default)(restProps, Object.keys(_reactNative.TouchableHighlight.propTypes));
        var props = (0, _omit2.default)(restProps, Object.keys(iconProps), Object.keys(touchableProps), 'iconStyle', 'borderRadius', 'backgroundColor');
        iconProps.style = iconStyle ? [styles.icon, iconStyle] : styles.icon;

        var colorStyle = (0, _pick2.default)(this.props, 'color');
        var blockStyle = (0, _pick2.default)(this.props, 'backgroundColor', 'borderRadius');

        return _react2.default.createElement(
          _reactNative.TouchableHighlight,
          babelHelpers.extends({
            style: [styles.touchable, blockStyle]
          }, touchableProps, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            }
          }),
          _react2.default.createElement(
            _reactNative.View,
            babelHelpers.extends({ style: [styles.container, blockStyle, style] }, props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              }
            }),
            _react2.default.createElement(Icon, babelHelpers.extends({}, iconProps, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82
              }
            })),
            (0, _isString2.default)(children) ? _react2.default.createElement(
              _reactNative.Text,
              { style: [styles.text, colorStyle], __source: {
                  fileName: _jsxFileName,
                  lineNumber: 84
                }
              },
              children
            ) : children
          )
        );
      }
    }]);
    return IconButton;
  }(_react.Component), _class.propTypes = {
    backgroundColor: _propTypes2.default.string,
    borderRadius: _propTypes2.default.number,
    color: _propTypes2.default.string,
    size: _propTypes2.default.number,
    iconStyle: _propTypes2.default.any,
    style: _propTypes2.default.any,
    children: _propTypes2.default.node
  }, _class.defaultProps = {
    backgroundColor: IOS7_BLUE,
    borderRadius: 5,
    color: 'white',
    size: 20
  }, _temp;
}