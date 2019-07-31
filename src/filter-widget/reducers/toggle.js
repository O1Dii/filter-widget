import { handleActions } from 'redux-actions';

import { toggleContext, toggleDimension } from '../actions';

function toggleCurrent(state, payload, name) {
  const payloadState = false; //! state[name][payload];
  return { ...state, [name]: { ...state[name], [payload]: payloadState } };
}

const toggle = handleActions(
  {
    [toggleContext]: (state, { payload }) => toggleCurrent(state, payload, 'context'),
    [toggleDimension]: (state, { payload }) => toggleCurrent(state, payload, 'dimension'),
  },
  {},
);

export default toggle;
