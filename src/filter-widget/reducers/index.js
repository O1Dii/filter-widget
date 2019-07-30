import { combineReducers } from 'redux';

import toggle from './toggle';
import search from './search';
import getData from './getData';

const filterWidget = combineReducers({
  toggle,
  search,
  getData,
});

export default filterWidget;
