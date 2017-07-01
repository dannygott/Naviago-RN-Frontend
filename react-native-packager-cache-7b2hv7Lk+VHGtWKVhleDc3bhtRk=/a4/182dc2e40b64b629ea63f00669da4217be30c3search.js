Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/src/props/naviago_map_planning/components/search.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _expo = require('expo');

var Search = function (_Component) {
  babelHelpers.inherits(Search, _Component);

  function Search() {
    babelHelpers.classCallCheck(this, Search);
    return babelHelpers.possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  babelHelpers.createClass(Search, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        _react2.default.createElement(_reactNative.TextInput, {
          defaultValue: "search",
          style: styles.searchText,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        })
      );
    }
  }]);
  return Search;
}(_react.Component);

exports.default = Search;


var styles = _reactNative.StyleSheet.create({
  container: {
    marginTop: 25,
    position: "absolute",
    flex: 0,
    alignSelf: 'center',
    height: "7%",
    backgroundColor: '#4286f4',
    width: "90%",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    justifyContent: "center"
  },
  searchText: {
    alignSelf: "center",
    width: "70%",
    color: "white",
    fontSize: 20
  }

});