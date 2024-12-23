Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();var _reactNative = require("react-native");function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}var Animation = function () {
  function Animation() {
    var toValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;_classCallCheck(this, Animation);this.animate = new _reactNative.Animated.Value(toValue);this.animations = this.createAnimations();
  }_createClass(Animation, [{ key: 'toValue', value: function toValue(_toValue) {} }, { key: 'createAnimations', value: function createAnimations() {
      return {};
    } }]);return Animation;
}();exports.default = Animation;