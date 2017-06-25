import * as types from './actionTypes';
import locationsPull from '../api/naviagoInterface'

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
  jaun = locationsPull()
  console.log(jaun)
  return {
    type : types.MAP_PULL,
    locations : locationsPull()
  }
}
