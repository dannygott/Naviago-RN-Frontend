
'use strict';

var _class,
    _temp,
    _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/react-native/Libraries/Experimental/SwipeableRow/SwipeableListView.js';

var ListView = require('ListView');
var React = require('React');
var SwipeableListViewDataSource = require('SwipeableListViewDataSource');
var SwipeableRow = require('SwipeableRow');

var PropTypes = React.PropTypes;
var SwipeableListView = (_temp = _class = function (_React$Component) {
  babelHelpers.inherits(SwipeableListView, _React$Component);
  babelHelpers.createClass(SwipeableListView, null, [{
    key: 'getNewDataSource',
    value: function getNewDataSource() {
      return new SwipeableListViewDataSource({
        getRowData: function getRowData(data, sectionID, rowID) {
          return data[sectionID][rowID];
        },
        getSectionHeaderData: function getSectionHeaderData(data, sectionID) {
          return data[sectionID];
        },
        rowHasChanged: function rowHasChanged(row1, row2) {
          return row1 !== row2;
        },
        sectionHeaderHasChanged: function sectionHeaderHasChanged(s1, s2) {
          return s1 !== s2;
        }
      });
    }
  }]);

  function SwipeableListView(props, context) {
    babelHelpers.classCallCheck(this, SwipeableListView);

    var _this = babelHelpers.possibleConstructorReturn(this, (SwipeableListView.__proto__ || Object.getPrototypeOf(SwipeableListView)).call(this, props, context));

    _this._listViewRef = null;
    _this._shouldBounceFirstRowOnMount = false;

    _this._onScroll = function (e) {
      if (_this.props.dataSource.getOpenRowID()) {
        _this.setState({
          dataSource: _this.state.dataSource.setOpenRowID(null)
        });
      }
      _this.props.onScroll && _this.props.onScroll(e);
    };

    _this._renderRow = function (rowData, sectionID, rowID) {
      var slideoutView = _this.props.renderQuickActions(rowData, sectionID, rowID);

      if (!slideoutView) {
        return _this.props.renderRow(rowData, sectionID, rowID);
      }

      var shouldBounceOnMount = false;
      if (_this._shouldBounceFirstRowOnMount) {
        _this._shouldBounceFirstRowOnMount = false;
        shouldBounceOnMount = rowID === _this.props.dataSource.getFirstRowID();
      }

      return React.createElement(
        SwipeableRow,
        {
          slideoutView: slideoutView,
          isOpen: rowData.id === _this.props.dataSource.getOpenRowID(),
          maxSwipeDistance: _this._getMaxSwipeDistance(rowData, sectionID, rowID),
          key: rowID,
          onOpen: function onOpen() {
            return _this._onOpen(rowData.id);
          },
          onClose: function onClose() {
            return _this._onClose(rowData.id);
          },
          onSwipeEnd: function onSwipeEnd() {
            return _this._setListViewScrollable(true);
          },
          onSwipeStart: function onSwipeStart() {
            return _this._setListViewScrollable(false);
          },
          shouldBounceOnMount: shouldBounceOnMount, __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          }
        },
        _this.props.renderRow(rowData, sectionID, rowID)
      );
    };

    _this._shouldBounceFirstRowOnMount = _this.props.bounceFirstRowOnMount;
    _this.state = {
      dataSource: _this.props.dataSource
    };
    return _this;
  }

  babelHelpers.createClass(SwipeableListView, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.state.dataSource.getDataSource() !== nextProps.dataSource.getDataSource()) {
        this.setState({
          dataSource: nextProps.dataSource
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(ListView, babelHelpers.extends({}, this.props, {
        ref: function ref(_ref) {
          _this2._listViewRef = _ref;
        },
        dataSource: this.state.dataSource.getDataSource(),
        onScroll: this._onScroll,
        renderRow: this._renderRow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }));
    }
  }, {
    key: '_setListViewScrollable',
    value: function _setListViewScrollable(value) {
      if (this._listViewRef && typeof this._listViewRef.setNativeProps === 'function') {
        this._listViewRef.setNativeProps({
          scrollEnabled: value
        });
      }
    }
  }, {
    key: 'getScrollResponder',
    value: function getScrollResponder() {
      if (this._listViewRef && typeof this._listViewRef.getScrollResponder === 'function') {
        return this._listViewRef.getScrollResponder();
      }
    }
  }, {
    key: '_getMaxSwipeDistance',
    value: function _getMaxSwipeDistance(rowData, sectionID, rowID) {
      if (typeof this.props.maxSwipeDistance === 'function') {
        return this.props.maxSwipeDistance(rowData, sectionID, rowID);
      }

      return this.props.maxSwipeDistance;
    }
  }, {
    key: '_onOpen',
    value: function _onOpen(rowID) {
      this.setState({
        dataSource: this.state.dataSource.setOpenRowID(rowID)
      });
    }
  }, {
    key: '_onClose',
    value: function _onClose(rowID) {
      this.setState({
        dataSource: this.state.dataSource.setOpenRowID(null)
      });
    }
  }]);
  return SwipeableListView;
}(React.Component), _class.propTypes = {
  bounceFirstRowOnMount: PropTypes.bool.isRequired,

  dataSource: PropTypes.instanceOf(SwipeableListViewDataSource).isRequired,

  maxSwipeDistance: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).isRequired,

  renderRow: PropTypes.func.isRequired,

  renderQuickActions: PropTypes.func.isRequired
}, _class.defaultProps = {
  bounceFirstRowOnMount: false,
  renderQuickActions: function renderQuickActions() {
    return null;
  }
}, _temp);


module.exports = SwipeableListView;