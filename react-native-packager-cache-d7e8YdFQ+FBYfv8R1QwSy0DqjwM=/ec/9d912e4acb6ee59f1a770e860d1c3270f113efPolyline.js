Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp2,
    _initialiseProps,
    _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/react-native-svg/elements/Polyline.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _Path = require('./Path');

var _Path2 = babelHelpers.interopRequireDefault(_Path);

var _props = require('../lib/props');

var _extractPolyPoints = require('../lib/extract/extractPolyPoints');

var _extractPolyPoints2 = babelHelpers.interopRequireDefault(_extractPolyPoints);

var _default = (_temp2 = _class = function (_Component) {
    babelHelpers.inherits(_default, _Component);

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

            var points = this.props.points;
            if (Array.isArray(points)) {
                points = points.join(',');
            }

            return _react2.default.createElement(_Path2.default, babelHelpers.extends({
                ref: function ref(ele) {
                    _this2.root = ele;
                }
            }, this.props, {
                d: 'M' + (0, _extractPolyPoints2.default)(points),
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }));
        }
    }]);
    return _default;
}(_react.Component), _class.displayName = 'Polyline', _class.propTypes = babelHelpers.extends({}, _props.pathProps, {
    points: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]).isRequired
}), _class.defaultProps = {
    points: ''
}, _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setNativeProps = function () {
        var _root$getNativeElemen;

        (_root$getNativeElemen = _this3.root.getNativeElement()).setNativeProps.apply(_root$getNativeElemen, arguments);
    };
}, _temp2);

exports.default = _default;