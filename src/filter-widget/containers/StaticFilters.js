import { connect } from 'react-redux';

import { getAllData } from '../actions';
import StaticFilters from '../components/StaticFilters/StaticFilters';

const mapDispatchToProps = (dispatch, { widgetId }) => ({
  onMount: (...args) => dispatch(getAllData(widgetId, ...args)),
});

const Filters = connect(
  () => ({}),
  mapDispatchToProps,
)(StaticFilters);

export default Filters;
