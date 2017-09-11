Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _jsxFileName = '/mnt/c/Users/Daniel/Naviago-RN-Frontend/src/props/naviago_map_planning/components/search.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _expo = require('expo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Search: {
    displayName: 'Search'
  },
  BottomSearch: {
    displayName: 'BottomSearch'
  }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/mnt/c/Users/Daniel/Naviago-RN-Frontend/src/props/naviago_map_planning/components/search.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
  };
}

var Search = _wrapComponent('Search')(function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = { isSearchActive: false, searchValue: false, text: "jaun" };

    return _this;
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement(
        _reactNative.View,
        { style: styles.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        _react3.default.createElement(
          _reactNative.View,
          { style: styles.topSearch, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          _react3.default.createElement(_reactNative.TextInput, {
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
              lineNumber: 22
            }
          })
        ),
        _react3.default.createElement(BottomSearch, { name: 'jaun', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        })
      );
    }
  }]);

  return Search;
}(_react2.Component));

exports.default = Search;

var BottomSearch = _wrapComponent('BottomSearch')(function (_Component2) {
  _inherits(BottomSearch, _Component2);

  function BottomSearch() {
    _classCallCheck(this, BottomSearch);

    return _possibleConstructorReturn(this, (BottomSearch.__proto__ || Object.getPrototypeOf(BottomSearch)).apply(this, arguments));
  }

  _createClass(BottomSearch, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react3.default.createElement(_reactNative.Animated.View, { style: styles.bottomSearch,
        componentDidMount: function componentDidMount() {
          console.log("jaunsk");
          if (_this4.state.isSearchActive == true) {
            _reactNative.Animated.timing(_this4.state.fadeAnim, {
              toValue: 1 }).start();
          }
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      });
    }
  }]);

  return BottomSearch;
}(_react2.Component));

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