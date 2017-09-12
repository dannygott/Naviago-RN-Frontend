Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-svg/elements/TextPath.js';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = _interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var _extractText = require('../lib/extract/extractText');

var _extractText2 = _interopRequireDefault(_extractText);

var _Shape2 = require('./Shape');

var _Shape3 = _interopRequireDefault(_Shape2);

var _props2 = require('../lib/props');

var _extractProps = require('../lib/extract/extractProps');

var _extractProps2 = _interopRequireDefault(_extractProps);

var _TSpan = require('./TSpan');

var _TSpan2 = _interopRequireDefault(_TSpan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var idExpReg = /^#(.+)$/;

var _default = (_temp = _class = function (_Shape) {
    _inherits(_default, _Shape);

    function _default() {
        _classCallCheck(this, _default);

        return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    _createClass(_default, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                href = _props.href,
                startOffset = _props.startOffset,
                props = _objectWithoutProperties(_props, ['children', 'href', 'startOffset']);

            if (href) {
                var matched = href.match(idExpReg);

                if (matched) {
                    href = matched[1];

                    return _react2.default.createElement(RNSVGTextPath, _extends({
                        href: href
                    }, (0, _extractProps2.default)(_extends({}, props, {
                        x: null,
                        y: null
                    }), this), (0, _extractText2.default)({
                        children: children,
                        startOffset: startOffset
                    }, true), {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 30
                        }
                    }));
                }
            }

            console.warn('Invalid `href` prop for `TextPath` element, expected a href like `"#id"`, but got: "' + props.href + '"');
            return _react2.default.createElement(
                _TSpan2.default,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                },
                children
            );
        }
    }]);

    return _default;
}(_Shape3.default), _class.displayName = 'Span', _class.propTypes = _extends({}, _props2.pathProps, _props2.fontProps, {
    href: _react.PropTypes.string.isRequired,
    startOffset: _props2.numberProp
}), _temp);

exports.default = _default;


var RNSVGTextPath = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.TextPathAttributes,
    uiViewClassName: 'RNSVGTextPath'
});