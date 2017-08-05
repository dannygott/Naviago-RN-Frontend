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
            lineNumber: 9
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.topSearch, __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          _react2.default.createElement(_reactNative.TextInput, {
            inlineImageLeft: "search.png",
            defaultValue: "Search",
            style: styles.searchText,
            underlineColorAndroid: "transparent",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          })
        ),
        _react2.default.createElement(BottomSearch, { name: 'jaun', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        })
      );
    }
  }]);
  return Search;
}(_react.Component);

exports.default = Search;

var BottomSearch = function (_Component2) {
  babelHelpers.inherits(BottomSearch, _Component2);

  function BottomSearch() {
    babelHelpers.classCallCheck(this, BottomSearch);
    return babelHelpers.possibleConstructorReturn(this, (BottomSearch.__proto__ || Object.getPrototypeOf(BottomSearch)).apply(this, arguments));
  }

  babelHelpers.createClass(BottomSearch, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactNative.View, { style: styles.bottomSearch, __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      });
    }
  }]);
  return BottomSearch;
}(_react.Component);

var styles = _reactNative.StyleSheet.create({
  topSearch: {
    marginTop: 25,
    position: "relative",
    flex: 0,
    alignSelf: 'center',
    height: "6%",
    backgroundColor: '#22B473',
    width: "90%",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    justifyContent: "center",
    zIndex: 100
  },
  container: {
    position: "absolute",
    flex: 0,
    width: "100%",
    height: "100%"
  },
  bottomSearch: {
    position: "relative",
    flex: 0,
    width: "90%",
    height: "9%",
    backgroundColor: "white",
    zIndex: -1,
    alignSelf: 'center'
  },
  searchText: {
    alignSelf: "center",
    width: "70%",
    color: "white",
    fontSize: 20
  }
});