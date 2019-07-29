import { combineReducers } from 'redux';
import { TYPE } from '../types';

const red = (state, action) => {
  switch (action.type) {
    case TYPE:
      return [...state];
    default:
      return state;
  }
};

export default red;
