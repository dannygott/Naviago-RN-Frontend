Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-svg/elements/Defs.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _default = (_temp = _class = function (_Component) {
    babelHelpers.inherits(_default, _Component);

    function _default() {
        babelHelpers.classCallCheck(this, _default);
        return babelHelpers.possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    babelHelpers.createClass(_default, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                RNSVGDefs,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 8
                    }
                },
                this.props.children
            );
        }
    }]);
    return _default;
}(_react.Component), _class.displayName = 'Defs', _temp);

exports.default = _default;


var RNSVGDefs = (0, _createReactNativeComponentClass2.default)({
    validAttributes: {},
    uiViewClassName: 'RNSVGDefs'
});