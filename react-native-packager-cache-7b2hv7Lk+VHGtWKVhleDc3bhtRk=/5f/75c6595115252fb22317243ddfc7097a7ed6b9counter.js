Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = counter;

var _actionTypes = require('../actions/actionTypes');

var types = _interopRequireWildcard(_actionTypes);

var _naviagoInterface = require('../api/naviagoInterface');

var _naviagoInterface2 = _interopRequireDefault(_naviagoInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
      return _extends({}, state, {
        count: state.count + 1
      });
    case types.DECREMENT:
      return _extends({}, state, {
        count: state.count - 1
      });
    case types.MAP_PULL:
      return _extends({}, state, {
        count: state.count - 100,
        locations: (0, _naviagoInterface2.default)()
      });
    default:
      return state;
  }
}