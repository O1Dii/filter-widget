import { connect } from 'react-redux';

import List from '../components/List/List';

import {
  checkFilter, uncheckFilter, checkAllFilters, uncheckAllFilters,
} from '../actions';
import { getSearchedSortedFilters, getAllChecked } from '../selectors';

const mapStateToProps = state => ({
  visibleFilters: getSearchedSortedFilters(state),
  selectedFilters: state.get('selectedFilters'),
  allChecked: getAllChecked(state),
});

const mapDispatchToProps = {
  onCheck: checkFilter,
  onUncheck: uncheckFilter,
  onAllCheck: checkAllFilters,
  onAllUncheck: uncheckAllFilters,
};

const ActiveList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ActiveList;
