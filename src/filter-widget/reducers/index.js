import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  checkContext,
  checkDimension,
  checkFilter,
  uncheckContext,
  uncheckDimension,
  uncheckFilter,
  replaceSelectedFilters,
  uncheckAllFilters,
  uncheckDimensions,
  uncheckFilters,
  receiveContexts,
  receiveDimensions,
  receiveFilters,
  changeSearchInput,
  matchChange,
  sortingChange,
  createWidget,
  closeWidget,
  swapWidgets,
} from '../actions';
import { PARTIAL_MATCH, SORTING_ASC } from '../constants';
import { getNextId } from '../utils';

const initialWidgetState = {
  contexts: Immutable.Map(),
  dimensions: Immutable.Map(),
  filters: Immutable.Map(),
  selectedContexts: Immutable.List(),
  selectedDimensions: Immutable.List(),
  selectedFilters: Immutable.List(),
  searchText: '',
  searchMatch: PARTIAL_MATCH,
  sortType: SORTING_ASC,
};

const main = handleActions(
  {
    [createWidget]: state => state.set(getNextId(), Immutable.Map(initialWidgetState)),
    [closeWidget]: (state, { payload }) => state.delete(payload.id),

    [checkContext]: (state, { payload }) => state.updateIn([payload.id, 'selectedContexts'], oldItems => oldItems.push(payload.contextId)),
    [uncheckContext]: (state, { payload }) => state.updateIn([payload.id, 'selectedContexts'], oldItems => oldItems.delete(oldItems.indexOf(payload.contextId))),

    [checkDimension]: (state, { payload }) => state.updateIn([payload.id, 'selectedDimensions'], oldItems => oldItems.push(payload.dimensionId)),
    [uncheckDimension]: (state, { payload }) => state.updateIn([payload.id, 'selectedDimensions'], oldItems => oldItems.delete(oldItems.indexOf(payload.dimensionId))),

    [checkFilter]: (state, { payload }) => state.updateIn([payload.id, 'selectedFilters'], oldItems => oldItems.push(payload.filterId)),
    [uncheckFilter]: (state, { payload }) => state.updateIn([payload.id, 'selectedFilters'], oldItems => oldItems.delete(oldItems.indexOf(payload.filterId))),

    [replaceSelectedFilters]: (state, { payload }) => state.setIn([payload.id, 'selectedFilters'], payload.newFilters),
    [uncheckAllFilters]: (state, { payload }) => state.setIn([payload.id, 'selectedFilters'], Immutable.List()),

    [uncheckFilters]: (state, { payload }) => state.updateIn([payload.id, 'selectedFilters'], oldItems => oldItems.filterNot(item => payload.filtersIds.includes(item))),
    [uncheckDimensions]: (state, { payload }) => state.updateIn([payload.id, 'selectedDimensions'], oldItems => oldItems.filterNot(item => payload.dimensionsIds.includes(item))),

    [receiveContexts]: (state, { payload }) => state.setIn(
      [payload.id, 'contexts'],
      Immutable.Map(payload.data.map(item => [item.get('id'), item])),
    ),
    [receiveDimensions]: (state, { payload }) => state.setIn(
      [payload.id, 'dimensions'],
      Immutable.Map(payload.data.map(item => [item.get('id'), item])),
    ),
    [receiveFilters]: (state, { payload }) => state.setIn(
      [payload.id, 'filters'],
      Immutable.Map(payload.data.map(item => [item.get('id'), item])),
    ),

    [changeSearchInput]: (state, { payload }) => state.setIn([payload.id, 'searchText'], payload.searchText),
    [matchChange]: (state, { payload }) => state.setIn([payload.id, 'searchMatch'], payload.match),
    [sortingChange]: (state, { payload }) => state.setIn([payload.id, 'sortType'], payload.sortType),

    [swapWidgets]: (state, { payload }) => {
      const temp = state.get(payload.id);

      return state
        .update(payload.id, () => state.get(payload.swapId))
        .update(payload.swapId, () => temp);
    },
  },
  Immutable.Map(),
);

export default main;
