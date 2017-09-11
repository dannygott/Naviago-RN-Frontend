
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native/Libraries/Components/View/View.js';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native/Libraries/Components/View/View.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var NativeMethodsMixin = require('NativeMethodsMixin');
var NativeModules = require('NativeModules');
var Platform = require('Platform');
var React = require('React');
var ReactNativeFeatureFlags = require('ReactNativeFeatureFlags');
var ReactNativeStyleAttributes = require('ReactNativeStyleAttributes');
var ReactNativeViewAttributes = require('ReactNativeViewAttributes');
var ViewPropTypes = require('ViewPropTypes');

var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');

var _require = require('ViewAccessibility'),
    AccessibilityComponentTypes = _require.AccessibilityComponentTypes,
    AccessibilityTraits = _require.AccessibilityTraits;

var requireNativeComponent = require('requireNativeComponent');

var forceTouchAvailable = NativeModules.PlatformConstants && NativeModules.PlatformConstants.forceTouchAvailable || false;

var View = _wrapComponent('_component')(React.createClass({
  displayName: 'View',

  mixins: [NativeMethodsMixin],

  propTypes: ViewPropTypes,

  statics: {
    __propTypesSecretDontUseThesePlease: ViewPropTypes
  },

  viewConfig: {
    uiViewClassName: 'RCTView',
    validAttributes: ReactNativeViewAttributes.RCTView
  },

  contextTypes: {
    isInAParentText: React.PropTypes.bool
  },

  render: function render() {
    invariant(!(this.context.isInAParentText && Platform.OS === 'android'), 'Nesting of <View> within <Text> is not supported on Android.');

    return React.createElement(RCTView, _extends({}, this.props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      }
    }));
  }
}));

function mixinStatics(target) {
  var warnedAboutAccessibilityTraits = false;
  var warnedAboutAccessibilityComponentType = false;
  var warnedAboutForceTouchAvailable = false;
  var warnedAboutPropTypes = false;

  Object.defineProperty(target, 'AccessibilityTraits', {
    get: function get() {
      warning(warnedAboutAccessibilityTraits, 'View.AccessibilityTraits has been deprecated and will be ' + 'removed in a future version of ReactNative. Use ' + 'ViewAccessibility.AccessibilityTraits instead.');
      warnedAboutAccessibilityTraits = true;
      return AccessibilityTraits;
    }
  });

  Object.defineProperty(target, 'AccessibilityComponentType', {
    get: function get() {
      warning(warnedAboutAccessibilityComponentType, 'View.AccessibilityComponentType has been deprecated and will be ' + 'removed in a future version of ReactNative. Use ' + 'ViewAccessibility.AccessibilityComponentTypes instead.');
      warnedAboutAccessibilityComponentType = true;
      return AccessibilityComponentTypes;
    }
  });

  Object.defineProperty(target, 'forceTouchAvailable', {
    get: function get() {
      warning(warnedAboutForceTouchAvailable, 'View.forceTouchAvailable has been deprecated and will be removed ' + 'in a future version of ReactNative. Use ' + 'NativeModules.PlatformConstants.forceTouchAvailable instead.');
      warnedAboutForceTouchAvailable = true;
      return forceTouchAvailable;
    }
  });

  Object.defineProperty(target, 'propTypes', {
    get: function get() {
      warning(warnedAboutPropTypes, 'View.propTypes has been deprecated and will be removed in a future ' + 'version of ReactNative. Use ViewPropTypes instead.');
      warnedAboutPropTypes = true;
      return ViewPropTypes;
    }
  });
}

var RCTView = requireNativeComponent('RCTView', View, {
  nativeOnly: {
    nativeBackgroundAndroid: true,
    nativeForegroundAndroid: true
  }
});

if (__DEV__) {
  var UIManager = require('UIManager');
  var viewConfig = UIManager.viewConfigs && UIManager.viewConfigs.RCTView || {};
  for (var prop in viewConfig.nativeProps) {
    var viewAny = View;
    if (!viewAny.propTypes[prop] && !ReactNativeStyleAttributes[prop]) {
      throw new Error('View is missing propType for native prop `' + prop + '`');
    }
  }
}

var ViewToExport = RCTView;
if (__DEV__ || ReactNativeFeatureFlags.useFiber) {
  mixinStatics(View);
  ViewToExport = View;
} else {
  mixinStatics(RCTView);
}

module.exports = ViewToExport;