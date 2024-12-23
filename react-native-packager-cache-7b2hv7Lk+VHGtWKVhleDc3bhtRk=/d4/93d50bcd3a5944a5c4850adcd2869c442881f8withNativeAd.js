Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/expo/src/FacebookAds/withNativeAd.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _fbemitter = require('fbemitter');

var _NativeAdsManager = require('./NativeAdsManager');

var _NativeAdsManager2 = babelHelpers.interopRequireDefault(_NativeAdsManager);

var NativeAdView = (0, _reactNative.requireNativeComponent)('CTKNativeAd', null);

exports.default = function (Component) {
  return function (_React$Component) {
    babelHelpers.inherits(NativeAdWrapper, _React$Component);

    function NativeAdWrapper() {
      var _ref;

      var _temp, _this, _ret;

      babelHelpers.classCallCheck(this, NativeAdWrapper);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = NativeAdWrapper.__proto__ || Object.getPrototypeOf(NativeAdWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        ad: null,
        canRequestAds: false
      }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(NativeAdWrapper, [{
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
            props = babelHelpers.objectWithoutProperties(_props, ['adsManager']);


        if (!this.state.canRequestAds) {
          return null;
        }

        return _react2.default.createElement(
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
          this.state.ad && _react2.default.createElement(Component, babelHelpers.extends({ nativeAd: this.state.ad }, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }))
        );
      }
    }]);
    return NativeAdWrapper;
  }(_react2.default.Component);
};