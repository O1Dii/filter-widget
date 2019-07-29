import { TOGGLE_CONTEXT } from '../types';

const contexts = (state, action) => {
  if (!state) {
    return {};
  }

  switch (action.type) {
    case TOGGLE_CONTEXT: {
      console.log(state, action);
      return [...state];
    }
    default:
      return state;
  }
};

export default contexts;
