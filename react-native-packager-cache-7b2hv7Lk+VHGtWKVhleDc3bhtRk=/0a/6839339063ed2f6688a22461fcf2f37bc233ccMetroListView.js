
'use strict';

var _class,
    _temp2,
    _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/node_modules/react-native/Libraries/Lists/MetroListView.js';

var ListView = require('ListView');
var React = require('React');
var RefreshControl = require('RefreshControl');
var ScrollView = require('ScrollView');

var invariant = require('fbjs/lib/invariant');

var MetroListView = (_temp2 = _class = function (_React$Component) {
  babelHelpers.inherits(MetroListView, _React$Component);

  function MetroListView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    babelHelpers.classCallCheck(this, MetroListView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = MetroListView.__proto__ || Object.getPrototypeOf(MetroListView)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this._computeState(_this.props, {
      ds: new ListView.DataSource({
        rowHasChanged: function rowHasChanged(itemA, itemB) {
          return true;
        },
        sectionHeaderHasChanged: function sectionHeaderHasChanged() {
          return true;
        },
        getSectionHeaderData: function getSectionHeaderData(dataBlob, sectionID) {
          return _this.state.sectionHeaderData[sectionID];
        }
      }),
      sectionHeaderData: {}
    }), _this._captureRef = function (ref) {
      _this._listRef = ref;
    }, _this._renderFooter = function () {
      return React.createElement(_this2.props.FooterComponent, { key: '$footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      });
    }, _this._renderRow = function (item, sectionID, rowID, highlightRow) {
      return _this.props.renderItem({ item: item, index: rowID });
    }, _this._renderSectionHeader = function (section, sectionID) {
      var renderSectionHeader = _this.props.renderSectionHeader;

      invariant(renderSectionHeader, 'Must provide renderSectionHeader with sections prop');
      return renderSectionHeader({ section: section });
    }, _this._renderSeparator = function (sID, rID) {
      return React.createElement(_this2.props.SeparatorComponent, { key: sID + rID, __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      });
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }

  babelHelpers.createClass(MetroListView, [{
    key: 'scrollToEnd',
    value: function scrollToEnd(params) {
      throw new Error('scrollToEnd not supported in legacy ListView.');
    }
  }, {
    key: 'scrollToIndex',
    value: function scrollToIndex(params) {
      throw new Error('scrollToIndex not supported in legacy ListView.');
    }
  }, {
    key: 'scrollToItem',
    value: function scrollToItem(params) {
      throw new Error('scrollToItem not supported in legacy ListView.');
    }
  }, {
    key: 'scrollToOffset',
    value: function scrollToOffset(params) {
      var animated = params.animated,
          offset = params.offset;

      this._listRef.scrollTo(this.props.horizontal ? { x: offset, animated: animated } : { y: offset, animated: animated });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _this3 = this;

      this.setState(function (state) {
        return _this3._computeState(newProps, state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(ListView, babelHelpers.extends({}, this.props, {
        dataSource: this.state.ds,
        ref: this._captureRef,
        renderRow: this._renderRow,
        renderFooter: this.props.FooterComponent && this._renderFooter,
        renderSectionHeader: this.props.sections && this._renderSectionHeader,
        renderSeparator: this.props.SeparatorComponent && this._renderSeparator,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }));
    }
  }, {
    key: '_computeState',
    value: function _computeState(props, state) {
      var sectionHeaderData = {};
      if (props.sections) {
        invariant(!props.items, 'Cannot have both sections and items props.');
        var _sections = {};
        props.sections.forEach(function (sectionIn, ii) {
          var sectionID = 's' + ii;
          _sections[sectionID] = sectionIn.data;
          sectionHeaderData[sectionID] = sectionIn;
        });
        return {
          ds: state.ds.cloneWithRowsAndSections(_sections),
          sectionHeaderData: sectionHeaderData
        };
      } else {
        invariant(!props.sections, 'Cannot have both sections and items props.');
        return {
          ds: state.ds.cloneWithRows(props.items),
          sectionHeaderData: sectionHeaderData
        };
      }
    }
  }]);
  return MetroListView;
}(React.Component), _class.defaultProps = {
  keyExtractor: function keyExtractor(item, index) {
    return item.key || index;
  },
  renderScrollComponent: function renderScrollComponent(props) {
    if (props.onRefresh) {
      return React.createElement(ScrollView, babelHelpers.extends({}, props, {
        refreshControl: React.createElement(RefreshControl, {
          refreshing: props.refreshing,
          onRefresh: props.onRefresh,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }));
    } else {
      return React.createElement(ScrollView, babelHelpers.extends({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }));
    }
  }
}, _temp2);


module.exports = MetroListView;