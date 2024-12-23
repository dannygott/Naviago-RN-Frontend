Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-svg/elements/Image.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var _props = require('../lib/props');

var _Shape2 = require('./Shape');

var _Shape3 = babelHelpers.interopRequireDefault(_Shape2);

var _resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');

var _resolveAssetSource2 = babelHelpers.interopRequireDefault(_resolveAssetSource);

var _extractViewBox = require('../lib/extract/extractViewBox');

var _extractProps = require('../lib/extract/extractProps');

var _extractProps2 = babelHelpers.interopRequireDefault(_extractProps);

var spacesRegExp = /\s+/;

var _default = (_temp2 = _class = function (_Shape) {
    babelHelpers.inherits(_default, _Shape);

    function _default() {
        var _ref;

        var _temp, _this, _ret;

        babelHelpers.classCallCheck(this, _default);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }

    babelHelpers.createClass(_default, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;

            var modes = props.preserveAspectRatio.trim().split(spacesRegExp);
            var meetOrSlice = _extractViewBox.meetOrSliceTypes[modes[1]] || 0;
            var align = _extractViewBox.alignEnum[modes[0]] || 'xMidYMid';

            return _react2.default.createElement(RNSVGImage, babelHelpers.extends({
                ref: function ref(ele) {
                    _this2.root = ele;
                }
            }, (0, _extractProps2.default)(babelHelpers.extends({}, props, { x: null, y: null }), this), {
                x: props.x.toString(),
                y: props.y.toString(),
                width: props.width.toString(),
                height: props.height.toString(),
                meetOrSlice: meetOrSlice,
                align: align,
                src: (0, _resolveAssetSource2.default)(props.href),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }));
        }
    }]);
    return _default;
}(_Shape3.default), _class.displayName = 'Image', _class.propTypes = babelHelpers.extends({}, _props.responderProps, _props.touchableProps, {
    x: _props.numberProp,
    y: _props.numberProp,
    width: _props.numberProp.isRequired,
    height: _props.numberProp.isRequired,
    href: _reactNative.Image.propTypes.source,
    preserveAspectRatio: _react.PropTypes.string
}), _class.defaultProps = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    preserveAspectRatio: 'xMidYMid meet'
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root;

        (_root = _this3.root).setNativeProps.apply(_root, arguments);
    };
}, _temp2);

exports.default = _default;


var RNSVGImage = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.ImageAttributes,
    uiViewClassName: 'RNSVGImage'
});