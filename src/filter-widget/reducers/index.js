import { combineReducers } from 'redux';

import contexts from './contexts';
import dimensions from './dimensions';

const filterWidget = combineReducers({
  contexts,
  dimensions,
});

export default filterWidget;
