import { handleActions } from 'redux-actions';

import { toggleContext, toggleDimension } from '../actions/index';

function toggleCurrent(state, payload, name) {
  let payloadState = state[name] && state[name][payload] !== undefined ? state[name][payload] : false;

  payloadState = !payloadState;
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
