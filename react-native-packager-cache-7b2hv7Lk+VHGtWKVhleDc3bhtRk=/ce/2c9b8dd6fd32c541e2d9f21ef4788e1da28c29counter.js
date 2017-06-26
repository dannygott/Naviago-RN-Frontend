Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = counter;

var _actionTypes = require('../actions/actionTypes');

var types = babelHelpers.interopRequireWildcard(_actionTypes);

var _naviagoInterface = require('../api/naviagoInterface');

var _naviagoInterface2 = babelHelpers.interopRequireDefault(_naviagoInterface);

var initialState = {
  count: 0,
  locations: { markers: [{
      title: "hello",
      coordinates: {
        latitude: 3.148561,
        longitude: 101.652778 },
      key: 22222222222222
    }, {
      title: 'hello',
      coordinates: {
        latitude: 3.149771,
        longitude: 101.655449 },
      image: "./Flag-1.png",
      anchor: { x: 0, y: 1 },
      key: 11111111
    }]
  }
};

function counter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case types.INCREMENT:
      return babelHelpers.extends({}, state, {
        count: state.count + 1
      });
    case types.DECREMENT:
      return babelHelpers.extends({}, state, {
        count: state.count - 1
      });
    case types.MAP_PULL:
      return babelHelpers.extends({}, state, {
        count: state.count - 100,
        locations: (0, _naviagoInterface2.default)()
      });
    default:
      return state;
  }
}