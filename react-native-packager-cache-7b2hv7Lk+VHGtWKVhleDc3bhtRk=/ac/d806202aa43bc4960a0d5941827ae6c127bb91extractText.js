Object.defineProperty(exports, "__esModule", {
    value: true
});
var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native-svg/lib/extract/extractText.js';

exports.default = function (props, container) {
    var x = props.x,
        y = props.y,
        dx = props.dx,
        dy = props.dy,
        textAnchor = props.textAnchor,
        startOffset = props.startOffset;


    var deltaX = parseDelta(dx);
    var deltaY = parseDelta(dy);
    var children = props.children;

    var content = null;

    if (typeof children === 'string' || typeof children === 'number') {
        var childrenString = children.toString();
        if (container) {
            children = _react2.default.createElement(
                _TSpan2.default,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 103
                    }
                },
                childrenString
            );
        } else {
            content = childrenString;
            children = null;
        }
    } else if (_react.Children.count(children) > 1 || Array.isArray(children)) {
        children = _react.Children.map(children, function (child) {
            if (typeof child === 'string' || typeof child === 'number') {
                return _react2.default.createElement(
                    _TSpan2.default,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 111
                        }
                    },
                    child.toString()
                );
            } else {
                return child;
            }
        });
    }

    return {
        textAnchor: anchors[textAnchor] || 0,
        font: extractFont(props),
        children: children,
        content: content,
        deltaX: deltaX,
        deltaY: deltaY,
        startOffset: (startOffset || 0).toString(),
        positionX: _lodash2.default.isNil(x) ? null : x.toString(),
        positionY: _lodash2.default.isNil(y) ? null : y.toString()
    };
};

var _lodash = require('lodash');

var _lodash2 = babelHelpers.interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _TSpan = require('../../elements/TSpan');

var _TSpan2 = babelHelpers.interopRequireDefault(_TSpan);

var fontRegExp = /^\s*((?:(?:normal|bold|italic)\s+)*)(?:(\d+(?:\.\d+)?)[ptexm%]*(?:\s*\/.*?)?\s+)?\s*"?([^"]*)/i;
var fontFamilyPrefix = /^[\s"']*/;
var fontFamilySuffix = /[\s"']*$/;
var spaceReg = /\s+/;
var commaReg = /,/g;

var anchors = {
    auto: 0,
    start: 1,
    middle: 2,
    end: 3
};

var cachedFontObjectsFromString = {};

function extractSingleFontFamily(fontFamilyString) {
    return fontFamilyString ? fontFamilyString.split(commaReg)[0].replace(fontFamilyPrefix, '').replace(fontFamilySuffix, '') : null;
}

function parseFontString(font) {
    if (cachedFontObjectsFromString.hasOwnProperty(font)) {
        return cachedFontObjectsFromString[font];
    }
    var match = fontRegExp.exec(font);
    if (!match) {
        return null;
    }
    var fontFamily = extractSingleFontFamily(match[3]);
    var fontSize = +match[2] || 12;
    var isBold = /bold/.exec(match[1]);
    var isItalic = /italic/.exec(match[1]);
    cachedFontObjectsFromString[font] = {
        fontFamily: fontFamily,
        fontSize: fontSize,
        fontWeight: isBold ? 'bold' : 'normal',
        fontStyle: isItalic ? 'italic' : 'normal'
    };
    return cachedFontObjectsFromString[font];
}

function extractFont(props) {
    var font = props.font;
    var fontSize = +props.fontSize;

    var ownedFont = {
        fontFamily: extractSingleFontFamily(props.fontFamily),
        fontSize: isNaN(fontSize) ? null : fontSize,
        fontWeight: props.fontWeight,
        fontStyle: props.fontStyle
    };

    if (typeof props.font === 'string') {
        font = parseFontString(props.font);
    }
    ownedFont = _lodash2.default.pickBy(ownedFont, function (prop) {
        return !_lodash2.default.isNil(prop);
    });

    return _lodash2.default.defaults(ownedFont, font);
}

function parseDelta(delta) {
    if (typeof delta === 'string') {
        if (isNaN(+delta)) {
            return delta.trim().replace(commaReg, ' ').split(spaceReg).map(function (d) {
                return +d || 0;
            });
        } else {
            return [+delta];
        }
    } else if (typeof delta === 'number') {
        return [delta];
    } else {
        return [];
    }
}