import { combineReducers } from 'redux-immutable';

import selectedData from './selectedData';
import search from './search';
import data from './data';
import openMenus from './openMenus';
import hidden from './hidden';

const filterWidget = combineReducers({
  selectedData,
  search,
  data,
  openMenus,
  hidden,
});

export default filterWidget;
