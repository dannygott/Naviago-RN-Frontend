
'use strict';

var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native/Libraries/Components/TextInput/TextInput.js';
var ColorPropType = require('ColorPropType');
var DocumentSelectionState = require('DocumentSelectionState');
var EventEmitter = require('EventEmitter');
var NativeMethodsMixin = require('NativeMethodsMixin');
var Platform = require('Platform');
var React = require('React');
var ReactNative = require('ReactNative');
var StyleSheet = require('StyleSheet');
var Text = require('Text');
var TextInputState = require('TextInputState');
var TimerMixin = require('react-timer-mixin');
var TouchableWithoutFeedback = require('TouchableWithoutFeedback');
var UIManager = require('UIManager');
var ViewPropTypes = require('ViewPropTypes');

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var requireNativeComponent = require('requireNativeComponent');
var warning = require('fbjs/lib/warning');

var PropTypes = React.PropTypes;

var onlyMultiline = {
  onTextInput: true,
  children: true
};

if (Platform.OS === 'android') {
  var AndroidTextInput = requireNativeComponent('AndroidTextInput', null);
} else if (Platform.OS === 'ios') {
  var RCTTextView = requireNativeComponent('RCTTextView', null);
  var RCTTextField = requireNativeComponent('RCTTextField', null);
}

var DataDetectorTypes = ['phoneNumber', 'link', 'address', 'calendarEvent', 'none', 'all'];

var TextInput = React.createClass({
  displayName: 'TextInput',

  statics: {
    State: TextInputState
  },

  propTypes: babelHelpers.extends({}, ViewPropTypes, {
    autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),

    autoCorrect: PropTypes.bool,

    spellCheck: PropTypes.bool,

    autoFocus: PropTypes.bool,

    editable: PropTypes.bool,

    keyboardType: PropTypes.oneOf(['default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search']),

    keyboardAppearance: PropTypes.oneOf(['default', 'light', 'dark']),

    returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send', 'none', 'previous', 'default', 'emergency-call', 'google', 'join', 'route', 'yahoo']),

    returnKeyLabel: PropTypes.string,

    maxLength: PropTypes.number,

    numberOfLines: PropTypes.number,

    disableFullscreenUI: PropTypes.bool,

    enablesReturnKeyAutomatically: PropTypes.bool,

    multiline: PropTypes.bool,

    textBreakStrategy: React.PropTypes.oneOf(['simple', 'highQuality', 'balanced']),

    onBlur: PropTypes.func,

    onFocus: PropTypes.func,

    onChange: PropTypes.func,

    onChangeText: PropTypes.func,

    onContentSizeChange: PropTypes.func,

    onEndEditing: PropTypes.func,

    onSelectionChange: PropTypes.func,

    onSubmitEditing: PropTypes.func,

    onKeyPress: PropTypes.func,

    onLayout: PropTypes.func,

    onScroll: PropTypes.func,

    placeholder: PropTypes.node,

    placeholderTextColor: ColorPropType,

    secureTextEntry: PropTypes.bool,

    selectionColor: ColorPropType,

    selectionState: PropTypes.instanceOf(DocumentSelectionState),

    selection: PropTypes.shape({
      start: PropTypes.number.isRequired,
      end: PropTypes.number
    }),

    value: PropTypes.string,

    defaultValue: PropTypes.string,

    clearButtonMode: PropTypes.oneOf(['never', 'while-editing', 'unless-editing', 'always']),

    clearTextOnFocus: PropTypes.bool,

    selectTextOnFocus: PropTypes.bool,

    blurOnSubmit: PropTypes.bool,

    style: Text.propTypes.style,

    underlineColorAndroid: ColorPropType,

    inlineImageLeft: PropTypes.string,

    inlineImagePadding: PropTypes.number,

    dataDetectorTypes: PropTypes.oneOfType([PropTypes.oneOf(DataDetectorTypes), PropTypes.arrayOf(PropTypes.oneOf(DataDetectorTypes))]),

    caretHidden: PropTypes.bool
  }),

  mixins: [NativeMethodsMixin, TimerMixin],

  isFocused: function isFocused() {
    return TextInputState.currentlyFocusedField() === ReactNative.findNodeHandle(this._inputRef);
  },

  contextTypes: {
    onFocusRequested: React.PropTypes.func,
    focusEmitter: React.PropTypes.instanceOf(EventEmitter)
  },

  _inputRef: undefined,
  _focusSubscription: undefined,
  _lastNativeText: undefined,
  _lastNativeSelection: undefined,

  componentDidMount: function componentDidMount() {
    var _this = this;

    this._lastNativeText = this.props.value;
    if (!this.context.focusEmitter) {
      if (this.props.autoFocus) {
        this.requestAnimationFrame(this.focus);
      }
      return;
    }
    this._focusSubscription = this.context.focusEmitter.addListener('focus', function (el) {
      if (_this === el) {
        _this.requestAnimationFrame(_this.focus);
      } else if (_this.isFocused()) {
        _this.blur();
      }
    });
    if (this.props.autoFocus) {
      this.context.onFocusRequested(this);
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this._focusSubscription && this._focusSubscription.remove();
    if (this.isFocused()) {
      this.blur();
    }
  },

  getChildContext: function getChildContext() {
    return { isInAParentText: true };
  },

  childContextTypes: {
    isInAParentText: React.PropTypes.bool
  },

  clear: function clear() {
    this.setNativeProps({ text: '' });
  },

  render: function render() {
    if (Platform.OS === 'ios') {
      return this._renderIOS();
    } else if (Platform.OS === 'android') {
      return this._renderAndroid();
    }
  },

  _getText: function _getText() {
    return typeof this.props.value === 'string' ? this.props.value : typeof this.props.defaultValue === 'string' ? this.props.defaultValue : '';
  },

  _setNativeRef: function _setNativeRef(ref) {
    this._inputRef = ref;
  },

  _renderIOS: function _renderIOS() {
    var textContainer;

    var props = babelHelpers.extends({}, this.props);
    props.style = [styles.input, this.props.style];

    if (props.selection && props.selection.end == null) {
      props.selection = { start: props.selection.start, end: props.selection.start };
    }

    if (!props.multiline) {
      if (__DEV__) {
        for (var propKey in onlyMultiline) {
          if (props[propKey]) {
            var error = new Error('TextInput prop `' + propKey + '` is only supported with multiline.');
            warning(false, '%s', error.stack);
          }
        }
      }
      textContainer = React.createElement(RCTTextField, babelHelpers.extends({
        ref: this._setNativeRef
      }, props, {
        onFocus: this._onFocus,
        onBlur: this._onBlur,
        onChange: this._onChange,
        onSelectionChange: this._onSelectionChange,
        onSelectionChangeShouldSetResponder: emptyFunction.thatReturnsTrue,
        text: this._getText(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 650
        }
      }));
    } else {
      var children = props.children;
      var childCount = 0;
      React.Children.forEach(children, function () {
        return ++childCount;
      });
      invariant(!(props.value && childCount), 'Cannot specify both value and children.');
      if (childCount >= 1) {
        children = React.createElement(
          Text,
          { style: props.style, __source: {
              fileName: _jsxFileName,
              lineNumber: 669
            }
          },
          children
        );
      }
      if (props.inputView) {
        children = [children, props.inputView];
      }
      props.style.unshift(styles.multilineInput);
      textContainer = React.createElement(RCTTextView, babelHelpers.extends({
        ref: this._setNativeRef
      }, props, {
        children: children,
        onFocus: this._onFocus,
        onBlur: this._onBlur,
        onChange: this._onChange,
        onContentSizeChange: this.props.onContentSizeChange,
        onSelectionChange: this._onSelectionChange,
        onTextInput: this._onTextInput,
        onSelectionChangeShouldSetResponder: emptyFunction.thatReturnsTrue,
        text: this._getText(),
        dataDetectorTypes: this.props.dataDetectorTypes,
        onScroll: this._onScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 676
        }
      }));
    }

    return React.createElement(
      TouchableWithoutFeedback,
      {
        onLayout: props.onLayout,
        onPress: this._onPress,
        rejectResponderTermination: true,
        accessible: props.accessible,
        accessibilityLabel: props.accessibilityLabel,
        accessibilityTraits: props.accessibilityTraits,
        testID: props.testID, __source: {
          fileName: _jsxFileName,
          lineNumber: 694
        }
      },
      textContainer
    );
  },

  _renderAndroid: function _renderAndroid() {
    var props = babelHelpers.extends({}, this.props);
    props.style = [this.props.style];
    props.autoCapitalize = UIManager.AndroidTextInput.Constants.AutoCapitalizationType[this.props.autoCapitalize];
    var children = this.props.children;
    var childCount = 0;
    React.Children.forEach(children, function () {
      return ++childCount;
    });
    invariant(!(this.props.value && childCount), 'Cannot specify both value and children.');
    if (childCount > 1) {
      children = React.createElement(
        Text,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 720
          }
        },
        children
      );
    }

    if (props.selection && props.selection.end == null) {
      props.selection = { start: props.selection.start, end: props.selection.start };
    }

    var textContainer = React.createElement(AndroidTextInput, babelHelpers.extends({
      ref: this._setNativeRef
    }, props, {
      mostRecentEventCount: 0,
      onFocus: this._onFocus,
      onBlur: this._onBlur,
      onChange: this._onChange,
      onSelectionChange: this._onSelectionChange,
      onTextInput: this._onTextInput,
      text: this._getText(),
      children: children,
      disableFullscreenUI: this.props.disableFullscreenUI,
      textBreakStrategy: this.props.textBreakStrategy,
      onScroll: this._onScroll,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728
      }
    }));

    return React.createElement(
      TouchableWithoutFeedback,
      {
        onLayout: this.props.onLayout,
        onPress: this._onPress,
        accessible: this.props.accessible,
        accessibilityLabel: this.props.accessibilityLabel,
        accessibilityComponentType: this.props.accessibilityComponentType,
        testID: this.props.testID, __source: {
          fileName: _jsxFileName,
          lineNumber: 745
        }
      },
      textContainer
    );
  },

  _onFocus: function _onFocus(event) {
    if (this.props.onFocus) {
      this.props.onFocus(event);
    }

    if (this.props.selectionState) {
      this.props.selectionState.focus();
    }
  },

  _onPress: function _onPress(event) {
    if (this.props.editable || this.props.editable === undefined) {
      this.focus();
    }
  },

  _onChange: function _onChange(event) {
    if (this._inputRef) {
      this._inputRef.setNativeProps({
        mostRecentEventCount: event.nativeEvent.eventCount
      });
    }

    var text = event.nativeEvent.text;
    this.props.onChange && this.props.onChange(event);
    this.props.onChangeText && this.props.onChangeText(text);

    if (!this._inputRef) {
      return;
    }

    this._lastNativeText = text;
    this.forceUpdate();
  },

  _onSelectionChange: function _onSelectionChange(event) {
    this.props.onSelectionChange && this.props.onSelectionChange(event);

    if (!this._inputRef) {
      return;
    }

    this._lastNativeSelection = event.nativeEvent.selection;

    if (this.props.selection || this.props.selectionState) {
      this.forceUpdate();
    }
  },

  componentDidUpdate: function componentDidUpdate() {
    var nativeProps = {};

    if (this._lastNativeText !== this.props.value && typeof this.props.value === 'string') {
      nativeProps.text = this.props.value;
    }

    var selection = this.props.selection;

    if (this._lastNativeSelection && selection && (this._lastNativeSelection.start !== selection.start || this._lastNativeSelection.end !== selection.end)) {
      nativeProps.selection = this.props.selection;
    }

    if (Object.keys(nativeProps).length > 0 && this._inputRef) {
      this._inputRef.setNativeProps(nativeProps);
    }

    if (this.props.selectionState && selection) {
      this.props.selectionState.update(selection.start, selection.end);
    }
  },

  _onBlur: function _onBlur(event) {
    this.blur();
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

    if (this.props.selectionState) {
      this.props.selectionState.blur();
    }
  },

  _onTextInput: function _onTextInput(event) {
    this.props.onTextInput && this.props.onTextInput(event);
  },

  _onScroll: function _onScroll(event) {
    this.props.onScroll && this.props.onScroll(event);
  }
});

var styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch'
  },
  multilineInput: {
    paddingTop: 5
  }
});

module.exports = TextInput;