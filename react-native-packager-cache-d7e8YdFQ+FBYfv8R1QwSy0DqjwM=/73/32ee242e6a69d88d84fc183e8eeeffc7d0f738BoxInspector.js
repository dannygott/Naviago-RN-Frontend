
'use strict';

var _jsxFileName = '/mnt/c/Users/Sarah-Create/Naviago-RN-Frontend/node_modules/react-native/Libraries/Inspector/BoxInspector.js';
var React = require('React');
var StyleSheet = require('StyleSheet');
var Text = require('Text');
var View = require('View');
var resolveBoxStyle = require('resolveBoxStyle');

var blank = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

var BoxInspector = function (_React$Component) {
  babelHelpers.inherits(BoxInspector, _React$Component);

  function BoxInspector() {
    babelHelpers.classCallCheck(this, BoxInspector);
    return babelHelpers.possibleConstructorReturn(this, (BoxInspector.__proto__ || Object.getPrototypeOf(BoxInspector)).apply(this, arguments));
  }

  babelHelpers.createClass(BoxInspector, [{
    key: 'render',
    value: function render() {
      var frame = this.props.frame;
      var style = this.props.style;
      var margin = style && resolveBoxStyle('margin', style) || blank;
      var padding = style && resolveBoxStyle('padding', style) || blank;
      return React.createElement(
        BoxContainer,
        { title: 'margin', titleStyle: styles.marginLabel, box: margin, __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        },
        React.createElement(
          BoxContainer,
          { title: 'padding', box: padding, __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          },
          React.createElement(
            View,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            React.createElement(
              Text,
              { style: styles.innerText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              '(',
              frame.left,
              ', ',
              frame.top,
              ')'
            ),
            React.createElement(
              Text,
              { style: styles.innerText, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 40
                }
              },
              frame.width,
              ' \xD7 ',
              frame.height
            )
          )
        )
      );
    }
  }]);
  return BoxInspector;
}(React.Component);

var BoxContainer = function (_React$Component2) {
  babelHelpers.inherits(BoxContainer, _React$Component2);

  function BoxContainer() {
    babelHelpers.classCallCheck(this, BoxContainer);
    return babelHelpers.possibleConstructorReturn(this, (BoxContainer.__proto__ || Object.getPrototypeOf(BoxContainer)).apply(this, arguments));
  }

  babelHelpers.createClass(BoxContainer, [{
    key: 'render',
    value: function render() {
      var box = this.props.box;
      return React.createElement(
        View,
        { style: styles.box, __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        },
        React.createElement(
          View,
          { style: styles.row, __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          },
          React.createElement(
            Text,
            { style: [this.props.titleStyle, styles.label], __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            },
            this.props.title
          ),
          React.createElement(
            Text,
            { style: styles.boxText, __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              }
            },
            box.top
          )
        ),
        React.createElement(
          View,
          { style: styles.row, __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          },
          React.createElement(
            Text,
            { style: styles.boxText, __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            box.left
          ),
          this.props.children,
          React.createElement(
            Text,
            { style: styles.boxText, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            box.right
          )
        ),
        React.createElement(
          Text,
          { style: styles.boxText, __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          },
          box.bottom
        )
      );
    }
  }]);
  return BoxContainer;
}(React.Component);

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  marginLabel: {
    width: 60
  },
  label: {
    fontSize: 10,
    color: 'rgb(255,100,0)',
    marginLeft: 5,
    flex: 1,
    textAlign: 'left',
    top: -3
  },
  buffer: {
    fontSize: 10,
    color: 'yellow',
    flex: 1,
    textAlign: 'center'
  },
  innerText: {
    color: 'yellow',
    fontSize: 12,
    textAlign: 'center',
    width: 70
  },
  box: {
    borderWidth: 1,
    borderColor: 'grey'
  },
  boxText: {
    color: 'white',
    fontSize: 12,
    marginHorizontal: 3,
    marginVertical: 2,
    textAlign: 'center'
  }
});

module.exports = BoxInspector;