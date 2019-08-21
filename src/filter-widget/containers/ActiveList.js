import { connect } from 'react-redux';

import List from '../components/List/List';

import { SORTING_ASC } from '../constants';
import { filters, reverseSort } from '../utils';
import { toggleFilter } from '../actions';

const mapStateToProps = (state) => {
  const currentFilters = state.get('filters');
  const currentSelectedDimensions = state.get('selectedDimensions');
  const currentSelectedFilters = state.get('selectedFilters');
  const searchText = state.get('searchText');
  const searchMatch = state.get('searchMatch');
  const sortType = state.get('sortType');

  let filteredItems = currentFilters.filter(item => currentSelectedDimensions.includes(item.dimensionId));

  filteredItems = filteredItems.filter(({ name }) => filters[searchMatch](name, searchText));

  if (sortType === SORTING_ASC) {
    filteredItems = filteredItems.sort();
  } else {
    filteredItems = filteredItems.sort(reverseSort);
  }

  return {
    items: filteredItems,
    selectedItems: currentSelectedFilters,
  };
};

const mapDispatchToProps = {
  onChecked: toggleFilter,
};

const ActiveList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ActiveList;
