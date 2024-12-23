Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/react-native-svg/elements/G.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _Shape2 = require('./Shape');

var _Shape3 = babelHelpers.interopRequireDefault(_Shape2);

var _props = require('../lib/props');

var _attributes = require('../lib/attributes');

var _extractProps = require('../lib/extract/extractProps');

var _extractProps2 = babelHelpers.interopRequireDefault(_extractProps);

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


            return _react2.default.createElement(
                RNSVGGroup,
                babelHelpers.extends({}, (0, _extractProps2.default)(props, this), {
                    ref: function ref(ele) {
                        _this2.root = ele;
                    },
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                }),
                props.children
            );
        }
    }]);
    return _default;
}(_Shape3.default), _class.displayName = 'G', _class.propTypes = _props.pathProps, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root;

        (_root = _this3.root).setNativeProps.apply(_root, arguments);
    };
}, _temp2);

exports.default = _default;


var RNSVGGroup = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.GroupAttributes,
    uiViewClassName: 'RNSVGGroup'
});