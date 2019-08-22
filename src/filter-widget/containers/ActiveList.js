import { connect } from 'react-redux';

import List from '../components/List/List';

import { SORTING_ASC } from '../constants';
import { filters, reverseSort } from '../utils';
import { toggleFilter, toggleFilters } from '../actions';

function sort(items, sortType) {
  if (sortType === SORTING_ASC) {
    return items.sort();
  }

  return items.sort(reverseSort);
}

const mapStateToProps = (state) => {
  const currentFilters = state.get('filters');
  const currentSelectedDimensions = state.get('selectedDimensions');
  const currentSelectedFilters = state.get('selectedFilters');
  const searchText = state.get('searchText');
  const searchMatch = state.get('searchMatch');
  const sortType = state.get('sortType');

  let filteredItems = currentFilters.filter(item => currentSelectedDimensions.includes(item.dimensionId));

  filteredItems = filteredItems.filter(({ name }) => filters[searchMatch](name, searchText));

  const allChecked = currentSelectedFilters.count() === filteredItems.count();

  filteredItems = sort(filteredItems, sortType);

  return {
    items: filteredItems,
    allChecked,
    selectedItems: currentSelectedFilters,
  };
};

const mapDispatchToProps = {
  onChecked: toggleFilter,
  onAllChecked: toggleFilters,
};

const ActiveList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ActiveList;
