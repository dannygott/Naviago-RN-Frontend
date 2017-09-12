Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-svg/elements/RadialGradient.js';

var _props = require('../lib/props');

var _extractGradient = require('../lib/extract/extractGradient');

var _extractGradient2 = _interopRequireDefault(_extractGradient);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = _interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-svg/elements/RadialGradient.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _reactTransformHmrLibIndexJs2(Component, id);
    };
}

var _component = _wrapComponent('_component')((_temp = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            return _react3.default.createElement(RNSVGRadialGradient, _extends({
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

    return _class;
}(_react2.Component), _class.displayName = 'RadialGradient', _class.propTypes = {
    fx: _props.numberProp.isRequired,
    fy: _props.numberProp.isRequired,
    rx: _props.numberProp,
    ry: _props.numberProp,
    cx: _props.numberProp.isRequired,
    cy: _props.numberProp.isRequired,
    r: _props.numberProp,
    gradientUnits: _react2.PropTypes.oneOf(['objectBoundingBox', 'userSpaceOnUse']),
    id: _react2.PropTypes.string.isRequired
}, _class.defaultProps = {
    fx: '50%',
    fy: '50%',
    cx: '50%',
    cy: '50%',
    r: '50%'
}, _temp));

exports.default = _component;


var RNSVGRadialGradient = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.RadialGradientAttributes,
    uiViewClassName: 'RNSVGRadialGradient'
});