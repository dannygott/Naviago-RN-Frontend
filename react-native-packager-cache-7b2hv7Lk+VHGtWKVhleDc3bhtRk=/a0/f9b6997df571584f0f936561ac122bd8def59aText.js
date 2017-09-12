Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-svg/elements/Text.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = _interopRequireDefault(_createReactNativeComponentClass);

var _extractText = require('../lib/extract/extractText');

var _extractText2 = _interopRequireDefault(_extractText);

var _props = require('../lib/props');

var _attributes = require('../lib/attributes');

var _extractProps = require('../lib/extract/extractProps');

var _extractProps2 = _interopRequireDefault(_extractProps);

var _Shape2 = require('./Shape');

var _Shape3 = _interopRequireDefault(_Shape2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = (_temp2 = _class = function (_Shape) {
    _inherits(_default, _Shape);

    function _default() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, _default);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_default, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                isInAParentText: true
            };
        }
    }, {
        key: 'getContextTypes',
        value: function getContextTypes() {
            return {
                isInAParentText: _react2.default.PropTypes.bool
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;

            return _react2.default.createElement(RNSVGText, _extends({
                ref: function ref(ele) {
                    _this2.root = ele;
                }
            }, (0, _extractProps2.default)(_extends({}, props, {
                x: null,
                y: null
            }), this), (0, _extractText2.default)(props, true), {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }));
        }
    }]);

    return _default;
}(_Shape3.default), _class.displayName = 'Text', _class.propTypes = _extends({}, _props.pathProps, _props.fontProps, {
    dx: _props.numberProp,
    dy: _props.numberProp,
    textAnchor: _react.PropTypes.oneOf(['start', 'middle', 'end'])
}), _class.childContextTypes = {
    isInAParentText: _react2.default.PropTypes.bool
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root;

        (_root = _this3.root).setNativeProps.apply(_root, arguments);
    };
}, _temp2);

exports.default = _default;


var RNSVGText = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.TextAttributes,
    uiViewClassName: 'RNSVGText'
});