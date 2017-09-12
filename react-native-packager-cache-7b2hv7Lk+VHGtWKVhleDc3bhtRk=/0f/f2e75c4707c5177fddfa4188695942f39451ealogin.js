Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/src/props/naviago_map_planning/components/login.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _expo = require('expo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Login: {
    displayName: 'Login'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/mnt/c/Users/Daniel/Naviago-RN-Frontend/src/props/naviago_map_planning/components/login.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var Login = _wrapComponent('Login')(function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._requestCameraPermission();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        _react3.default.createElement(
          _reactNative.Text,
          { style: styles.paragraph, __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          'Naviago'
        ),
        _react3.default.createElement(_reactNative.TextInput, {
          value: this.state.inputValueUser,
          onChangeText: this._handleTextChange,
          style: { width: 250, height: 44, padding: 8, backgroundColor: "#FFFFFF", borderColor: 'gray', borderWidth: 1, underlineColorAndroid: "#FFFFFF", borderTopLeftRadius: 7, borderTopRightRadius: 7 },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }),
        _react3.default.createElement(_reactNative.TextInput, {
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
}(_react2.Component));

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