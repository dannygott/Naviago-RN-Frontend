Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/expo/src/FacebookAds/BannerViewManager.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var CTKBannerView = (0, _reactNative.requireNativeComponent)('CTKBannerView', null, {
  onAdPress: true,
  onAdError: true
});

var sizeForType = {
  large: 90,
  rectangle: 250,
  standard: 50
};

var getSizeForType = function getSizeForType(type) {
  return sizeForType[type] || sizeForType.standard;
};

var BannerView = function BannerView(props) {
  var type = props.type,
      onPress = props.onPress,
      onError = props.onError,
      style = props.style,
      restProps = babelHelpers.objectWithoutProperties(props, ['type', 'onPress', 'onError', 'style']);

  var size = getSizeForType(type);

  return _react2.default.createElement(CTKBannerView, babelHelpers.extends({
    size: size,
    onAdPress: onPress,
    onAdError: onError,
    style: [style, { height: size }]
  }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }));
};

exports.default = BannerView;