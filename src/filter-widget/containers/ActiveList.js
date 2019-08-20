import { connect } from 'react-redux';

import List from '../components/List/List';

import { SORTING_ASC } from '../constants';
import { filters, reverseSort } from '../utils';
import { toggleFilter } from '../actions';

const mapStateToProps = (state) => {
  const currentData = state.get('filters');
  const currentSelectedDimensions = state.get('selectedDimensions');
  const currentSelectedData = state.get('selectedFilters');
  const searchText = state.get('searchText');
  const searchMatch = state.get('searchMatch');
  const sortType = state.get('sortType');

  if (!currentData) {
    return state;
  }

  let filteredData = currentData.filter(([index, item]) => currentSelectedDimensions.includes(item.dimensionId));

  filteredData = filters[searchMatch](filteredData, searchText);

  if (sortType === SORTING_ASC) {
    filteredData = filteredData.sort();
  } else {
    filteredData = filteredData.sort(reverseSort);
  }

  return {
    data: filteredData,
    selectedData: currentSelectedData,
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
