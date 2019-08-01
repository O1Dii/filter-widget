import { handleActions } from 'redux-actions';

import { toggleContext, toggleDimension, toggleFilter } from '../actions';

function toggleCurrent(state, payload, name) {
  if (!state[name]) {
    return { ...state, [name]: [payload] };
  }

  const arr = state[name];
  if (arr.includes(payload)) {
    arr.splice(arr.indexOf(payload), 1);
  } else {
    arr.push(payload);
  }

  return { ...state, [name]: arr };
}

const main = handleActions(
  {
    [toggleContext]: (state, { payload }) => toggleCurrent(state, payload, 'contexts'),
    [toggleDimension]: (state, { payload }) => toggleCurrent(state, payload, 'dimensions'),
    [toggleFilter]: (state, { payload }) => toggleCurrent(state, payload, 'filters'),
  },
  { contexts: [], dimensions: [], filters: [] },
);

export default main;
