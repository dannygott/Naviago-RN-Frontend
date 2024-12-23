var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/lottie-react-native/lib/js/Animation.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeSafeModule = require('react-native-safe-module');

var _reactNativeSafeModule2 = babelHelpers.interopRequireDefault(_reactNativeSafeModule);

var NativeLottieView = _reactNativeSafeModule2.default.component({
  viewName: 'LottieAnimationView',
  mockComponent: _reactNative.View
});

var LottieViewManager = _reactNativeSafeModule2.default.module({
  moduleName: 'LottieAnimationView',
  mock: {
    play: function play() {},
    reset: function reset() {}
  }
});

var ViewStyleExceptBorderPropType = function ViewStyleExceptBorderPropType(props, propName, componentName) {
  for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    rest[_key - 3] = arguments[_key];
  }

  var _View$propTypes;

  var flattened = _reactNative.StyleSheet.flatten(props[propName]);
  var usesBorder = Object.keys(flattened).some(function (key) {
    return key.startsWith('border');
  });
  if (usesBorder) {
    return Error(componentName + ' does not allow any border related style properties to be specified. ' + 'Border styles for this component will behave differently across platforms. If you\'d like ' + 'to render a border around this component, wrap it with a View.');
  }
  return (_View$propTypes = _reactNative.View.propTypes).style.apply(_View$propTypes, [props, propName, componentName].concat(rest));
};

var NotAllowedPropType = function NotAllowedPropType(props, propName, componentName) {
  var value = props[propName];
  if (value != null) {
    return Error(componentName + ' cannot specify \'' + propName + '\'.');
  }
  return null;
};

var propTypes = babelHelpers.extends({}, _reactNative.View.propTypes, {
  style: ViewStyleExceptBorderPropType,
  children: NotAllowedPropType,
  progress: _react.PropTypes.number,
  speed: _react.PropTypes.number,
  loop: _react.PropTypes.bool,
  source: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string]).isRequired
});

var defaultProps = {
  progress: 0,
  speed: 1,
  loop: false
};

var viewConfig = {
  uiViewClassName: 'LottieAnimationView',
  validAttributes: {
    progress: true
  }
};

var LottieAnimation = function (_React$Component) {
  babelHelpers.inherits(LottieAnimation, _React$Component);

  function LottieAnimation(props) {
    babelHelpers.classCallCheck(this, LottieAnimation);

    var _this = babelHelpers.possibleConstructorReturn(this, (LottieAnimation.__proto__ || Object.getPrototypeOf(LottieAnimation)).call(this, props));

    _this.viewConfig = viewConfig;
    _this.refRoot = _this.refRoot.bind(_this);
    return _this;
  }

  babelHelpers.createClass(LottieAnimation, [{
    key: 'setNativeProps',
    value: function setNativeProps(props) {
      _reactNative.UIManager.updateView(this.getHandle(), this.viewConfig.uiViewClassName, {
        progress: props.progress
      });
    }
  }, {
    key: 'play',
    value: function play() {
      this.runCommand('play');
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.runCommand('reset');
    }
  }, {
    key: 'runCommand',
    value: function runCommand(name) {
      var _this2 = this;

      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      return _reactNative.Platform.select({
        android: function android() {
          return _reactNative.UIManager.dispatchViewManagerCommand(_this2.getHandle(), _reactNative.UIManager.LottieAnimationView.Commands[name], args);
        },
        ios: function ios() {
          return LottieViewManager[name].apply(LottieViewManager, [_this2.getHandle()].concat(babelHelpers.toConsumableArray(args)));
        }
      })();
    }
  }, {
    key: 'getHandle',
    value: function getHandle() {
      return (0, _reactNative.findNodeHandle)(this.root);
    }
  }, {
    key: 'refRoot',
    value: function refRoot(root) {
      this.root = root;
    }
  }, {
    key: 'render',
    value: function render() {
      var source = this.props.source;

      var sourceName = typeof source === 'string' ? source : undefined;
      var sourceJson = typeof source === 'string' ? undefined : source;

      return _react2.default.createElement(NativeLottieView, babelHelpers.extends({
        ref: this.refRoot
      }, this.props, {
        source: undefined,
        sourceName: sourceName,
        sourceJson: sourceJson,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }));
    }
  }]);
  return LottieAnimation;
}(_react2.default.Component);

LottieAnimation.propTypes = propTypes;
LottieAnimation.defaultProps = defaultProps;

var Animation = _reactNative.Animated.createAnimatedComponent(LottieAnimation);

Animation.prototype.play = function play() {
  return this.getNode().play();
};

Animation.prototype.reset = function pause() {
  return this.getNode().reset();
};

module.exports = Animation;