import { connect } from 'react-redux';

import { matchChange, sortingChange } from '../actions';
import HintContainer from '../components/HintContainer/HintContainer';

const mapStateToProps = (state, { widgetId }) => ({
  chosenMatch: state.getIn([widgetId, 'searchMatch']),
  sortType: state.getIn([widgetId, 'sortType']),
});

const mapDispatchToProps = (dispatch, { widgetId }) => ({
  onMatchChange: (...args) => dispatch(matchChange(widgetId, ...args)),
  onSortingChange: (...args) => dispatch(sortingChange(widgetId, ...args)),
});

const ActiveSearchFilters = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HintContainer);

export default ActiveSearchFilters;
