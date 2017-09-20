Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;
var _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/src/props/naviago_map_planning/components/search.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _expo = require('expo');

var Search = function (_Component) {
  babelHelpers.inherits(Search, _Component);

  function Search(props) {
    babelHelpers.classCallCheck(this, Search);

    var _this = babelHelpers.possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = { isSearchActive: false, searchValue: false, text: "jaun" };

    return _this;
  }

  babelHelpers.createClass(Search, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        _react2.default.createElement(
          _reactNative.View,
          { style: styles.topSearch, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          _react2.default.createElement(_reactNative.TextInput, {
            inlineImageLeft: "search.png",
            defaultValue: "Search",
            style: styles.searchText,
            underlineColorAndroid: "transparent",
            onSelectionChange: function onSelectionChange(main) {
              _this2.setState({ isSearchActive: true });console.log(main.nativeEvent);
            },
            onChangeText: function onChangeText(text) {
              _this2.setState({ text: text });
              console.log(_this2.state);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          })
        ),
        _react2.default.createElement(BottomSearch, { name: 'jaun', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
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
      var _this4 = this;

      return _react2.default.createElement(_reactNative.Animated.View, { style: styles.bottomSearch,
        componentDidMount: function componentDidMount() {
          console.log("jaunsk");
          if (_this4.state.isSearchActive == true) {
            _reactNative.Animated.timing(_this4.state.fadeAnim, {
              toValue: 1 }).start();
          }
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
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
    alignSelf: 'center',
    opacity: 0
  },
  searchText: {
    alignSelf: "center",
    width: "70%",
    color: "white",
    fontSize: 20
  }
});