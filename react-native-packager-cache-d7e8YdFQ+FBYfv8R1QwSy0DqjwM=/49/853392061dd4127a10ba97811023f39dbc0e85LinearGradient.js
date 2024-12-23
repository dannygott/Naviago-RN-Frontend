Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/react-native-svg/elements/LinearGradient.js';

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

            return _react2.default.createElement(RNSVGLinearGradient, babelHelpers.extends({
                x1: props.x1.toString(),
                y1: props.y1.toString(),
                x2: props.x2.toString(),
                y2: props.y2.toString()
            }, (0, _extractGradient2.default)(this.props), {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }));
        }
    }]);
    return _default;
}(_react.Component), _class.displayName = 'LinearGradient', _class.propTypes = {
    x1: _props.numberProp.isRequired,
    x2: _props.numberProp.isRequired,
    y1: _props.numberProp.isRequired,
    y2: _props.numberProp.isRequired,
    gradientUnits: _react.PropTypes.oneOf(['objectBoundingBox', 'userSpaceOnUse']),
    id: _react.PropTypes.string.isRequired
}, _class.defaultProps = {
    x1: '0%',
    y1: '0%',
    x2: '100%',
    y2: '0%'
}, _temp);

exports.default = _default;


var RNSVGLinearGradient = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.LinearGradientAttributes,
    uiViewClassName: 'RNSVGLinearGradient'
});