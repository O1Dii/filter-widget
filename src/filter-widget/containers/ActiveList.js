import { connect } from 'react-redux';

import List from '../components/List/List';

import {
  checkFilter, uncheckFilter, checkAllFilters, uncheckAllFilters,
} from '../actions';
import { getSearchedSortedFilters, getAllChecked } from '../selectors';

const mapStateToProps = (state, { widgetId }) => ({
  visibleFilters: getSearchedSortedFilters(state, widgetId),
  selectedFilters: state.getIn([widgetId, 'selectedFilters']),
  allChecked: getAllChecked(state, widgetId),
});

const mapDispatchToProps = (dispatch, props) => ({
  onCheck: (...args) => dispatch(checkFilter(props.widgetId, ...args)),
  onUncheck: (...args) => dispatch(uncheckFilter(props.widgetId, ...args)),
  onAllCheck: (...args) => dispatch(checkAllFilters(props.widgetId, ...args)),
  onAllUncheck: (...args) => dispatch(uncheckAllFilters(props.widgetId, ...args)),
});

const ActiveList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ActiveList;
