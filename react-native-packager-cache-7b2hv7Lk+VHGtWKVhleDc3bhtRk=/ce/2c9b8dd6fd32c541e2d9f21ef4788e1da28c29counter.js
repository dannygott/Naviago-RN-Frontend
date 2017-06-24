Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = counter;

var _actionTypes = require("../actions/actionTypes");

var types = babelHelpers.interopRequireWildcard(_actionTypes);


var initialState = {
  count: 0
};

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case types.INCREMENT:
      return babelHelpers.extends({}, state, {
        count: state.count + 1
      });
      console.log("dsf");
    case types.DECREMENT:
      return babelHelpers.extends({}, state, {
        count: state.count - 1
      });
    default:
      return state;
  }
}