
'use strict';

var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native/Libraries/Animated/src/AnimatedImplementation.js';
var InteractionManager = require('InteractionManager');
var Interpolation = require('Interpolation');
var NativeAnimatedHelper = require('NativeAnimatedHelper');
var React = require('React');
var ReactNative = require('ReactNative');
var Set = require('Set');
var SpringConfig = require('SpringConfig');
var ViewStylePropTypes = require('ViewStylePropTypes');

var flattenStyle = require('flattenStyle');
var invariant = require('fbjs/lib/invariant');
var requestAnimationFrame = require('fbjs/lib/requestAnimationFrame');

var NativeAnimatedAPI = NativeAnimatedHelper.API;

var warnedMissingNativeAnimated = false;

function shouldUseNativeDriver(config) {
  if (config.useNativeDriver && !NativeAnimatedHelper.isNativeAnimatedAvailable()) {
    if (!warnedMissingNativeAnimated) {
      console.warn('Animated: `useNativeDriver` is not supported because the native ' + 'animated module is missing. Falling back to JS-based animation. To ' + 'resolve this, add `RCTAnimation` module to this app, or remove ' + '`useNativeDriver`. ' + 'More info: https://github.com/facebook/react-native/issues/11094#issuecomment-263240420');
      warnedMissingNativeAnimated = true;
    }
    return false;
  }

  return config.useNativeDriver || false;
}

var Animated = function () {
  function Animated() {
    babelHelpers.classCallCheck(this, Animated);
  }

  babelHelpers.createClass(Animated, [{
    key: '__attach',
    value: function __attach() {}
  }, {
    key: '__detach',
    value: function __detach() {
      if (this.__isNative && this.__nativeTag != null) {
        NativeAnimatedAPI.dropAnimatedNode(this.__nativeTag);
        this.__nativeTag = undefined;
      }
    }
  }, {
    key: '__getValue',
    value: function __getValue() {}
  }, {
    key: '__getAnimatedValue',
    value: function __getAnimatedValue() {
      return this.__getValue();
    }
  }, {
    key: '__addChild',
    value: function __addChild(child) {}
  }, {
    key: '__removeChild',
    value: function __removeChild(child) {}
  }, {
    key: '__getChildren',
    value: function __getChildren() {
      return [];
    }
  }, {
    key: '__makeNative',
    value: function __makeNative() {
      if (!this.__isNative) {
        throw new Error('This node cannot be made a "native" animated node');
      }
    }
  }, {
    key: '__getNativeTag',
    value: function __getNativeTag() {
      NativeAnimatedHelper.assertNativeAnimatedModule();
      invariant(this.__isNative, 'Attempt to get native tag from node not marked as "native"');
      if (this.__nativeTag == null) {
        var nativeTag = NativeAnimatedHelper.generateNewNodeTag();
        NativeAnimatedAPI.createAnimatedNode(nativeTag, this.__getNativeConfig());
        this.__nativeTag = nativeTag;
      }
      return this.__nativeTag;
    }
  }, {
    key: '__getNativeConfig',
    value: function __getNativeConfig() {
      throw new Error('This JS animated node type cannot be used as native animated node');
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.__getValue();
    }
  }]);
  return Animated;
}();

var Animation = function () {
  function Animation() {
    babelHelpers.classCallCheck(this, Animation);
  }

  babelHelpers.createClass(Animation, [{
    key: 'start',
    value: function start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {}
  }, {
    key: 'stop',
    value: function stop() {
      if (this.__nativeId) {
        NativeAnimatedAPI.stopAnimation(this.__nativeId);
      }
    }
  }, {
    key: '__getNativeAnimationConfig',
    value: function __getNativeAnimationConfig() {
      throw new Error('This animation type cannot be offloaded to native');
    }
  }, {
    key: '__debouncedOnEnd',
    value: function __debouncedOnEnd(result) {
      var onEnd = this.__onEnd;
      this.__onEnd = null;
      onEnd && onEnd(result);
    }
  }, {
    key: '__startNativeAnimation',
    value: function __startNativeAnimation(animatedValue) {
      animatedValue.__makeNative();
      this.__nativeId = NativeAnimatedHelper.generateNewAnimationId();
      NativeAnimatedAPI.startAnimatingNode(this.__nativeId, animatedValue.__getNativeTag(), this.__getNativeAnimationConfig(), this.__debouncedOnEnd.bind(this));
    }
  }]);
  return Animation;
}();

var AnimatedWithChildren = function (_Animated) {
  babelHelpers.inherits(AnimatedWithChildren, _Animated);

  function AnimatedWithChildren() {
    babelHelpers.classCallCheck(this, AnimatedWithChildren);

    var _this = babelHelpers.possibleConstructorReturn(this, (AnimatedWithChildren.__proto__ || Object.getPrototypeOf(AnimatedWithChildren)).call(this));

    _this._children = [];
    return _this;
  }

  babelHelpers.createClass(AnimatedWithChildren, [{
    key: '__makeNative',
    value: function __makeNative() {
      if (!this.__isNative) {
        this.__isNative = true;
        for (var _iterator = this._children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[typeof Symbol === 'function' ? Symbol.iterator : '@@iterator']();;) {
          var _ref;

          if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
          } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
          }

          var child = _ref;

          child.__makeNative();
          NativeAnimatedAPI.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
        }
      }
    }
  }, {
    key: '__addChild',
    value: function __addChild(child) {
      if (this._children.length === 0) {
        this.__attach();
      }
      this._children.push(child);
      if (this.__isNative) {
        child.__makeNative();
        NativeAnimatedAPI.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
      }
    }
  }, {
    key: '__removeChild',
    value: function __removeChild(child) {
      var index = this._children.indexOf(child);
      if (index === -1) {
        console.warn('Trying to remove a child that doesn\'t exist');
        return;
      }
      if (this.__isNative && child.__isNative) {
        NativeAnimatedAPI.disconnectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
      }
      this._children.splice(index, 1);
      if (this._children.length === 0) {
        this.__detach();
      }
    }
  }, {
    key: '__getChildren',
    value: function __getChildren() {
      return this._children;
    }
  }]);
  return AnimatedWithChildren;
}(Animated);

function _flush(rootNode) {
  var animatedStyles = new Set();
  function findAnimatedStyles(node) {
    if (typeof node.update === 'function') {
      animatedStyles.add(node);
    } else {
      node.__getChildren().forEach(findAnimatedStyles);
    }
  }
  findAnimatedStyles(rootNode);

  animatedStyles.forEach(function (animatedStyle) {
    return animatedStyle.update();
  });
}

var _easeInOut = void 0;
function easeInOut() {
  if (!_easeInOut) {
    var Easing = require('Easing');
    _easeInOut = Easing.inOut(Easing.ease);
  }
  return _easeInOut;
}

var TimingAnimation = function (_Animation) {
  babelHelpers.inherits(TimingAnimation, _Animation);

  function TimingAnimation(config) {
    babelHelpers.classCallCheck(this, TimingAnimation);

    var _this2 = babelHelpers.possibleConstructorReturn(this, (TimingAnimation.__proto__ || Object.getPrototypeOf(TimingAnimation)).call(this));

    _this2._toValue = config.toValue;
    _this2._easing = config.easing !== undefined ? config.easing : easeInOut();
    _this2._duration = config.duration !== undefined ? config.duration : 500;
    _this2._delay = config.delay !== undefined ? config.delay : 0;
    _this2.__iterations = config.iterations !== undefined ? config.iterations : 1;
    _this2.__isInteraction = config.isInteraction !== undefined ? config.isInteraction : true;
    _this2._useNativeDriver = shouldUseNativeDriver(config);
    return _this2;
  }

  babelHelpers.createClass(TimingAnimation, [{
    key: '__getNativeAnimationConfig',
    value: function __getNativeAnimationConfig() {
      var frameDuration = 1000.0 / 60.0;
      var frames = [];
      for (var dt = 0.0; dt < this._duration; dt += frameDuration) {
        frames.push(this._easing(dt / this._duration));
      }
      frames.push(this._easing(1));
      return {
        type: 'frames',
        frames: frames,
        toValue: this._toValue,
        iterations: this.__iterations
      };
    }
  }, {
    key: 'start',
    value: function start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
      var _this3 = this;

      this.__active = true;
      this._fromValue = fromValue;
      this._onUpdate = onUpdate;
      this.__onEnd = onEnd;

      var start = function start() {
        if (_this3._duration === 0 && !_this3._useNativeDriver) {
          _this3._onUpdate(_this3._toValue);
          _this3.__debouncedOnEnd({ finished: true });
        } else {
          _this3._startTime = Date.now();
          if (_this3._useNativeDriver) {
            _this3.__startNativeAnimation(animatedValue);
          } else {
            _this3._animationFrame = requestAnimationFrame(_this3.onUpdate.bind(_this3));
          }
        }
      };
      if (this._delay) {
        this._timeout = setTimeout(start, this._delay);
      } else {
        start();
      }
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate() {
      var now = Date.now();
      if (now >= this._startTime + this._duration) {
        if (this._duration === 0) {
          this._onUpdate(this._toValue);
        } else {
          this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue));
        }
        this.__debouncedOnEnd({ finished: true });
        return;
      }

      this._onUpdate(this._fromValue + this._easing((now - this._startTime) / this._duration) * (this._toValue - this._fromValue));
      if (this.__active) {
        this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      babelHelpers.get(TimingAnimation.prototype.__proto__ || Object.getPrototypeOf(TimingAnimation.prototype), 'stop', this).call(this);
      this.__active = false;
      clearTimeout(this._timeout);
      global.cancelAnimationFrame(this._animationFrame);
      this.__debouncedOnEnd({ finished: false });
    }
  }]);
  return TimingAnimation;
}(Animation);

var DecayAnimation = function (_Animation2) {
  babelHelpers.inherits(DecayAnimation, _Animation2);

  function DecayAnimation(config) {
    babelHelpers.classCallCheck(this, DecayAnimation);

    var _this4 = babelHelpers.possibleConstructorReturn(this, (DecayAnimation.__proto__ || Object.getPrototypeOf(DecayAnimation)).call(this));

    _this4._deceleration = config.deceleration !== undefined ? config.deceleration : 0.998;
    _this4._velocity = config.velocity;
    _this4._useNativeDriver = shouldUseNativeDriver(config);
    _this4.__isInteraction = config.isInteraction !== undefined ? config.isInteraction : true;
    _this4.__iterations = config.iterations !== undefined ? config.iterations : 1;
    return _this4;
  }

  babelHelpers.createClass(DecayAnimation, [{
    key: '__getNativeAnimationConfig',
    value: function __getNativeAnimationConfig() {
      return {
        type: 'decay',
        deceleration: this._deceleration,
        velocity: this._velocity,
        iterations: this.__iterations
      };
    }
  }, {
    key: 'start',
    value: function start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
      this.__active = true;
      this._lastValue = fromValue;
      this._fromValue = fromValue;
      this._onUpdate = onUpdate;
      this.__onEnd = onEnd;
      this._startTime = Date.now();
      if (this._useNativeDriver) {
        this.__startNativeAnimation(animatedValue);
      } else {
        this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
      }
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate() {
      var now = Date.now();

      var value = this._fromValue + this._velocity / (1 - this._deceleration) * (1 - Math.exp(-(1 - this._deceleration) * (now - this._startTime)));

      this._onUpdate(value);

      if (Math.abs(this._lastValue - value) < 0.1) {
        this.__debouncedOnEnd({ finished: true });
        return;
      }

      this._lastValue = value;
      if (this.__active) {
        this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      babelHelpers.get(DecayAnimation.prototype.__proto__ || Object.getPrototypeOf(DecayAnimation.prototype), 'stop', this).call(this);
      this.__active = false;
      global.cancelAnimationFrame(this._animationFrame);
      this.__debouncedOnEnd({ finished: false });
    }
  }]);
  return DecayAnimation;
}(Animation);

function withDefault(value, defaultValue) {
  if (value === undefined || value === null) {
    return defaultValue;
  }
  return value;
}

var SpringAnimation = function (_Animation3) {
  babelHelpers.inherits(SpringAnimation, _Animation3);

  function SpringAnimation(config) {
    babelHelpers.classCallCheck(this, SpringAnimation);

    var _this5 = babelHelpers.possibleConstructorReturn(this, (SpringAnimation.__proto__ || Object.getPrototypeOf(SpringAnimation)).call(this));

    _this5._overshootClamping = withDefault(config.overshootClamping, false);
    _this5._restDisplacementThreshold = withDefault(config.restDisplacementThreshold, 0.001);
    _this5._restSpeedThreshold = withDefault(config.restSpeedThreshold, 0.001);
    _this5._initialVelocity = config.velocity;
    _this5._lastVelocity = withDefault(config.velocity, 0);
    _this5._toValue = config.toValue;
    _this5._useNativeDriver = shouldUseNativeDriver(config);
    _this5.__isInteraction = config.isInteraction !== undefined ? config.isInteraction : true;
    _this5.__iterations = config.iterations !== undefined ? config.iterations : 1;

    var springConfig;
    if (config.bounciness !== undefined || config.speed !== undefined) {
      invariant(config.tension === undefined && config.friction === undefined, 'You can only define bounciness/speed or tension/friction but not both');
      springConfig = SpringConfig.fromBouncinessAndSpeed(withDefault(config.bounciness, 8), withDefault(config.speed, 12));
    } else {
      springConfig = SpringConfig.fromOrigamiTensionAndFriction(withDefault(config.tension, 40), withDefault(config.friction, 7));
    }
    _this5._tension = springConfig.tension;
    _this5._friction = springConfig.friction;
    return _this5;
  }

  babelHelpers.createClass(SpringAnimation, [{
    key: '__getNativeAnimationConfig',
    value: function __getNativeAnimationConfig() {
      return {
        type: 'spring',
        overshootClamping: this._overshootClamping,
        restDisplacementThreshold: this._restDisplacementThreshold,
        restSpeedThreshold: this._restSpeedThreshold,
        tension: this._tension,
        friction: this._friction,
        initialVelocity: withDefault(this._initialVelocity, this._lastVelocity),
        toValue: this._toValue,
        iterations: this.__iterations
      };
    }
  }, {
    key: 'start',
    value: function start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
      this.__active = true;
      this._startPosition = fromValue;
      this._lastPosition = this._startPosition;

      this._onUpdate = onUpdate;
      this.__onEnd = onEnd;
      this._lastTime = Date.now();

      if (previousAnimation instanceof SpringAnimation) {
        var internalState = previousAnimation.getInternalState();
        this._lastPosition = internalState.lastPosition;
        this._lastVelocity = internalState.lastVelocity;
        this._lastTime = internalState.lastTime;
      }
      if (this._initialVelocity !== undefined && this._initialVelocity !== null) {
        this._lastVelocity = this._initialVelocity;
      }
      if (this._useNativeDriver) {
        this.__startNativeAnimation(animatedValue);
      } else {
        this.onUpdate();
      }
    }
  }, {
    key: 'getInternalState',
    value: function getInternalState() {
      return {
        lastPosition: this._lastPosition,
        lastVelocity: this._lastVelocity,
        lastTime: this._lastTime
      };
    }
  }, {
    key: 'onUpdate',
    value: function onUpdate() {
      var position = this._lastPosition;
      var velocity = this._lastVelocity;

      var tempPosition = this._lastPosition;
      var tempVelocity = this._lastVelocity;

      var MAX_STEPS = 64;
      var now = Date.now();
      if (now > this._lastTime + MAX_STEPS) {
        now = this._lastTime + MAX_STEPS;
      }

      var TIMESTEP_MSEC = 1;
      var numSteps = Math.floor((now - this._lastTime) / TIMESTEP_MSEC);

      for (var i = 0; i < numSteps; ++i) {
        var step = TIMESTEP_MSEC / 1000;

        var aVelocity = velocity;
        var aAcceleration = this._tension * (this._toValue - tempPosition) - this._friction * tempVelocity;
        var tempPosition = position + aVelocity * step / 2;
        var tempVelocity = velocity + aAcceleration * step / 2;

        var bVelocity = tempVelocity;
        var bAcceleration = this._tension * (this._toValue - tempPosition) - this._friction * tempVelocity;
        tempPosition = position + bVelocity * step / 2;
        tempVelocity = velocity + bAcceleration * step / 2;

        var cVelocity = tempVelocity;
        var cAcceleration = this._tension * (this._toValue - tempPosition) - this._friction * tempVelocity;
        tempPosition = position + cVelocity * step / 2;
        tempVelocity = velocity + cAcceleration * step / 2;

        var dVelocity = tempVelocity;
        var dAcceleration = this._tension * (this._toValue - tempPosition) - this._friction * tempVelocity;
        tempPosition = position + cVelocity * step / 2;
        tempVelocity = velocity + cAcceleration * step / 2;

        var dxdt = (aVelocity + 2 * (bVelocity + cVelocity) + dVelocity) / 6;
        var dvdt = (aAcceleration + 2 * (bAcceleration + cAcceleration) + dAcceleration) / 6;

        position += dxdt * step;
        velocity += dvdt * step;
      }

      this._lastTime = now;
      this._lastPosition = position;
      this._lastVelocity = velocity;

      this._onUpdate(position);
      if (!this.__active) {
        return;
      }

      var isOvershooting = false;
      if (this._overshootClamping && this._tension !== 0) {
        if (this._startPosition < this._toValue) {
          isOvershooting = position > this._toValue;
        } else {
          isOvershooting = position < this._toValue;
        }
      }
      var isVelocity = Math.abs(velocity) <= this._restSpeedThreshold;
      var isDisplacement = true;
      if (this._tension !== 0) {
        isDisplacement = Math.abs(this._toValue - position) <= this._restDisplacementThreshold;
      }

      if (isOvershooting || isVelocity && isDisplacement) {
        if (this._tension !== 0) {
          this._onUpdate(this._toValue);
        }

        this.__debouncedOnEnd({ finished: true });
        return;
      }
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  }, {
    key: 'stop',
    value: function stop() {
      babelHelpers.get(SpringAnimation.prototype.__proto__ || Object.getPrototypeOf(SpringAnimation.prototype), 'stop', this).call(this);
      this.__active = false;
      global.cancelAnimationFrame(this._animationFrame);
      this.__debouncedOnEnd({ finished: false });
    }
  }]);
  return SpringAnimation;
}(Animation);

var _uniqueId = 1;

var AnimatedValue = function (_AnimatedWithChildren) {
  babelHelpers.inherits(AnimatedValue, _AnimatedWithChildren);

  function AnimatedValue(value) {
    babelHelpers.classCallCheck(this, AnimatedValue);

    var _this6 = babelHelpers.possibleConstructorReturn(this, (AnimatedValue.__proto__ || Object.getPrototypeOf(AnimatedValue)).call(this));

    _this6._startingValue = _this6._value = value;
    _this6._offset = 0;
    _this6._animation = null;
    _this6._listeners = {};
    return _this6;
  }

  babelHelpers.createClass(AnimatedValue, [{
    key: '__detach',
    value: function __detach() {
      this.stopAnimation();
      babelHelpers.get(AnimatedValue.prototype.__proto__ || Object.getPrototypeOf(AnimatedValue.prototype), '__detach', this).call(this);
    }
  }, {
    key: '__getValue',
    value: function __getValue() {
      return this._value + this._offset;
    }
  }, {
    key: '__makeNative',
    value: function __makeNative() {
      babelHelpers.get(AnimatedValue.prototype.__proto__ || Object.getPrototypeOf(AnimatedValue.prototype), '__makeNative', this).call(this);

      if (Object.keys(this._listeners).length) {
        this._startListeningToNativeValueUpdates();
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (this._animation) {
        this._animation.stop();
        this._animation = null;
      }
      this._updateValue(value, !this.__isNative);
      if (this.__isNative) {
        NativeAnimatedAPI.setAnimatedNodeValue(this.__getNativeTag(), value);
      }
    }
  }, {
    key: 'setOffset',
    value: function setOffset(offset) {
      this._offset = offset;
      if (this.__isNative) {
        NativeAnimatedAPI.setAnimatedNodeOffset(this.__getNativeTag(), offset);
      }
    }
  }, {
    key: 'flattenOffset',
    value: function flattenOffset() {
      this._value += this._offset;
      this._offset = 0;
      if (this.__isNative) {
        NativeAnimatedAPI.flattenAnimatedNodeOffset(this.__getNativeTag());
      }
    }
  }, {
    key: 'extractOffset',
    value: function extractOffset() {
      this._offset += this._value;
      this._value = 0;
      if (this.__isNative) {
        NativeAnimatedAPI.extractAnimatedNodeOffset(this.__getNativeTag());
      }
    }
  }, {
    key: 'addListener',
    value: function addListener(callback) {
      var id = String(_uniqueId++);
      this._listeners[id] = callback;
      if (this.__isNative) {
        this._startListeningToNativeValueUpdates();
      }
      return id;
    }
  }, {
    key: 'removeListener',
    value: function removeListener(id) {
      delete this._listeners[id];
      if (this.__isNative && Object.keys(this._listeners).length === 0) {
        this._stopListeningForNativeValueUpdates();
      }
    }
  }, {
    key: 'removeAllListeners',
    value: function removeAllListeners() {
      this._listeners = {};
      if (this.__isNative) {
        this._stopListeningForNativeValueUpdates();
      }
    }
  }, {
    key: '_startListeningToNativeValueUpdates',
    value: function _startListeningToNativeValueUpdates() {
      var _this7 = this;

      if (this.__nativeAnimatedValueListener) {
        return;
      }

      NativeAnimatedAPI.startListeningToAnimatedNodeValue(this.__getNativeTag());
      this.__nativeAnimatedValueListener = NativeAnimatedHelper.nativeEventEmitter.addListener('onAnimatedValueUpdate', function (data) {
        if (data.tag !== _this7.__getNativeTag()) {
          return;
        }
        _this7._updateValue(data.value, false);
      });
    }
  }, {
    key: '_stopListeningForNativeValueUpdates',
    value: function _stopListeningForNativeValueUpdates() {
      if (!this.__nativeAnimatedValueListener) {
        return;
      }

      this.__nativeAnimatedValueListener.remove();
      this.__nativeAnimatedValueListener = null;
      NativeAnimatedAPI.stopListeningToAnimatedNodeValue(this.__getNativeTag());
    }
  }, {
    key: 'stopAnimation',
    value: function stopAnimation(callback) {
      this.stopTracking();
      this._animation && this._animation.stop();
      this._animation = null;
      callback && callback(this.__getValue());
    }
  }, {
    key: 'resetAnimation',
    value: function resetAnimation(callback) {
      this.stopAnimation(callback);
      this._value = this._startingValue;
    }
  }, {
    key: 'interpolate',
    value: function interpolate(config) {
      return new AnimatedInterpolation(this, config);
    }
  }, {
    key: 'animate',
    value: function animate(animation, callback) {
      var _this8 = this;

      var handle = null;
      if (animation.__isInteraction) {
        handle = InteractionManager.createInteractionHandle();
      }
      var previousAnimation = this._animation;
      this._animation && this._animation.stop();
      this._animation = animation;
      animation.start(this._value, function (value) {
        _this8._updateValue(value, true);
      }, function (result) {
        _this8._animation = null;
        if (handle !== null) {
          InteractionManager.clearInteractionHandle(handle);
        }
        callback && callback(result);
      }, previousAnimation, this);
    }
  }, {
    key: 'stopTracking',
    value: function stopTracking() {
      this._tracking && this._tracking.__detach();
      this._tracking = null;
    }
  }, {
    key: 'track',
    value: function track(tracking) {
      this.stopTracking();
      this._tracking = tracking;
    }
  }, {
    key: '_updateValue',
    value: function _updateValue(value, flush) {
      this._value = value;
      if (flush) {
        _flush(this);
      }
      for (var key in this._listeners) {
        this._listeners[key]({ value: this.__getValue() });
      }
    }
  }, {
    key: '__getNativeConfig',
    value: function __getNativeConfig() {
      return {
        type: 'value',
        value: this._value,
        offset: this._offset
      };
    }
  }]);
  return AnimatedValue;
}(AnimatedWithChildren);

var AnimatedValueXY = function (_AnimatedWithChildren2) {
  babelHelpers.inherits(AnimatedValueXY, _AnimatedWithChildren2);

  function AnimatedValueXY(valueIn) {
    babelHelpers.classCallCheck(this, AnimatedValueXY);

    var _this9 = babelHelpers.possibleConstructorReturn(this, (AnimatedValueXY.__proto__ || Object.getPrototypeOf(AnimatedValueXY)).call(this));

    var value = valueIn || { x: 0, y: 0 };
    if (typeof value.x === 'number' && typeof value.y === 'number') {
      _this9.x = new AnimatedValue(value.x);
      _this9.y = new AnimatedValue(value.y);
    } else {
      invariant(value.x instanceof AnimatedValue && value.y instanceof AnimatedValue, 'AnimatedValueXY must be initalized with an object of numbers or ' + 'AnimatedValues.');
      _this9.x = value.x;
      _this9.y = value.y;
    }
    _this9._listeners = {};
    return _this9;
  }

  babelHelpers.createClass(AnimatedValueXY, [{
    key: 'setValue',
    value: function setValue(value) {
      this.x.setValue(value.x);
      this.y.setValue(value.y);
    }
  }, {
    key: 'setOffset',
    value: function setOffset(offset) {
      this.x.setOffset(offset.x);
      this.y.setOffset(offset.y);
    }
  }, {
    key: 'flattenOffset',
    value: function flattenOffset() {
      this.x.flattenOffset();
      this.y.flattenOffset();
    }
  }, {
    key: 'extractOffset',
    value: function extractOffset() {
      this.x.extractOffset();
      this.y.extractOffset();
    }
  }, {
    key: '__getValue',
    value: function __getValue() {
      return {
        x: this.x.__getValue(),
        y: this.y.__getValue()
      };
    }
  }, {
    key: 'resetAnimation',
    value: function resetAnimation(callback) {
      this.x.resetAnimation();
      this.y.resetAnimation();
      callback && callback(this.__getValue());
    }
  }, {
    key: 'stopAnimation',
    value: function stopAnimation(callback) {
      this.x.stopAnimation();
      this.y.stopAnimation();
      callback && callback(this.__getValue());
    }
  }, {
    key: 'addListener',
    value: function addListener(callback) {
      var _this10 = this;

      var id = String(_uniqueId++);
      var jointCallback = function jointCallback(_ref2) {
        var number = _ref2.value;

        callback(_this10.__getValue());
      };
      this._listeners[id] = {
        x: this.x.addListener(jointCallback),
        y: this.y.addListener(jointCallback)
      };
      return id;
    }
  }, {
    key: 'removeListener',
    value: function removeListener(id) {
      this.x.removeListener(this._listeners[id].x);
      this.y.removeListener(this._listeners[id].y);
      delete this._listeners[id];
    }
  }, {
    key: 'removeAllListeners',
    value: function removeAllListeners() {
      this.x.removeAllListeners();
      this.y.removeAllListeners();
      this._listeners = {};
    }
  }, {
    key: 'getLayout',
    value: function getLayout() {
      return {
        left: this.x,
        top: this.y
      };
    }
  }, {
    key: 'getTranslateTransform',
    value: function getTranslateTransform() {
      return [{ translateX: this.x }, { translateY: this.y }];
    }
  }]);
  return AnimatedValueXY;
}(AnimatedWithChildren);

var AnimatedInterpolation = function (_AnimatedWithChildren3) {
  babelHelpers.inherits(AnimatedInterpolation, _AnimatedWithChildren3);

  function AnimatedInterpolation(parent, config) {
    babelHelpers.classCallCheck(this, AnimatedInterpolation);

    var _this11 = babelHelpers.possibleConstructorReturn(this, (AnimatedInterpolation.__proto__ || Object.getPrototypeOf(AnimatedInterpolation)).call(this));

    _this11._parent = parent;
    _this11._config = config;
    _this11._interpolation = Interpolation.create(config);
    return _this11;
  }

  babelHelpers.createClass(AnimatedInterpolation, [{
    key: '__getValue',
    value: function __getValue() {
      var parentValue = this._parent.__getValue();
      invariant(typeof parentValue === 'number', 'Cannot interpolate an input which is not a number.');
      return this._interpolation(parentValue);
    }
  }, {
    key: 'interpolate',
    value: function interpolate(config) {
      return new AnimatedInterpolation(this, config);
    }
  }, {
    key: '__attach',
    value: function __attach() {
      this._parent.__addChild(this);
    }
  }, {
    key: '__detach',
    value: function __detach() {
      this._parent.__removeChild(this);
      babelHelpers.get(AnimatedInterpolation.prototype.__proto__ || Object.getPrototypeOf(AnimatedInterpolation.prototype), '__detach', this).call(this);
    }
  }, {
    key: '__transformDataType',
    value: function __transformDataType(range) {
      return range.map(function (value) {
        if (typeof value !== 'string') {
          return value;
        }
        if (/deg$/.test(value)) {
          var degrees = parseFloat(value, 10) || 0;
          var radians = degrees * Math.PI / 180.0;
          return radians;
        } else {
          return parseFloat(value, 10) || 0;
        }
      });
    }
  }, {
    key: '__getNativeConfig',
    value: function __getNativeConfig() {
      if (__DEV__) {
        NativeAnimatedHelper.validateInterpolation(this._config);
      }

      return {
        inputRange: this._config.inputRange,

        outputRange: this.__transformDataType(this._config.outputRange),
        extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || 'extend',
        extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || 'extend',
        type: 'interpolation'
      };
    }
  }]);
  return AnimatedInterpolation;
}(AnimatedWithChildren);

var AnimatedAddition = function (_AnimatedWithChildren4) {
  babelHelpers.inherits(AnimatedAddition, _AnimatedWithChildren4);

  function AnimatedAddition(a, b) {
    babelHelpers.classCallCheck(this, AnimatedAddition);

    var _this12 = babelHelpers.possibleConstructorReturn(this, (AnimatedAddition.__proto__ || Object.getPrototypeOf(AnimatedAddition)).call(this));

    _this12._a = typeof a === 'number' ? new AnimatedValue(a) : a;
    _this12._b = typeof b === 'number' ? new AnimatedValue(b) : b;
    return _this12;
  }

  babelHelpers.createClass(AnimatedAddition, [{
    key: '__makeNative',
    value: function __makeNative() {
      this._a.__makeNative();
      this._b.__makeNative();
      babelHelpers.get(AnimatedAddition.prototype.__proto__ || Object.getPrototypeOf(AnimatedAddition.prototype), '__makeNative', this).call(this);
    }
  }, {
    key: '__getValue',
    value: function __getValue() {
      return this._a.__getValue() + this._b.__getValue();
    }
  }, {
    key: 'interpolate',
    value: function interpolate(config) {
      return new AnimatedInterpolation(this, config);
    }
  }, {
    key: '__attach',
    value: function __attach() {
      this._a.__addChild(this);
      this._b.__addChild(this);
    }
  }, {
    key: '__detach',
    value: function __detach() {
      this._a.__removeChild(this);
      this._b.__removeChild(this);
      babelHelpers.get(AnimatedAddition.prototype.__proto__ || Object.getPrototypeOf(AnimatedAddition.prototype), '__detach', this).call(this);
    }
  }, {
    key: '__getNativeConfig',
    value: function __getNativeConfig() {
      return {
        type: 'addition',
        input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
      };
    }
  }]);
  return AnimatedAddition;
}(AnimatedWithChildren);

var AnimatedDivision = function (_AnimatedWithChildren5) {
  babelHelpers.inherits(AnimatedDivision, _AnimatedWithChildren5);

  function AnimatedDivision(a, b) {
    babelHelpers.classCallCheck(this, AnimatedDivision);

    var _this13 = babelHelpers.possibleConstructorReturn(this, (AnimatedDivision.__proto__ || Object.getPrototypeOf(AnimatedDivision)).call(this));

    _this13._a = typeof a === 'number' ? new AnimatedValue(a) : a;
    _this13._b = typeof b === 'number' ? new AnimatedValue(b) : b;
    return _this13;
  }

  babelHelpers.createClass(AnimatedDivision, [{
    key: '__makeNative',
    value: function __makeNative() {
      babelHelpers.get(AnimatedDivision.prototype.__proto__ || Object.getPrototypeOf(AnimatedDivision.prototype), '__makeNative', this).call(this);
      this._a.__makeNative();
      this._b.__makeNative();
    }
  }, {
    key: '__getValue',
    value: function __getValue() {
      var a = this._a.__getValue();
      var b = this._b.__getValue();
      if (b === 0) {
        console.error('Detected division by zero in AnimatedDivision');
      }
      return a / b;
    }
  }, {
    key: 'interpolate',
    value: function interpolate(config) {
      return new AnimatedInterpolation(this, config);
    }
  }, {
    key: '__attach',
    value: function __attach() {
      this._a.__addChild(this);
      this._b.__addChild(this);
    }
  }, {
    key: '__detach',
    value: function __detach() {
      this._a.__removeChild(this);
      this._b.__removeChild(this);
      babelHelpers.get(AnimatedDivision.prototype.__proto__ || Object.getPrototypeOf(AnimatedDivision.prototype), '__detach', this).call(this);
    }
  }, {
    key: '__getNativeConfig',
    value: function __getNativeConfig() {
      return {
        type: 'division',
        input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
      };
    }
  }]);
  return AnimatedDivision;
}(AnimatedWithChildren);

var AnimatedMultiplication = function (_AnimatedWithChildren6) {
  babelHelpers.inherits(AnimatedMultiplication, _AnimatedWithChildren6);

  function AnimatedMultiplication(a, b) {
    babelHelpers.classCallCheck(this, AnimatedMultiplication);

    var _this14 = babelHelpers.possibleConstructorReturn(this, (AnimatedMultiplication.__proto__ || Object.getPrototypeOf(AnimatedMultiplication)).call(this));

    _this14._a = typeof a === 'number' ? new AnimatedValue(a) : a;
    _this14._b = typeof b === 'number' ? new AnimatedValue(b) : b;
    return _this14;
  }

  babelHelpers.createClass(AnimatedMultiplication, [{
    key: '__makeNative',
    value: function __makeNative() {
      babelHelpers.get(AnimatedMultiplication.prototype.__proto__ || Object.getPrototypeOf(AnimatedMultiplication.prototype), '__makeNative', this).call(this);
      this._a.__makeNative();
      this._b.__makeNative();
    }
  }, {
    key: '__getValue',
    value: function __getValue() {
      return this._a.__getValue() * this._b.__getValue();
    }
  }, {
    key: 'interpolate',
    value: function interpolate(config) {
      return new AnimatedInterpolation(this, config);
    }
  }, {
    key: '__attach',
    value: function __attach() {
      this._a.__addChild(this);
      this._b.__addChild(this);
    }
  }, {
    key: '__detach',
    value: function __detach() {
      this._a.__removeChild(this);
      this._b.__removeChild(this);
      babelHelpers.get(AnimatedMultiplication.prototype.__proto__ || Object.getPrototypeOf(AnimatedMultiplication.prototype), '__detach', this).call(this);
    }
  }, {
    key: '__getNativeConfig',
    value: function __getNativeConfig() {
      return {
        type: 'multiplication',
        input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
      };
    }
  }]);
  return AnimatedMultiplication;
}(AnimatedWithChildren);

var AnimatedModulo = function (_AnimatedWithChildren7) {
  babelHelpers.inherits(AnimatedModulo, _AnimatedWithChildren7);

  function AnimatedModulo(a, modulus) {
    babelHelpers.classCallCheck(this, AnimatedModulo);

    var _this15 = babelHelpers.possibleConstructorReturn(this, (AnimatedModulo.__proto__ || Object.getPrototypeOf(AnimatedModulo)).call(this));

    _this15._a = a;
    _this15._modulus = modulus;
    return _this15;
  }

  babelHelpers.createClass(AnimatedModulo, [{
    key: '__makeNative',
    value: function __makeNative() {
      babelHelpers.get(AnimatedModulo.prototype.__proto__ || Object.getPrototypeOf(AnimatedModulo.prototype), '__makeNative', this).call(this);
      this._a.__makeNative();
    }
  }, {
    key: '__getValue',
    value: function __getValue() {
      return (this._a.__getValue() % this._modulus + this._modulus) % this._modulus;
    }
  }, {
    key: 'interpolate',
    value: function interpolate(config) {
      return new AnimatedInterpolation(this, config);
    }
  }, {
    key: '__attach',
    value: function __attach() {
      this._a.__addChild(this);
    }
  }, {
    key: '__detach',
    value: function __detach() {
      this._a.__removeChild(this);
      babelHelpers.get(AnimatedModulo.prototype.__proto__ || Object.getPrototypeOf(AnimatedModulo.prototype), '__detach', this).call(this);
    }
  }, {
    key: '__getNativeConfig',
    value: function __getNativeConfig() {
      return {
        type: 'modulus',
        input: this._a.__getNativeTag(),
        modulus: this._modulus
      };
    }
  }]);
  return AnimatedModulo;
}(AnimatedWithChildren);

var AnimatedDiffClamp = function (_AnimatedWithChildren8) {
  babelHelpers.inherits(AnimatedDiffClamp, _AnimatedWithChildren8);

  function AnimatedDiffClamp(a, min, max) {
    babelHelpers.classCallCheck(this, AnimatedDiffClamp);

    var _this16 = babelHelpers.possibleConstructorReturn(this, (AnimatedDiffClamp.__proto__ || Object.getPrototypeOf(AnimatedDiffClamp)).call(this));

    _this16._a = a;
    _this16._min = min;
    _this16._max = max;
    _this16._value = _this16._lastValue = _this16._a.__getValue();
    return _this16;
  }

  babelHelpers.createClass(AnimatedDiffClamp, [{
    key: '__makeNative',
    value: function __makeNative() {
      babelHelpers.get(AnimatedDiffClamp.prototype.__proto__ || Object.getPrototypeOf(AnimatedDiffClamp.prototype), '__makeNative', this).call(this);
      this._a.__makeNative();
    }
  }, {
    key: 'interpolate',
    value: function interpolate(config) {
      return new AnimatedInterpolation(this, config);
    }
  }, {
    key: '__getValue',
    value: function __getValue() {
      var value = this._a.__getValue();
      var diff = value - this._lastValue;
      this._lastValue = value;
      this._value = Math.min(Math.max(this._value + diff, this._min), this._max);
      return this._value;
    }
  }, {
    key: '__attach',
    value: function __attach() {
      this._a.__addChild(this);
    }
  }, {
    key: '__detach',
    value: function __detach() {
      this._a.__removeChild(this);
      babelHelpers.get(AnimatedDiffClamp.prototype.__proto__ || Object.getPrototypeOf(AnimatedDiffClamp.prototype), '__detach', this).call(this);
    }
  }, {
    key: '__getNativeConfig',
    value: function __getNativeConfig() {
      return {
        type: 'diffclamp',
        input: this._a.__getNativeTag(),
        min: this._min,
        max: this._max
      };
    }
  }]);
  return AnimatedDiffClamp;
}(AnimatedWithChildren);

var AnimatedTransform = function (_AnimatedWithChildren9) {
  babelHelpers.inherits(AnimatedTransform, _AnimatedWithChildren9);

  function AnimatedTransform(transforms) {
    babelHelpers.classCallCheck(this, AnimatedTransform);

    var _this17 = babelHelpers.possibleConstructorReturn(this, (AnimatedTransform.__proto__ || Object.getPrototypeOf(AnimatedTransform)).call(this));

    _this17._transforms = transforms;
    return _this17;
  }

  babelHelpers.createClass(AnimatedTransform, [{
    key: '__makeNative',
    value: function __makeNative() {
      babelHelpers.get(AnimatedTransform.prototype.__proto__ || Object.getPrototypeOf(AnimatedTransform.prototype), '__makeNative', this).call(this);
      this._transforms.forEach(function (transform) {
        for (var key in transform) {
          var value = transform[key];
          if (value instanceof Animated) {
            value.__makeNative();
          }
        }
      });
    }
  }, {
    key: '__getValue',
    value: function __getValue() {
      return this._transforms.map(function (transform) {
        var result = {};
        for (var key in transform) {
          var value = transform[key];
          if (value instanceof Animated) {
            result[key] = value.__getValue();
          } else {
            result[key] = value;
          }
        }
        return result;
      });
    }
  }, {
    key: '__getAnimatedValue',
    value: function __getAnimatedValue() {
      return this._transforms.map(function (transform) {
        var result = {};
        for (var key in transform) {
          var value = transform[key];
          if (value instanceof Animated) {
            result[key] = value.__getAnimatedValue();
          } else {
            result[key] = value;
          }
        }
        return result;
      });
    }
  }, {
    key: '__attach',
    value: function __attach() {
      var _this18 = this;

      this._transforms.forEach(function (transform) {
        for (var key in transform) {
          var value = transform[key];
          if (value instanceof Animated) {
            value.__addChild(_this18);
          }
        }
      });
    }
  }, {
    key: '__detach',
    value: function __detach() {
      var _this19 = this;

      this._transforms.forEach(function (transform) {
        for (var key in transform) {
          var value = transform[key];
          if (value instanceof Animated) {
            value.__removeChild(_this19);
          }
        }
      });
      babelHelpers.get(AnimatedTransform.prototype.__proto__ || Object.getPrototypeOf(AnimatedTransform.prototype), '__detach', this).call(this);
    }
  }, {
    key: '__getNativeConfig',
    value: function __getNativeConfig() {
      var transConfigs = [];

      this._transforms.forEach(function (transform) {
        for (var key in transform) {
          var value = transform[key];
          if (value instanceof Animated) {
            transConfigs.push({
              type: 'animated',
              property: key,
              nodeTag: value.__getNativeTag()
            });
          } else {
            transConfigs.push({
              type: 'static',
              property: key,
              value: value
            });
          }
        }
      });

      NativeAnimatedHelper.validateTransform(transConfigs);
      return {
        type: 'transform',
        transforms: transConfigs
      };
    }
  }]);
  return AnimatedTransform;
}(AnimatedWithChildren);

var AnimatedStyle = function (_AnimatedWithChildren10) {
  babelHelpers.inherits(AnimatedStyle, _AnimatedWithChildren10);

  function AnimatedStyle(style) {
    babelHelpers.classCallCheck(this, AnimatedStyle);

    var _this20 = babelHelpers.possibleConstructorReturn(this, (AnimatedStyle.__proto__ || Object.getPrototypeOf(AnimatedStyle)).call(this));

    style = flattenStyle(style) || {};
    if (style.transform) {
      style = babelHelpers.extends({}, style, {
        transform: new AnimatedTransform(style.transform)
      });
    }
    _this20._style = style;
    return _this20;
  }

  babelHelpers.createClass(AnimatedStyle, [{
    key: '__walkStyleAndGetValues',
    value: function __walkStyleAndGetValues(style) {
      var updatedStyle = {};
      for (var _key in style) {
        var _value = style[_key];
        if (_value instanceof Animated) {
          if (!_value.__isNative) {
            updatedStyle[_key] = _value.__getValue();
          }
        } else if (_value && !Array.isArray(_value) && typeof _value === 'object') {
          updatedStyle[_key] = this.__walkStyleAndGetValues(_value);
        } else {
          updatedStyle[_key] = _value;
        }
      }
      return updatedStyle;
    }
  }, {
    key: '__getValue',
    value: function __getValue() {
      return this.__walkStyleAndGetValues(this._style);
    }
  }, {
    key: '__walkStyleAndGetAnimatedValues',
    value: function __walkStyleAndGetAnimatedValues(style) {
      var updatedStyle = {};
      for (var _key2 in style) {
        var _value2 = style[_key2];
        if (_value2 instanceof Animated) {
          updatedStyle[_key2] = _value2.__getAnimatedValue();
        } else if (_value2 && !Array.isArray(_value2) && typeof _value2 === 'object') {
          updatedStyle[_key2] = this.__walkStyleAndGetAnimatedValues(_value2);
        }
      }
      return updatedStyle;
    }
  }, {
    key: '__getAnimatedValue',
    value: function __getAnimatedValue() {
      return this.__walkStyleAndGetAnimatedValues(this._style);
    }
  }, {
    key: '__attach',
    value: function __attach() {
      for (var key in this._style) {
        var value = this._style[key];
        if (value instanceof Animated) {
          value.__addChild(this);
        }
      }
    }
  }, {
    key: '__detach',
    value: function __detach() {
      for (var key in this._style) {
        var value = this._style[key];
        if (value instanceof Animated) {
          value.__removeChild(this);
        }
      }
      babelHelpers.get(AnimatedStyle.prototype.__proto__ || Object.getPrototypeOf(AnimatedStyle.prototype), '__detach', this).call(this);
    }
  }, {
    key: '__makeNative',
    value: function __makeNative() {
      babelHelpers.get(AnimatedStyle.prototype.__proto__ || Object.getPrototypeOf(AnimatedStyle.prototype), '__makeNative', this).call(this);
      for (var key in this._style) {
        var value = this._style[key];
        if (value instanceof Animated) {
          value.__makeNative();
        }
      }
    }
  }, {
    key: '__getNativeConfig',
    value: function __getNativeConfig() {
      var styleConfig = {};
      for (var styleKey in this._style) {
        if (this._style[styleKey] instanceof Animated) {
          styleConfig[styleKey] = this._style[styleKey].__getNativeTag();
        }
      }
      NativeAnimatedHelper.validateStyles(styleConfig);
      return {
        type: 'style',
        style: styleConfig
      };
    }
  }]);
  return AnimatedStyle;
}(AnimatedWithChildren);

var AnimatedProps = function (_Animated2) {
  babelHelpers.inherits(AnimatedProps, _Animated2);

  function AnimatedProps(props, callback) {
    babelHelpers.classCallCheck(this, AnimatedProps);

    var _this21 = babelHelpers.possibleConstructorReturn(this, (AnimatedProps.__proto__ || Object.getPrototypeOf(AnimatedProps)).call(this));

    if (props.style) {
      props = babelHelpers.extends({}, props, {
        style: new AnimatedStyle(props.style)
      });
    }
    _this21._props = props;
    _this21._callback = callback;
    _this21.__attach();
    return _this21;
  }

  babelHelpers.createClass(AnimatedProps, [{
    key: '__getValue',
    value: function __getValue() {
      var props = {};
      for (var key in this._props) {
        var value = this._props[key];
        if (value instanceof Animated) {
          if (!value.__isNative || value instanceof AnimatedStyle) {
            props[key] = value.__getValue();
          }
        } else if (value instanceof AnimatedEvent) {
          props[key] = value.__getHandler();
        } else {
          props[key] = value;
        }
      }
      return props;
    }
  }, {
    key: '__getAnimatedValue',
    value: function __getAnimatedValue() {
      var props = {};
      for (var key in this._props) {
        var value = this._props[key];
        if (value instanceof Animated) {
          props[key] = value.__getAnimatedValue();
        }
      }
      return props;
    }
  }, {
    key: '__attach',
    value: function __attach() {
      for (var key in this._props) {
        var value = this._props[key];
        if (value instanceof Animated) {
          value.__addChild(this);
        }
      }
    }
  }, {
    key: '__detach',
    value: function __detach() {
      if (this.__isNative && this._animatedView) {
        this.__disconnectAnimatedView();
      }
      for (var key in this._props) {
        var value = this._props[key];
        if (value instanceof Animated) {
          value.__removeChild(this);
        }
      }
      babelHelpers.get(AnimatedProps.prototype.__proto__ || Object.getPrototypeOf(AnimatedProps.prototype), '__detach', this).call(this);
    }
  }, {
    key: 'update',
    value: function update() {
      this._callback();
    }
  }, {
    key: '__makeNative',
    value: function __makeNative() {
      if (!this.__isNative) {
        this.__isNative = true;
        for (var key in this._props) {
          var value = this._props[key];
          if (value instanceof Animated) {
            value.__makeNative();
          }
        }
        if (this._animatedView) {
          this.__connectAnimatedView();
        }
      }
    }
  }, {
    key: 'setNativeView',
    value: function setNativeView(animatedView) {
      if (this._animatedView === animatedView) {
        return;
      }
      this._animatedView = animatedView;
      if (this.__isNative) {
        this.__connectAnimatedView();
      }
    }
  }, {
    key: '__connectAnimatedView',
    value: function __connectAnimatedView() {
      invariant(this.__isNative, 'Expected node to be marked as "native"');
      var nativeViewTag = ReactNative.findNodeHandle(this._animatedView);
      invariant(nativeViewTag != null, 'Unable to locate attached view in the native tree');
      NativeAnimatedAPI.connectAnimatedNodeToView(this.__getNativeTag(), nativeViewTag);
    }
  }, {
    key: '__disconnectAnimatedView',
    value: function __disconnectAnimatedView() {
      invariant(this.__isNative, 'Expected node to be marked as "native"');
      var nativeViewTag = ReactNative.findNodeHandle(this._animatedView);
      invariant(nativeViewTag != null, 'Unable to locate attached view in the native tree');
      NativeAnimatedAPI.disconnectAnimatedNodeFromView(this.__getNativeTag(), nativeViewTag);
    }
  }, {
    key: '__getNativeConfig',
    value: function __getNativeConfig() {
      var propsConfig = {};
      for (var propKey in this._props) {
        var value = this._props[propKey];
        if (value instanceof Animated) {
          propsConfig[propKey] = value.__getNativeTag();
        }
      }
      return {
        type: 'props',
        props: propsConfig
      };
    }
  }]);
  return AnimatedProps;
}(Animated);

function createAnimatedComponent(Component) {
  var AnimatedComponent = function (_React$Component) {
    babelHelpers.inherits(AnimatedComponent, _React$Component);

    function AnimatedComponent(props) {
      babelHelpers.classCallCheck(this, AnimatedComponent);

      var _this22 = babelHelpers.possibleConstructorReturn(this, (AnimatedComponent.__proto__ || Object.getPrototypeOf(AnimatedComponent)).call(this, props));

      _this22._eventDetachers = [];

      _this22._setComponentRef = _this22._setComponentRef.bind(_this22);
      return _this22;
    }

    babelHelpers.createClass(AnimatedComponent, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._propsAnimated && this._propsAnimated.__detach();
        this._detachNativeEvents();
      }
    }, {
      key: 'setNativeProps',
      value: function setNativeProps(props) {
        this._component.setNativeProps(props);
      }
    }, {
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._attachProps(this.props);
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._propsAnimated.setNativeView(this._component);
        this._attachNativeEvents();
      }
    }, {
      key: '_attachNativeEvents',
      value: function _attachNativeEvents() {
        var _this23 = this;

        var scrollableNode = this._component.getScrollableNode ? this._component.getScrollableNode() : this._component;

        var _loop = function _loop(_key3) {
          var prop = _this23.props[_key3];
          if (prop instanceof AnimatedEvent && prop.__isNative) {
            prop.__attach(scrollableNode, _key3);
            _this23._eventDetachers.push(function () {
              return prop.__detach(scrollableNode, _key3);
            });
          }
        };

        for (var _key3 in this.props) {
          _loop(_key3);
        }
      }
    }, {
      key: '_detachNativeEvents',
      value: function _detachNativeEvents() {
        this._eventDetachers.forEach(function (remove) {
          return remove();
        });
        this._eventDetachers = [];
      }
    }, {
      key: '_attachProps',
      value: function _attachProps(nextProps) {
        var _this24 = this;

        var oldPropsAnimated = this._propsAnimated;

        var callback = function callback() {
          if (_this24._component.setNativeProps) {
            if (!_this24._propsAnimated.__isNative) {
              _this24._component.setNativeProps(_this24._propsAnimated.__getAnimatedValue());
            } else {
              throw new Error('Attempting to run JS driven animation on animated ' + 'node that has been moved to "native" earlier by starting an ' + 'animation with `useNativeDriver: true`');
            }
          } else {
            _this24.forceUpdate();
          }
        };

        this._propsAnimated = new AnimatedProps(nextProps, callback);

        oldPropsAnimated && oldPropsAnimated.__detach();
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        this._attachProps(newProps);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this._component !== this._prevComponent) {
          this._propsAnimated.setNativeView(this._component);
        }
        if (this._component !== this._prevComponent || prevProps !== this.props) {
          this._detachNativeEvents();
          this._attachNativeEvents();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return React.createElement(Component, babelHelpers.extends({}, this._propsAnimated.__getValue(), {
          ref: this._setComponentRef,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 1843
          }
        }));
      }
    }, {
      key: '_setComponentRef',
      value: function _setComponentRef(c) {
        this._prevComponent = this._component;
        this._component = c;
      }
    }, {
      key: 'getNode',
      value: function getNode() {
        return this._component;
      }
    }]);
    return AnimatedComponent;
  }(React.Component);

  var propTypes = Component.__propTypesSecretDontUseThesePlease || Component.propTypes;

  AnimatedComponent.propTypes = {
    style: function style(props, propName, componentName) {
      if (!propTypes) {
        return;
      }

      for (var key in ViewStylePropTypes) {
        if (!propTypes[key] && props[key] !== undefined) {
          console.warn('You are setting the style `{ ' + key + ': ... }` as a prop. You ' + 'should nest it in a style object. ' + 'E.g. `{ style: { ' + key + ': ... } }`');
        }
      }
    }
  };

  return AnimatedComponent;
}

var AnimatedTracking = function (_Animated3) {
  babelHelpers.inherits(AnimatedTracking, _Animated3);

  function AnimatedTracking(value, parent, animationClass, animationConfig, callback) {
    babelHelpers.classCallCheck(this, AnimatedTracking);

    var _this25 = babelHelpers.possibleConstructorReturn(this, (AnimatedTracking.__proto__ || Object.getPrototypeOf(AnimatedTracking)).call(this));

    _this25._value = value;
    _this25._parent = parent;
    _this25._animationClass = animationClass;
    _this25._animationConfig = animationConfig;
    _this25._callback = callback;
    _this25.__attach();
    return _this25;
  }

  babelHelpers.createClass(AnimatedTracking, [{
    key: '__getValue',
    value: function __getValue() {
      return this._parent.__getValue();
    }
  }, {
    key: '__attach',
    value: function __attach() {
      this._parent.__addChild(this);
    }
  }, {
    key: '__detach',
    value: function __detach() {
      this._parent.__removeChild(this);
      babelHelpers.get(AnimatedTracking.prototype.__proto__ || Object.getPrototypeOf(AnimatedTracking.prototype), '__detach', this).call(this);
    }
  }, {
    key: 'update',
    value: function update() {
      this._value.animate(new this._animationClass(babelHelpers.extends({}, this._animationConfig, {
        toValue: this._animationConfig.toValue.__getValue()
      })), this._callback);
    }
  }]);
  return AnimatedTracking;
}(Animated);

var add = function add(a, b) {
  return new AnimatedAddition(a, b);
};

var divide = function divide(a, b) {
  return new AnimatedDivision(a, b);
};

var multiply = function multiply(a, b) {
  return new AnimatedMultiplication(a, b);
};

var modulo = function modulo(a, modulus) {
  return new AnimatedModulo(a, modulus);
};

var diffClamp = function diffClamp(a, min, max) {
  return new AnimatedDiffClamp(a, min, max);
};

var _combineCallbacks = function _combineCallbacks(callback, config) {
  if (callback && config.onComplete) {
    return function () {
      config.onComplete && config.onComplete.apply(config, arguments);
      callback && callback.apply(undefined, arguments);
    };
  } else {
    return callback || config.onComplete;
  }
};

var maybeVectorAnim = function maybeVectorAnim(value, config, anim) {
  if (value instanceof AnimatedValueXY) {
    var configX = babelHelpers.extends({}, config);
    var configY = babelHelpers.extends({}, config);
    for (var key in config) {
      var _config$key = config[key],
          x = _config$key.x,
          y = _config$key.y;

      if (x !== undefined && y !== undefined) {
        configX[key] = x;
        configY[key] = y;
      }
    }
    var aX = anim(value.x, configX);
    var aY = anim(value.y, configY);

    return parallel([aX, aY], { stopTogether: false });
  }
  return null;
};

var spring = function spring(value, config) {
  var start = function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();
    if (configuration.toValue instanceof Animated) {
      singleValue.track(new AnimatedTracking(singleValue, configuration.toValue, SpringAnimation, singleConfig, callback));
    } else {
      singleValue.animate(new SpringAnimation(singleConfig), callback);
    }
  };
  return maybeVectorAnim(value, config, spring) || {
    start: function (_start) {
      function start(_x) {
        return _start.apply(this, arguments);
      }

      start.toString = function () {
        return _start.toString();
      };

      return start;
    }(function (callback) {
      start(value, config, callback);
    }),

    stop: function stop() {
      value.stopAnimation();
    },

    reset: function reset() {
      value.resetAnimation();
    },

    _startNativeLoop: function _startNativeLoop(iterations) {
      var singleConfig = babelHelpers.extends({}, config, { iterations: iterations });
      start(value, singleConfig);
    },

    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return config.useNativeDriver || false;
    }
  };
};

var timing = function timing(value, config) {
  var start = function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();
    if (configuration.toValue instanceof Animated) {
      singleValue.track(new AnimatedTracking(singleValue, configuration.toValue, TimingAnimation, singleConfig, callback));
    } else {
      singleValue.animate(new TimingAnimation(singleConfig), callback);
    }
  };

  return maybeVectorAnim(value, config, timing) || {
    start: function (_start2) {
      function start(_x2) {
        return _start2.apply(this, arguments);
      }

      start.toString = function () {
        return _start2.toString();
      };

      return start;
    }(function (callback) {
      start(value, config, callback);
    }),

    stop: function stop() {
      value.stopAnimation();
    },

    reset: function reset() {
      value.resetAnimation();
    },

    _startNativeLoop: function _startNativeLoop(iterations) {
      var singleConfig = babelHelpers.extends({}, config, { iterations: iterations });
      start(value, singleConfig);
    },

    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return config.useNativeDriver || false;
    }
  };
};

var decay = function decay(value, config) {
  var start = function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();
    singleValue.animate(new DecayAnimation(singleConfig), callback);
  };

  return maybeVectorAnim(value, config, decay) || {
    start: function (_start3) {
      function start(_x3) {
        return _start3.apply(this, arguments);
      }

      start.toString = function () {
        return _start3.toString();
      };

      return start;
    }(function (callback) {
      start(value, config, callback);
    }),

    stop: function stop() {
      value.stopAnimation();
    },

    reset: function reset() {
      value.resetAnimation();
    },

    _startNativeLoop: function _startNativeLoop(iterations) {
      var singleConfig = babelHelpers.extends({}, config, { iterations: iterations });
      start(value, singleConfig);
    },

    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return config.useNativeDriver || false;
    }
  };
};

var sequence = function sequence(animations) {
  var current = 0;
  return {
    start: function start(callback) {
      var onComplete = function onComplete(result) {
        if (!result.finished) {
          callback && callback(result);
          return;
        }

        current++;

        if (current === animations.length) {
          callback && callback(result);
          return;
        }

        animations[current].start(onComplete);
      };

      if (animations.length === 0) {
        callback && callback({ finished: true });
      } else {
        animations[current].start(onComplete);
      }
    },

    stop: function stop() {
      if (current < animations.length) {
        animations[current].stop();
      }
    },

    reset: function reset() {
      animations.forEach(function (animation, idx) {
        if (idx <= current) {
          animation.reset();
        }
      });
      current = 0;
    },

    _startNativeLoop: function _startNativeLoop() {
      throw new Error('Loops run using the native driver cannot contain Animated.sequence animations');
    },

    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return false;
    }
  };
};

var parallel = function parallel(animations, config) {
  var doneCount = 0;

  var hasEnded = {};
  var stopTogether = !(config && config.stopTogether === false);

  var result = {
    start: function start(callback) {
      if (doneCount === animations.length) {
        callback && callback({ finished: true });
        return;
      }

      animations.forEach(function (animation, idx) {
        var cb = function cb(endResult) {
          hasEnded[idx] = true;
          doneCount++;
          if (doneCount === animations.length) {
            doneCount = 0;
            callback && callback(endResult);
            return;
          }

          if (!endResult.finished && stopTogether) {
            result.stop();
          }
        };

        if (!animation) {
          cb({ finished: true });
        } else {
          animation.start(cb);
        }
      });
    },

    stop: function stop() {
      animations.forEach(function (animation, idx) {
        !hasEnded[idx] && animation.stop();
        hasEnded[idx] = true;
      });
    },

    reset: function reset() {
      animations.forEach(function (animation, idx) {
        animation.reset();
        hasEnded[idx] = false;
        doneCount = 0;
      });
    },

    _startNativeLoop: function _startNativeLoop() {
      throw new Error('Loops run using the native driver cannot contain Animated.parallel animations');
    },

    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return false;
    }
  };

  return result;
};

var delay = function delay(time) {
  return timing(new AnimatedValue(0), { toValue: 0, delay: time, duration: 0 });
};

var stagger = function stagger(time, animations) {
  return parallel(animations.map(function (animation, i) {
    return sequence([delay(time * i), animation]);
  }));
};

var loop = function loop(animation) {
  var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref3$iterations = _ref3.iterations,
      iterations = _ref3$iterations === undefined ? -1 : _ref3$iterations;

  var isFinished = false;
  var iterationsSoFar = 0;
  return {
    start: function start(callback) {
      var restart = function restart() {
        var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { finished: true };

        if (isFinished || iterationsSoFar === iterations || result.finished === false) {
          callback && callback(result);
        } else {
          iterationsSoFar++;
          animation.reset();
          animation.start(restart);
        }
      };
      if (!animation || iterations === 0) {
        callback && callback({ finished: true });
      } else {
        if (animation._isUsingNativeDriver()) {
          animation._startNativeLoop(iterations);
        } else {
          restart();
        }
      }
    },

    stop: function stop() {
      isFinished = true;
      animation.stop();
    },

    reset: function reset() {
      iterationsSoFar = 0;
      isFinished = false;
      animation.reset();
    },

    _startNativeLoop: function _startNativeLoop() {
      throw new Error('Loops run using the native driver cannot contain Animated.loop animations');
    },

    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return animation._isUsingNativeDriver();
    }
  };
};

function attachNativeEvent(viewRef, eventName, argMapping) {
  var eventMappings = [];

  var traverse = function traverse(value, path) {
    if (value instanceof AnimatedValue) {
      value.__makeNative();

      eventMappings.push({
        nativeEventPath: path,
        animatedValueTag: value.__getNativeTag()
      });
    } else if (typeof value === 'object') {
      for (var _key4 in value) {
        traverse(value[_key4], path.concat(_key4));
      }
    }
  };

  invariant(argMapping[0] && argMapping[0].nativeEvent, 'Native driven events only support animated values contained inside `nativeEvent`.');

  traverse(argMapping[0].nativeEvent, []);

  var viewTag = ReactNative.findNodeHandle(viewRef);

  eventMappings.forEach(function (mapping) {
    NativeAnimatedAPI.addAnimatedEventToView(viewTag, eventName, mapping);
  });

  return {
    detach: function detach() {
      eventMappings.forEach(function (mapping) {
        NativeAnimatedAPI.removeAnimatedEventFromView(viewTag, eventName, mapping.animatedValueTag);
      });
    }
  };
}

function forkEvent(event, listener) {
  if (!event) {
    return listener;
  } else if (event instanceof AnimatedEvent) {
    event.__addListener(listener);
    return event;
  } else {
    return function () {
      typeof event === 'function' && event.apply(undefined, arguments);
      listener.apply(undefined, arguments);
    };
  }
}

function unforkEvent(event, listener) {
  if (event && event instanceof AnimatedEvent) {
    event.__removeListener(listener);
  }
}

var AnimatedEvent = function () {
  function AnimatedEvent(argMapping) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    babelHelpers.classCallCheck(this, AnimatedEvent);
    this._listeners = [];

    this._argMapping = argMapping;
    if (config.listener) {
      this.__addListener(config.listener);
    }
    this._callListeners = this._callListeners.bind(this);
    this._attachedEvent = null;
    this.__isNative = shouldUseNativeDriver(config);

    if (__DEV__) {
      this._validateMapping();
    }
  }

  babelHelpers.createClass(AnimatedEvent, [{
    key: '__addListener',
    value: function __addListener(callback) {
      this._listeners.push(callback);
    }
  }, {
    key: '__removeListener',
    value: function __removeListener(callback) {
      this._listeners = this._listeners.filter(function (listener) {
        return listener !== callback;
      });
    }
  }, {
    key: '__attach',
    value: function __attach(viewRef, eventName) {
      invariant(this.__isNative, 'Only native driven events need to be attached.');

      this._attachedEvent = attachNativeEvent(viewRef, eventName, this._argMapping);
    }
  }, {
    key: '__detach',
    value: function __detach(viewTag, eventName) {
      invariant(this.__isNative, 'Only native driven events need to be detached.');

      this._attachedEvent && this._attachedEvent.detach();
    }
  }, {
    key: '__getHandler',
    value: function __getHandler() {
      var _this26 = this;

      if (this.__isNative) {
        return this._callListeners;
      }

      return function () {
        for (var _len = arguments.length, args = Array(_len), _key5 = 0; _key5 < _len; _key5++) {
          args[_key5] = arguments[_key5];
        }

        var traverse = function traverse(recMapping, recEvt, key) {
          if (typeof recEvt === 'number' && recMapping instanceof AnimatedValue) {
            recMapping.setValue(recEvt);
          } else if (typeof recMapping === 'object') {
            for (var mappingKey in recMapping) {
              traverse(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
            }
          }
        };

        if (!_this26.__isNative) {
          _this26._argMapping.forEach(function (mapping, idx) {
            traverse(mapping, args[idx], 'arg' + idx);
          });
        }
        _this26._callListeners.apply(_this26, args);
      };
    }
  }, {
    key: '_callListeners',
    value: function _callListeners() {
      for (var _len2 = arguments.length, args = Array(_len2), _key6 = 0; _key6 < _len2; _key6++) {
        args[_key6] = arguments[_key6];
      }

      this._listeners.forEach(function (listener) {
        return listener.apply(undefined, args);
      });
    }
  }, {
    key: '_validateMapping',
    value: function _validateMapping() {
      var traverse = function traverse(recMapping, recEvt, key) {
        if (typeof recEvt === 'number') {
          invariant(recMapping instanceof AnimatedValue, 'Bad mapping of type ' + typeof recMapping + ' for key ' + key + ', event value must map to AnimatedValue');
          return;
        }
        invariant(typeof recMapping === 'object', 'Bad mapping of type ' + typeof recMapping + ' for key ' + key);
        invariant(typeof recEvt === 'object', 'Bad event of type ' + typeof recEvt + ' for key ' + key);
        for (var mappingKey in recMapping) {
          traverse(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
        }
      };
    }
  }]);
  return AnimatedEvent;
}();

var event = function event(argMapping, config) {
  var animatedEvent = new AnimatedEvent(argMapping, config);
  if (animatedEvent.__isNative) {
    return animatedEvent;
  } else {
    return animatedEvent.__getHandler();
  }
};

module.exports = {
  Value: AnimatedValue,

  ValueXY: AnimatedValueXY,

  Interpolation: AnimatedInterpolation,

  decay: decay,

  timing: timing,

  spring: spring,

  add: add,

  divide: divide,

  multiply: multiply,

  modulo: modulo,

  diffClamp: diffClamp,

  delay: delay,

  sequence: sequence,

  parallel: parallel,

  stagger: stagger,

  loop: loop,

  event: event,

  createAnimatedComponent: createAnimatedComponent,

  attachNativeEvent: attachNativeEvent,

  forkEvent: forkEvent,
  unforkEvent: unforkEvent,

  __PropsOnlyForTests: AnimatedProps
};