Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/src/props/naviago_map_planning/components/login.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _expo = require('expo');

var Login = function (_Component) {
  babelHelpers.inherits(Login, _Component);

  function Login() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      switchValue: true,
      inputValueUser: "Username",
      inputValuePass: "Password",
      hasCameraPermission: null
    }, _this._handleButtonPress = function () {
      _reactNative.Alert.alert('Button pressed!', 'You did it!');
    }, _this._handleToggleSwitch = function () {
      return _this.setState(function (state) {
        return {
          switchValue: !state.switchValue
        };
      });
    }, _this._handleTextChange = function (inputValue) {
      _this.setState({ inputValue: inputValue });
    }, _this._requestCameraPermission = function _callee() {
      var _ref2, status;

      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_expo.Permissions.askAsync(_expo.Permissions.CAMERA));

            case 2:
              _ref2 = _context.sent;
              status = _ref2.status;

              _this.setState({
                hasCameraPermission: status === 'granted'
              });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, null, _this2);
    }, _this._handleBarCodeRead = function (data) {
      _reactNative.Alert.alert('Scan successful!', JSON.stringify(data));
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._requestCameraPermission();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        _react2.default.createElement(
          _reactNative.Text,
          { style: styles.paragraph, __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          'Naviago'
        ),
        _react2.default.createElement(_reactNative.TextInput, {
          value: this.state.inputValueUser,
          onChangeText: this._handleTextChange,
          style: { width: 250, height: 44, padding: 8, backgroundColor: "#FFFFFF", borderColor: 'gray', borderWidth: 1, underlineColorAndroid: "#FFFFFF", borderTopLeftRadius: 7, borderTopRightRadius: 7 },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }),
        _react2.default.createElement(_reactNative.TextInput, {
          value: this.state.inputValuePass,
          onChangeText: this._handleTextChange,
          style: { width: 250, height: 44, padding: 8, backgroundColor: "#FFFFFF", borderColor: 'gray', borderWidth: 1, underlineColorAndroid: "#FFFFFF", borderBottomRightRadius: 7, borderBottomLeftRadius: 7 },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        })
      );
    }
  }]);
  return Login;
}(_react.Component);

exports.default = Login;


var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: _expo.Constants.statusBarHeight,
    backgroundColor: '#22B573'
  },
  paragraph: {
    margin: 24,
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFD85'
  }
});