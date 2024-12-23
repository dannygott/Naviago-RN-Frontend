Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-svg/elements/RadialGradient.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _props = require('../lib/props');

var _extractGradient = require('../lib/extract/extractGradient');

var _extractGradient2 = babelHelpers.interopRequireDefault(_extractGradient);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var _default = (_temp = _class = function (_Component) {
    babelHelpers.inherits(_default, _Component);

    function _default() {
        babelHelpers.classCallCheck(this, _default);
        return babelHelpers.possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    babelHelpers.createClass(_default, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            return _react2.default.createElement(RNSVGRadialGradient, babelHelpers.extends({
                fx: props.fx.toString(),
                fy: props.fy.toString(),
                rx: (props.rx || props.r).toString(),
                ry: (props.ry || props.r).toString(),
                cx: props.cx.toString(),
                cy: props.cy.toString()
            }, (0, _extractGradient2.default)(this.props), {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }));
        }
    }]);
    return _default;
}(_react.Component), _class.displayName = 'RadialGradient', _class.propTypes = {
    fx: _props.numberProp.isRequired,
    fy: _props.numberProp.isRequired,
    rx: _props.numberProp,
    ry: _props.numberProp,
    cx: _props.numberProp.isRequired,
    cy: _props.numberProp.isRequired,
    r: _props.numberProp,
    gradientUnits: _react.PropTypes.oneOf(['objectBoundingBox', 'userSpaceOnUse']),
    id: _react.PropTypes.string.isRequired
}, _class.defaultProps = {
    fx: '50%',
    fy: '50%',
    cx: '50%',
    cy: '50%',
    r: '50%'
}, _temp);

exports.default = _default;


var RNSVGRadialGradient = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.RadialGradientAttributes,
    uiViewClassName: 'RNSVGRadialGradient'
});