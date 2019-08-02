import { connect } from 'react-redux';

import List from '../components/List/List';

import { filters } from '../utils';

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

  filteredData.sort();

  if (sortType === 'Z-A') {
    filteredData = filteredData.reverse();
  }

  return {
    data: filteredData,
    selectedData: currentSelectedData,
  };
};

const mapDispatchToProps = () => ({});

const ActiveList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ActiveList;
