import { combineReducers } from 'redux';

import toggle from './toggle';
import search from './search';

const filterWidget = combineReducers({
  toggle,
  search,
});

export default filterWidget;
