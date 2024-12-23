Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _class,
    _temp,
    _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/react-native-svg/elements/TextPath.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _createReactNativeComponentClass = require('react-native/Libraries/Renderer/src/renderers/native/createReactNativeComponentClass');

var _createReactNativeComponentClass2 = babelHelpers.interopRequireDefault(_createReactNativeComponentClass);

var _attributes = require('../lib/attributes');

var _extractText = require('../lib/extract/extractText');

var _extractText2 = babelHelpers.interopRequireDefault(_extractText);

var _Shape2 = require('./Shape');

var _Shape3 = babelHelpers.interopRequireDefault(_Shape2);

var _props2 = require('../lib/props');

var _extractProps = require('../lib/extract/extractProps');

var _extractProps2 = babelHelpers.interopRequireDefault(_extractProps);

var _TSpan = require('./TSpan');

var _TSpan2 = babelHelpers.interopRequireDefault(_TSpan);

var idExpReg = /^#(.+)$/;

var _default = (_temp = _class = function (_Shape) {
    babelHelpers.inherits(_default, _Shape);

    function _default() {
        babelHelpers.classCallCheck(this, _default);
        return babelHelpers.possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
    }

    babelHelpers.createClass(_default, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                href = _props.href,
                startOffset = _props.startOffset,
                props = babelHelpers.objectWithoutProperties(_props, ['children', 'href', 'startOffset']);

            if (href) {
                var matched = href.match(idExpReg);

                if (matched) {
                    href = matched[1];

                    return _react2.default.createElement(RNSVGTextPath, babelHelpers.extends({
                        href: href
                    }, (0, _extractProps2.default)(babelHelpers.extends({}, props, {
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
}(_Shape3.default), _class.displayName = 'Span', _class.propTypes = babelHelpers.extends({}, _props2.pathProps, _props2.fontProps, {
    href: _react.PropTypes.string.isRequired,
    startOffset: _props2.numberProp
}), _temp);

exports.default = _default;


var RNSVGTextPath = (0, _createReactNativeComponentClass2.default)({
    validAttributes: _attributes.TextPathAttributes,
    uiViewClassName: 'RNSVGTextPath'
});