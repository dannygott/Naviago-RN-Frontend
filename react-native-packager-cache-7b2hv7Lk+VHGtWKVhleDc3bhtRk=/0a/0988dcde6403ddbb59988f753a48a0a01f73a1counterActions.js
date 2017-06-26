Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = increment;
exports.decrement = decrement;
exports.map_pull = map_pull;

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
function map_pull() {
  return {
    type: types.MAP_PULL
  };
}