Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = increment;
exports.decrement = decrement;
exports.map_pull = map_pull;

var _actionTypes = require('./actionTypes');

var types = babelHelpers.interopRequireWildcard(_actionTypes);

var _naviagoInterface = require('../api/naviagoInterface');

var _naviagoInterface2 = babelHelpers.interopRequireDefault(_naviagoInterface);

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
  jaun = (0, _naviagoInterface2.default)();
  console.log(jaun);
  return {
    type: types.MAP_PULL,
    locations: (0, _naviagoInterface2.default)()
  };
}