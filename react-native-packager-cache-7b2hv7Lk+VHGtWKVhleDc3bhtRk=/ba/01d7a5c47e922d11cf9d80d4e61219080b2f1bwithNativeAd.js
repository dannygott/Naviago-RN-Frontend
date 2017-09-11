Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/expo/src/FacebookAds/withNativeAd.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _fbemitter = require('fbemitter');

var _NativeAdsManager = require('./NativeAdsManager');

var _NativeAdsManager2 = _interopRequireDefault(_NativeAdsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NativeAdWrapper: {
    displayName: 'NativeAdWrapper',
    isInFunction: true
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/expo/src/FacebookAds/withNativeAd.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var NativeAdView = (0, _reactNative.requireNativeComponent)('CTKNativeAd', null);

exports.default = function (Component) {
  return _wrapComponent('NativeAdWrapper')(function (_React$Component) {
    _inherits(NativeAdWrapper, _React$Component);

    function NativeAdWrapper() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, NativeAdWrapper);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NativeAdWrapper.__proto__ || Object.getPrototypeOf(NativeAdWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        ad: null,
        canRequestAds: false
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NativeAdWrapper, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.subscription = this.props.adsManager.onAdsLoaded(function () {
          return _this2.setState({ canRequestAds: true });
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.subscription.remove();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var _props = this.props,
            adsManager = _props.adsManager,
            props = _objectWithoutProperties(_props, ['adsManager']);

        if (!this.state.canRequestAds) {
          return null;
        }

        return _react3.default.createElement(
          NativeAdView,
          {
            adsManager: adsManager.toJSON(),
            onAdLoaded: function onAdLoaded(e) {
              return _this3.setState({ ad: e.nativeEvent });
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          },
          this.state.ad && _react3.default.createElement(Component, _extends({ nativeAd: this.state.ad }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }))
        );
      }
    }]);

    return NativeAdWrapper;
  }(_react3.default.Component));
};