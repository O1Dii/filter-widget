import { TOGGLE_DIMENSION } from '../types';

const dimensions = (state, action) => {
  if (!state) {
    return {};
  }

  switch (action.type) {
    case TOGGLE_DIMENSION:
      return [...state];
    default:
      return state;
  }
};

export default dimensions;
