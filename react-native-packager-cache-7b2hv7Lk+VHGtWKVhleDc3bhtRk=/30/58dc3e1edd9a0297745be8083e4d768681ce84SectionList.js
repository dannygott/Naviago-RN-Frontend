
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native/Libraries/Lists/SectionList.js';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MetroListView = require('MetroListView');
var Platform = require('Platform');
var React = require('React');
var VirtualizedSectionList = require('VirtualizedSectionList');

var defaultProps = _extends({}, VirtualizedSectionList.defaultProps, {
  stickySectionHeadersEnabled: Platform.OS === 'ios'
});

var SectionList = (_temp = _class = function (_React$PureComponent) {
  _inherits(SectionList, _React$PureComponent);

  function SectionList() {
    _classCallCheck(this, SectionList);

    return _possibleConstructorReturn(this, (SectionList.__proto__ || Object.getPrototypeOf(SectionList)).apply(this, arguments));
  }

  _createClass(SectionList, [{
    key: 'render',
    value: function render() {
      var List = this.props.legacyImplementation ? MetroListView : VirtualizedSectionList;
      return React.createElement(List, _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }));
    }
  }]);

  return SectionList;
}(React.PureComponent), _class.defaultProps = defaultProps, _temp);


module.exports = SectionList;