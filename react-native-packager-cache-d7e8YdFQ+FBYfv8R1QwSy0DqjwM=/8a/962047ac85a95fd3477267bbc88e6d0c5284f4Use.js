Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/react-native-svg/elements/Use.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _extractProps = require('../lib/extract/extractProps');

var _extractProps2 = babelHelpers.interopRequireDefault(_extractProps);

var _props = require('../lib/props');

var _attributes = require('../lib/attributes');

var _Shape2 = require('./Shape');

var _Shape3 = babelHelpers.interopRequireDefault(_Shape2);

var idExpReg = /^#(.+)$/;

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

            var matched = props.href.match(idExpReg);
            var href = void 0;

            if (matched) {
                href = matched[1];
            }

            if (!href) {
                console.warn('Invalid `href` prop for `Use` element, expected a href like `"#id"`, but got: "' + props.href + '"');
            }

            return _react2.default.createElement(
                RNSVGUse,
                babelHelpers.extends({
                    ref: function ref(ele) {
                        _this2.root = ele;
                    }
                }, (0, _extractProps2.default)(props, this), {
                    href: href,
                    width: props.width,
                    height: props.height,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }),
                props.children
            );
        }
    }]);
    return _default;
}(_Shape3.default), _class.displayName = 'Use', _class.propTypes = babelHelpers.extends({
    href: _react.PropTypes.string.isRequired,
    width: _props.numberProp,
    height: _props.numberProp }, _props.pathProps), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root;

        (_root = _this3.root).setNativeProps.apply(_root, arguments);
    };
}, _temp2);

exports.default = _default;


var RNSVGUse = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.UseAttributes,
    uiViewClassName: 'RNSVGUse'
});