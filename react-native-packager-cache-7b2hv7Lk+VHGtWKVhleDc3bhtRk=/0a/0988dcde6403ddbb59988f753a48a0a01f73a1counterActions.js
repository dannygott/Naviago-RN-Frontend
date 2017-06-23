Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = increment;
exports.decrement = decrement;

var _actionTypes = require('./actionTypes');

var types = babelHelpers.interopRequireWildcard(_actionTypes);
function increment() {
  return {
    type: types.INCREMENT
  };
}

function decrement() {
  return {
    type: types.DECREMENT
  };
}