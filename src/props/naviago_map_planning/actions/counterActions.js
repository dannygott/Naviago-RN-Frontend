import * as types from './actionTypes';
import * as API from '../api/naviagoInterface'

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
export function mapPull() {
  
  return {
    type : types.MAP_PULL,
    locations : API.locationsPull()
  }
}
