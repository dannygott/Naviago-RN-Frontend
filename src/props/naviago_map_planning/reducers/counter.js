import * as types from '../actions/actionTypes';
import locationsPull from '../api/naviagoInterface'
const initialState = {
  count: 0,
    locations:{markers: [{
        title: "hello",
        coordinates: {
          latitude: 3.148561,
          longitude: 101.652778,},
        key: 22222222222222
      },
      {
        title: 'hello',
        coordinates: {
          latitude: 3.149771,
          longitude: 101.655449 },
        image:"./Flag-1.png",
        anchor: { x: 0, y: 1, },
        key : 11111111  
      }],
    }
  }


export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case types.MAP_PULL:
    return{
        ...state,
        count: state.count - 100,
        locations : locationsPull()
      };
    case types.LOCATION_ADD:
    return{
        ...state,

    }
    default:
      return state;
  }
}
