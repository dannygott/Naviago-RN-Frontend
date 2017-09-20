import * as types from './actionTypes';


export function increment() {
  return {
    type: types.INCREMENT
  };
}

export function decrement() {
  return {
    type: types.DECREMENT
  };
}
export function map_pull() {
  return {
    type : types.MAP_PULL,
  }
}
export function location_add() {
  return {
    type : types.LOCATION_ADD,
  }
}