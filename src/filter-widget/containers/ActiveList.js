import { connect } from 'react-redux';

import List from '../components/List/List';

import { toggleFilter, toggleFilters } from '../actions';
import { getFilteredFiltersIds, getSearchedAndSortedFilters } from '../selectors';

const mapStateToProps = state => ({
  filteredItems: getFilteredFiltersIds(state),
  items: getSearchedAndSortedFilters(state),
  selectedItems: state.get('selectedFilters'),
});

const mapDispatchToProps = {
  onCheck: toggleFilter,
  onAllChecked: toggleFilters,
};

const ActiveList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ActiveList;
