
'use strict';

var _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/react-native/Libraries/Components/Touchable/TouchableHighlight.js';


var ColorPropType = require('ColorPropType');
var NativeMethodsMixin = require('NativeMethodsMixin');
var React = require('React');
var ReactNativeViewAttributes = require('ReactNativeViewAttributes');
var StyleSheet = require('StyleSheet');
var TimerMixin = require('react-timer-mixin');
var Touchable = require('Touchable');
var TouchableWithoutFeedback = require('TouchableWithoutFeedback');
var View = require('View');

var ViewPropTypes = require('ViewPropTypes');

var ensureComponentIsNative = require('ensureComponentIsNative');
var ensurePositiveDelayProps = require('ensurePositiveDelayProps');
var keyOf = require('fbjs/lib/keyOf');
var merge = require('merge');

var DEFAULT_PROPS = {
  activeOpacity: 0.85,
  underlayColor: 'black'
};

var PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

var TouchableHighlight = React.createClass({
  displayName: 'TouchableHighlight',

  propTypes: babelHelpers.extends({}, TouchableWithoutFeedback.propTypes, {
    activeOpacity: React.PropTypes.number,

    underlayColor: ColorPropType,
    style: ViewPropTypes.style,

    onShowUnderlay: React.PropTypes.func,

    onHideUnderlay: React.PropTypes.func,

    hasTVPreferredFocus: React.PropTypes.bool,

    tvParallaxProperties: React.PropTypes.object

  }),

  mixins: [NativeMethodsMixin, TimerMixin, Touchable.Mixin],

  getDefaultProps: function getDefaultProps() {
    return DEFAULT_PROPS;
  },

  _computeSyntheticState: function _computeSyntheticState(props) {
    return {
      activeProps: {
        style: {
          opacity: props.activeOpacity
        }
      },
      activeUnderlayProps: {
        style: {
          backgroundColor: props.underlayColor
        }
      },
      underlayStyle: [INACTIVE_UNDERLAY_PROPS.style, props.style],
      hasTVPreferredFocus: props.hasTVPreferredFocus
    };
  },

  getInitialState: function getInitialState() {
    return merge(this.touchableGetInitialState(), this._computeSyntheticState(this.props));
  },

  componentDidMount: function componentDidMount() {
    ensurePositiveDelayProps(this.props);
    ensureComponentIsNative(this.refs[CHILD_REF]);
  },

  componentDidUpdate: function componentDidUpdate() {
    ensureComponentIsNative(this.refs[CHILD_REF]);
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    ensurePositiveDelayProps(nextProps);
    if (nextProps.activeOpacity !== this.props.activeOpacity || nextProps.underlayColor !== this.props.underlayColor || nextProps.style !== this.props.style) {
      this.setState(this._computeSyntheticState(nextProps));
    }
  },

  viewConfig: {
    uiViewClassName: 'RCTView',
    validAttributes: ReactNativeViewAttributes.RCTView
  },

  touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
    this.clearTimeout(this._hideTimeout);
    this._hideTimeout = null;
    this._showUnderlay();
    this.props.onPressIn && this.props.onPressIn(e);
  },

  touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
    if (!this._hideTimeout) {
      this._hideUnderlay();
    }
    this.props.onPressOut && this.props.onPressOut(e);
  },

  touchableHandlePress: function touchableHandlePress(e) {
    this.clearTimeout(this._hideTimeout);
    this._showUnderlay();
    this._hideTimeout = this.setTimeout(this._hideUnderlay, this.props.delayPressOut || 100);
    this.props.onPress && this.props.onPress(e);
  },

  touchableHandleLongPress: function touchableHandleLongPress(e) {
    this.props.onLongPress && this.props.onLongPress(e);
  },

  touchableGetPressRectOffset: function touchableGetPressRectOffset() {
    return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
  },

  touchableGetHitSlop: function touchableGetHitSlop() {
    return this.props.hitSlop;
  },

  touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
    return this.props.delayPressIn;
  },

  touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
    return this.props.delayLongPress;
  },

  touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
    return this.props.delayPressOut;
  },

  _showUnderlay: function _showUnderlay() {
    if (!this.isMounted() || !this._hasPressHandler()) {
      return;
    }

    this.refs[UNDERLAY_REF].setNativeProps(this.state.activeUnderlayProps);
    this.refs[CHILD_REF].setNativeProps(this.state.activeProps);
    this.props.onShowUnderlay && this.props.onShowUnderlay();
  },

  _hideUnderlay: function _hideUnderlay() {
    this.clearTimeout(this._hideTimeout);
    this._hideTimeout = null;
    if (this._hasPressHandler() && this.refs[UNDERLAY_REF]) {
      this.refs[CHILD_REF].setNativeProps(INACTIVE_CHILD_PROPS);
      this.refs[UNDERLAY_REF].setNativeProps(babelHelpers.extends({}, INACTIVE_UNDERLAY_PROPS, {
        style: this.state.underlayStyle
      }));
      this.props.onHideUnderlay && this.props.onHideUnderlay();
    }
  },

  _hasPressHandler: function _hasPressHandler() {
    return !!(this.props.onPress || this.props.onPressIn || this.props.onPressOut || this.props.onLongPress);
  },

  render: function render() {
    return React.createElement(
      View,
      {
        accessible: this.props.accessible !== false,
        accessibilityLabel: this.props.accessibilityLabel,
        accessibilityComponentType: this.props.accessibilityComponentType,
        accessibilityTraits: this.props.accessibilityTraits,
        ref: UNDERLAY_REF,
        style: this.state.underlayStyle,
        onLayout: this.props.onLayout,
        hitSlop: this.props.hitSlop,
        isTVSelectable: true,
        tvParallaxProperties: this.props.tvParallaxProperties,
        hasTVPreferredFocus: this.state.hasTVPreferredFocus,
        onStartShouldSetResponder: this.touchableHandleStartShouldSetResponder,
        onResponderTerminationRequest: this.touchableHandleResponderTerminationRequest,
        onResponderGrant: this.touchableHandleResponderGrant,
        onResponderMove: this.touchableHandleResponderMove,
        onResponderRelease: this.touchableHandleResponderRelease,
        onResponderTerminate: this.touchableHandleResponderTerminate,
        testID: this.props.testID, __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      },
      React.cloneElement(React.Children.only(this.props.children), {
        ref: CHILD_REF
      }),
      Touchable.renderDebugView({ color: 'green', hitSlop: this.props.hitSlop })
    );
  }
});

var CHILD_REF = keyOf({ childRef: null });
var UNDERLAY_REF = keyOf({ underlayRef: null });
var INACTIVE_CHILD_PROPS = {
  style: StyleSheet.create({ x: { opacity: 1.0 } }).x
};
var INACTIVE_UNDERLAY_PROPS = {
  style: StyleSheet.create({ x: { backgroundColor: 'transparent' } }).x
};

module.exports = TouchableHighlight;