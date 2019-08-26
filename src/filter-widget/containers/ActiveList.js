import { connect } from 'react-redux';

import List from '../components/List/List';

import { toggleFilter, toggleFilters } from '../actions';
import { getFilteredFiltersIds, getSearchedAndSortedFilters } from '../selectors';

const mapStateToProps = state => ({
  filteredFilters: getFilteredFiltersIds(state),
  visibleFilters: getSearchedAndSortedFilters(state),
  selectedFilters: state.get('selectedFilters'),
});

const mapDispatchToProps = {
  onCheck: toggleFilter,
  onAllCheck: toggleFilters,
};

const ActiveList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ActiveList;
