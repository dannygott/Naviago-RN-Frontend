Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class,
    _temp,
    _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-svg/elements/Svg.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _extractViewBox = require('../lib/extract/extractViewBox');

var _extractViewBox2 = babelHelpers.interopRequireDefault(_extractViewBox);

var _attributes = require('../lib/attributes');

var RNSVGSvgViewManager = _reactNative.NativeModules.RNSVGSvgViewManager;

var id = 0;

var styles = _reactNative.StyleSheet.create({
    svg: {
        backgroundColor: 'transparent'
    }
});

var Svg = (_temp = _class = function (_Component) {
    babelHelpers.inherits(Svg, _Component);

    function Svg() {
        babelHelpers.classCallCheck(this, Svg);

        var _this = babelHelpers.possibleConstructorReturn(this, (Svg.__proto__ || Object.getPrototypeOf(Svg)).apply(this, arguments));

        _this.measureInWindow = function () {
            var _this$root;

            (_this$root = _this.root).measureInWindow.apply(_this$root, arguments);
        };

        _this.measure = function () {
            var _this$root2;

            (_this$root2 = _this.root).measure.apply(_this$root2, arguments);
        };

        _this.measureLayout = function () {
            var _this$root3;

            (_this$root3 = _this.root).measureLayout.apply(_this$root3, arguments);
        };

        _this.setNativeProps = function () {
            var _this$root4;

            (_this$root4 = _this.root).setNativeProps.apply(_this$root4, arguments);
        };

        _this.toDataURL = function (callback) {
            callback && RNSVGSvgViewManager.toDataURL((0, _reactNative.findNodeHandle)(_this.root), callback);
        };

        id++;
        _this.id = id;
        _this.onDataURLCallbacks = [];
        return _this;
    }

    babelHelpers.createClass(Svg, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                opacity = _props.opacity,
                width = _props.width,
                height = _props.height,
                viewBox = _props.viewBox,
                preserveAspectRatio = _props.preserveAspectRatio,
                style = _props.style,
                props = babelHelpers.objectWithoutProperties(_props, ['opacity', 'width', 'height', 'viewBox', 'preserveAspectRatio', 'style']);

            var dimensions = void 0;

            if (width && height) {
                dimensions = {
                    width: +width,
                    height: +height,
                    flex: 0
                };
            }

            return _react2.default.createElement(NativeSvgView, babelHelpers.extends({}, props, (0, _extractViewBox2.default)({ viewBox: viewBox, preserveAspectRatio: preserveAspectRatio }), {
                ref: function ref(ele) {
                    _this2.root = ele;
                },
                style: [styles.svg, style, !isNaN(+opacity) && {
                    opacity: +opacity
                }, dimensions],
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }));
        }
    }]);
    return Svg;
}(_react.Component), _class.displayName = 'Svg', _class.propTypes = babelHelpers.extends({}, _reactNative.View.propTypes, {
    opacity: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),

    viewBox: _react.PropTypes.string,
    preserveAspectRatio: _react.PropTypes.string
}), _class.defaultProps = {
    preserveAspectRatio: 'xMidYMid meet'
}, _temp);


var NativeSvgView = (0, _reactNative.requireNativeComponent)('RNSVGSvgView', null, {
    nativeOnly: babelHelpers.extends({}, _attributes.ViewBoxAttributes)
});

exports.default = Svg;