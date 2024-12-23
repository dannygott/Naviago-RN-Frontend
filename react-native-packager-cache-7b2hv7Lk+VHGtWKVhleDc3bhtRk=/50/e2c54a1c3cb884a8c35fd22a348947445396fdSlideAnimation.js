Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();var _reactNative = require("react-native");var _Animation2 = require('./Animation');var _Animation3 = _interopRequireDefault(_Animation2);function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}var SlideAnimation = function (_Animation) {
  _inherits(SlideAnimation, _Animation);function SlideAnimation(_ref) {
    var _ref$toValue = _ref.toValue,
        toValue = _ref$toValue === undefined ? 0 : _ref$toValue,
        _ref$slideFrom = _ref.slideFrom,
        slideFrom = _ref$slideFrom === undefined ? 'bottom' : _ref$slideFrom;_classCallCheck(this, SlideAnimation);var _this = _possibleConstructorReturn(this, (SlideAnimation.__proto__ || Object.getPrototypeOf(SlideAnimation)).call(this, toValue));_this.animations = _this.createAnimations(slideFrom);return _this;
  }_createClass(SlideAnimation, [{ key: 'toValue', value: function (_toValue) {
      function toValue(_x, _x2) {
        return _toValue.apply(this, arguments);
      }toValue.toString = function () {
        return _toValue.toString();
      };return toValue;
    }(function (toValue, onFinished) {
      _reactNative.Animated.spring(this.animate, { toValue: toValue, velocity: 0, tension: 65, friction: 10 }).start(onFinished);
    }) }, { key: 'createAnimations', value: function createAnimations(slideFrom) {
      var transform = [];if (['top', 'bottom'].includes(slideFrom)) {
        if (slideFrom === 'bottom') {
          transform.push({ translateY: this.animate.interpolate({ inputRange: [0, 1], outputRange: [800, 1] }) });
        } else {
          transform.push({ translateY: this.animate.interpolate({ inputRange: [0, 1], outputRange: [-800, 1] }) });
        }
      } else if (['left', 'right'].includes(slideFrom)) {
        if (slideFrom === 'right') {
          transform.push({ translateX: this.animate.interpolate({ inputRange: [0, 1], outputRange: [800, 1] }) });
        } else {
          transform.push({ translateX: this.animate.interpolate({ inputRange: [0, 1], outputRange: [-800, 1] }) });
        }
      }var animations = { transform: transform };return animations;
    } }]);return SlideAnimation;
}(_Animation3.default);exports.default = SlideAnimation;