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
}var ScaleAnimation = function (_Animation) {
  _inherits(ScaleAnimation, _Animation);function ScaleAnimation() {
    _classCallCheck(this, ScaleAnimation);return _possibleConstructorReturn(this, (ScaleAnimation.__proto__ || Object.getPrototypeOf(ScaleAnimation)).apply(this, arguments));
  }_createClass(ScaleAnimation, [{ key: 'toValue', value: function toValue(_toValue, onFinished) {
      switch (_toValue) {case 0:
          _reactNative.Animated.spring(this.animate, { toValue: _toValue, velocity: 3, tension: 250, friction: 20 }).start(onFinished);break;case 1:
          _reactNative.Animated.spring(this.animate, { toValue: _toValue, velocity: 0, tension: 65, friction: 7 }).start(onFinished);break;default:
          break;}
    } }, { key: 'createAnimations', value: function createAnimations() {
      var transform = [{ scale: this.animate.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) }, { scale: this.animate.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) }];var animations = { transform: transform };return animations;
    } }]);return ScaleAnimation;
}(_Animation3.default);exports.default = ScaleAnimation;