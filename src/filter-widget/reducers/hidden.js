import { handleAction } from 'redux-actions';

import { openCloseAll } from '../actions';

const hidden = handleAction(
  openCloseAll,
  state => !state,
  false,
);

export default hidden;
