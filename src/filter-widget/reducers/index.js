import { combineReducers } from 'redux';

import toggle from './toggle';
import search from './search';
import data from './data';

const filterWidget = combineReducers({
  toggle,
  search,
  data,
});

export default filterWidget;
