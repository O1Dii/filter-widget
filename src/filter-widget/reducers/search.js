import { CHANGE_SEARCH } from '../types';

const contexts = (state, action) => {
  if (!state) {
    return {};
  }

  switch (action.type) {
    case CHANGE_SEARCH:
      return [...state];
    default:
      return state;
  }
};

export default contexts;
