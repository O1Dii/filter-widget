import { combineReducers } from 'redux-immutable';

import selectedData from './selectedData';
import search from './search';
import data from './data';
import open from './open';

const filterWidget = combineReducers({
  selectedData,
  search,
  data,
  open,
});

export default filterWidget;
