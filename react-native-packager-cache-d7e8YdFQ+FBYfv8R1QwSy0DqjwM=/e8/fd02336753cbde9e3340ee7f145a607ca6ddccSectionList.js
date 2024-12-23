
'use strict';

var _class,
    _temp,
    _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/react-native/Libraries/Lists/SectionList.js';

var MetroListView = require('MetroListView');
var Platform = require('Platform');
var React = require('React');
var VirtualizedSectionList = require('VirtualizedSectionList');

var defaultProps = babelHelpers.extends({}, VirtualizedSectionList.defaultProps, {
  stickySectionHeadersEnabled: Platform.OS === 'ios'
});

var SectionList = (_temp = _class = function (_React$PureComponent) {
  babelHelpers.inherits(SectionList, _React$PureComponent);

  function SectionList() {
    babelHelpers.classCallCheck(this, SectionList);
    return babelHelpers.possibleConstructorReturn(this, (SectionList.__proto__ || Object.getPrototypeOf(SectionList)).apply(this, arguments));
  }

  babelHelpers.createClass(SectionList, [{
    key: 'render',
    value: function render() {
      var List = this.props.legacyImplementation ? MetroListView : VirtualizedSectionList;
      return React.createElement(List, babelHelpers.extends({}, this.props, {
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