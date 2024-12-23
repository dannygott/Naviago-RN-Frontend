
'use strict';

var _class,
    _temp,
    _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/react-native/Libraries/Modal/Modal.js',
    _container;

var AppContainer = require('AppContainer');
var I18nManager = require('I18nManager');
var Platform = require('Platform');
var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');

var deprecatedPropType = require('deprecatedPropType');
var requireNativeComponent = require('requireNativeComponent');
var RCTModalHostView = requireNativeComponent('RCTModalHostView', null);

var PropTypes = React.PropTypes;

var Modal = (_temp = _class = function (_React$Component) {
  babelHelpers.inherits(Modal, _React$Component);

  function Modal() {
    babelHelpers.classCallCheck(this, Modal);
    return babelHelpers.possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  babelHelpers.createClass(Modal, [{
    key: 'render',
    value: function render() {
      if (this.props.visible === false) {
        return null;
      }

      var containerStyles = {
        backgroundColor: this.props.transparent ? 'transparent' : 'white'
      };

      var animationType = this.props.animationType;
      if (!animationType) {
        animationType = 'none';
        if (this.props.animated) {
          animationType = 'slide';
        }
      }

      var innerChildren = __DEV__ ? React.createElement(
        AppContainer,
        { rootTag: this.context.rootTag, __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          }
        },
        this.props.children
      ) : this.props.children;

      return React.createElement(
        RCTModalHostView,
        {
          animationType: animationType,
          transparent: this.props.transparent,
          hardwareAccelerated: this.props.hardwareAccelerated,
          onRequestClose: this.props.onRequestClose,
          onShow: this.props.onShow,
          style: styles.modal,
          onStartShouldSetResponder: this._shouldSetResponder,
          supportedOrientations: this.props.supportedOrientations,
          onOrientationChange: this.props.onOrientationChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 168
          }
        },
        React.createElement(
          View,
          { style: [styles.container, containerStyles], __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            }
          },
          innerChildren
        )
      );
    }
  }, {
    key: '_shouldSetResponder',
    value: function _shouldSetResponder() {
      return true;
    }
  }]);
  return Modal;
}(React.Component), _class.propTypes = {
  animationType: PropTypes.oneOf(['none', 'slide', 'fade']),

  transparent: PropTypes.bool,

  hardwareAccelerated: PropTypes.bool,

  visible: PropTypes.bool,

  onRequestClose: Platform.OS === 'android' ? PropTypes.func.isRequired : PropTypes.func,

  onShow: PropTypes.func,
  animated: deprecatedPropType(PropTypes.bool, 'Use the `animationType` prop instead.'),

  supportedOrientations: PropTypes.arrayOf(PropTypes.oneOf(['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right'])),

  onOrientationChange: PropTypes.func
}, _class.defaultProps = {
  visible: true,
  hardwareAccelerated: false
}, _class.contextTypes = {
  rootTag: React.PropTypes.number
}, _temp);


var side = I18nManager.isRTL ? 'right' : 'left';
var styles = StyleSheet.create({
  modal: {
    position: 'absolute'
  },
  container: (_container = {
    position: 'absolute'
  }, babelHelpers.defineProperty(_container, side, 0), babelHelpers.defineProperty(_container, 'top', 0), _container)
});

module.exports = Modal;