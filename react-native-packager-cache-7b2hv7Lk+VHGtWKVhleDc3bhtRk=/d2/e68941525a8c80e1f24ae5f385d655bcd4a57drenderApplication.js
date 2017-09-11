

'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native/Libraries/ReactNative/renderApplication.js';
var AppContainer = require('AppContainer');
var React = require('React');
var ReactNative = require('ReactNative');

var invariant = require('fbjs/lib/invariant');

require('BackHandler');

function renderApplication(RootComponent, initialProps, rootTag) {
  invariant(rootTag, 'Expect to have a valid rootTag, instead got ', rootTag);
  ReactNative.render(React.createElement(
    AppContainer,
    { rootTag: rootTag, __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      }
    },
    React.createElement(RootComponent, _extends({}, initialProps, {
      rootTag: rootTag,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      }
    }))
  ), rootTag);
}

module.exports = renderApplication;