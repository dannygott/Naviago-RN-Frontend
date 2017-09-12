
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native/Libraries/Components/WebView/WebView.android.js',
    _class,
    _temp2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  WebView: {
    displayName: 'WebView'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native/Libraries/Components/WebView/WebView.android.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var EdgeInsetsPropType = require('EdgeInsetsPropType');
var ActivityIndicator = require('ActivityIndicator');
var React = require('React');
var ReactNative = require('ReactNative');
var StyleSheet = require('StyleSheet');
var UIManager = require('UIManager');
var View = require('View');

var ViewPropTypes = require('ViewPropTypes');

var deprecatedPropType = require('deprecatedPropType');
var keyMirror = require('fbjs/lib/keyMirror');
var requireNativeComponent = require('requireNativeComponent');
var resolveAssetSource = require('resolveAssetSource');

var PropTypes = React.PropTypes;

var RCT_WEBVIEW_REF = 'webview';

var WebViewState = keyMirror({
  IDLE: null,
  LOADING: null,
  ERROR: null
});

var defaultRenderLoading = function defaultRenderLoading() {
  return React.createElement(
    View,
    { style: styles.loadingView, __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      }
    },
    React.createElement(ActivityIndicator, {
      style: styles.loadingProgressBar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    })
  );
};

var WebView = _wrapComponent('WebView')((_temp2 = _class = function (_React$Component) {
  _inherits(WebView, _React$Component);

  function WebView() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WebView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WebView.__proto__ || Object.getPrototypeOf(WebView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      viewState: WebViewState.IDLE,
      lastErrorEvent: null,
      startInLoadingState: true
    }, _this.goForward = function () {
      UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.goForward, null);
    }, _this.goBack = function () {
      UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.goBack, null);
    }, _this.reload = function () {
      UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.reload, null);
    }, _this.stopLoading = function () {
      UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.stopLoading, null);
    }, _this.postMessage = function (data) {
      UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.postMessage, [String(data)]);
    }, _this.injectJavaScript = function (data) {
      UIManager.dispatchViewManagerCommand(_this.getWebViewHandle(), UIManager.RCTWebView.Commands.injectJavaScript, [data]);
    }, _this.updateNavigationState = function (event) {
      if (_this.props.onNavigationStateChange) {
        _this.props.onNavigationStateChange(event.nativeEvent);
      }
    }, _this.getWebViewHandle = function () {
      return ReactNative.findNodeHandle(_this.refs[RCT_WEBVIEW_REF]);
    }, _this.onLoadingStart = function (event) {
      var onLoadStart = _this.props.onLoadStart;
      onLoadStart && onLoadStart(event);
      _this.updateNavigationState(event);
    }, _this.onLoadingError = function (event) {
      event.persist();var _this$props = _this.props,
          onError = _this$props.onError,
          onLoadEnd = _this$props.onLoadEnd;

      onError && onError(event);
      onLoadEnd && onLoadEnd(event);
      console.warn('Encountered an error loading page', event.nativeEvent);

      _this.setState({
        lastErrorEvent: event.nativeEvent,
        viewState: WebViewState.ERROR
      });
    }, _this.onLoadingFinish = function (event) {
      var _this$props2 = _this.props,
          onLoad = _this$props2.onLoad,
          onLoadEnd = _this$props2.onLoadEnd;

      onLoad && onLoad(event);
      onLoadEnd && onLoadEnd(event);
      _this.setState({
        viewState: WebViewState.IDLE
      });
      _this.updateNavigationState(event);
    }, _this.onMessage = function (event) {
      var onMessage = _this.props.onMessage;

      onMessage && onMessage(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WebView, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.startInLoadingState) {
        this.setState({ viewState: WebViewState.LOADING });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var otherView = null;

      if (this.state.viewState === WebViewState.LOADING) {
        otherView = (this.props.renderLoading || defaultRenderLoading)();
      } else if (this.state.viewState === WebViewState.ERROR) {
        var errorEvent = this.state.lastErrorEvent;
        otherView = this.props.renderError && this.props.renderError(errorEvent.domain, errorEvent.code, errorEvent.description);
      } else if (this.state.viewState !== WebViewState.IDLE) {
        console.error('RCTWebView invalid state encountered: ' + this.state.loading);
      }

      var webViewStyles = [styles.container, this.props.style];
      if (this.state.viewState === WebViewState.LOADING || this.state.viewState === WebViewState.ERROR) {
        webViewStyles.push(styles.hidden);
      }

      var source = this.props.source || {};
      if (this.props.html) {
        source.html = this.props.html;
      } else if (this.props.url) {
        source.uri = this.props.url;
      }

      if (source.method === 'POST' && source.headers) {
        console.warn('WebView: `source.headers` is not supported when using POST.');
      } else if (source.method === 'GET' && source.body) {
        console.warn('WebView: `source.body` is not supported when using GET.');
      }

      var webView = React.createElement(RCTWebView, {
        ref: RCT_WEBVIEW_REF,
        key: 'webViewKey',
        style: webViewStyles,
        source: resolveAssetSource(source),
        scalesPageToFit: this.props.scalesPageToFit,
        injectedJavaScript: this.props.injectedJavaScript,
        userAgent: this.props.userAgent,
        javaScriptEnabled: this.props.javaScriptEnabled,
        domStorageEnabled: this.props.domStorageEnabled,
        messagingEnabled: typeof this.props.onMessage === 'function',
        onMessage: this.onMessage,
        contentInset: this.props.contentInset,
        automaticallyAdjustContentInsets: this.props.automaticallyAdjustContentInsets,
        onContentSizeChange: this.props.onContentSizeChange,
        onLoadingStart: this.onLoadingStart,
        onLoadingFinish: this.onLoadingFinish,
        onLoadingError: this.onLoadingError,
        testID: this.props.testID,
        mediaPlaybackRequiresUserAction: this.props.mediaPlaybackRequiresUserAction,
        allowUniversalAccessFromFileURLs: this.props.allowUniversalAccessFromFileURLs,
        mixedContentMode: this.props.mixedContentMode,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      });

      return React.createElement(
        View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          }
        },
        webView,
        otherView
      );
    }
  }]);

  return WebView;
}(React.Component), _class.propTypes = _extends({}, ViewPropTypes, {
  renderError: PropTypes.func,
  renderLoading: PropTypes.func,
  onLoad: PropTypes.func,
  onLoadEnd: PropTypes.func,
  onLoadStart: PropTypes.func,
  onError: PropTypes.func,
  automaticallyAdjustContentInsets: PropTypes.bool,
  contentInset: EdgeInsetsPropType,
  onNavigationStateChange: PropTypes.func,
  onMessage: PropTypes.func,
  onContentSizeChange: PropTypes.func,
  startInLoadingState: PropTypes.bool,
  style: ViewPropTypes.style,

  html: deprecatedPropType(PropTypes.string, 'Use the `source` prop instead.'),

  url: deprecatedPropType(PropTypes.string, 'Use the `source` prop instead.'),

  source: PropTypes.oneOfType([PropTypes.shape({
    uri: PropTypes.string,

    method: PropTypes.oneOf(['GET', 'POST']),

    headers: PropTypes.object,

    body: PropTypes.string
  }), PropTypes.shape({
    html: PropTypes.string,

    baseUrl: PropTypes.string
  }), PropTypes.number]),

  javaScriptEnabled: PropTypes.bool,

  domStorageEnabled: PropTypes.bool,

  injectedJavaScript: PropTypes.string,

  scalesPageToFit: PropTypes.bool,

  userAgent: PropTypes.string,

  testID: PropTypes.string,

  mediaPlaybackRequiresUserAction: PropTypes.bool,

  allowUniversalAccessFromFileURLs: PropTypes.bool,

  injectJavaScript: PropTypes.func,

  mixedContentMode: PropTypes.oneOf(['never', 'always', 'compatibility'])
}), _class.defaultProps = {
  javaScriptEnabled: true,
  scalesPageToFit: true
}, _temp2));

var RCTWebView = requireNativeComponent('RCTWebView', WebView, {
  nativeOnly: {
    messagingEnabled: PropTypes.bool
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  hidden: {
    height: 0,
    flex: 0 },
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingProgressBar: {
    height: 20
  }
});

module.exports = WebView;