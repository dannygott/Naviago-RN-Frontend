

'use strict';

var ReactBaseClasses = require('./ReactBaseClasses');
var ReactChildren = require('./ReactChildren');
var ReactClass = require('./ReactClass');
var ReactDOMFactories = require('./ReactDOMFactories');
var ReactElement = require('./ReactElement');
var ReactPropTypes = require('./ReactPropTypes');
var ReactVersion = require('./ReactVersion');

var onlyChild = require('./onlyChild');
var warning = require('fbjs/lib/warning');
var checkPropTypes = require('./checkPropTypes');

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (process.env.NODE_ENV !== 'production') {
  var ReactElementValidator = require('./ReactElementValidator');
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var createMixin = function createMixin(mixin) {
  return mixin;
};

if (process.env.NODE_ENV !== 'production') {
  var warnedForCreateMixin = false;

  createMixin = function createMixin(mixin) {
    process.env.NODE_ENV !== 'production' ? warning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. You ' + 'can use this mixin directly instead.') : void 0;
    warnedForCreateMixin = true;
    return mixin;
  };
}

var React = {

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },

  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  checkPropTypes: checkPropTypes,

  PropTypes: ReactPropTypes,
  createClass: ReactClass.createClass,
  createFactory: createFactory,
  createMixin: createMixin,

  DOM: ReactDOMFactories,

  version: ReactVersion
};

module.exports = React;