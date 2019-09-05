import { connect } from 'react-redux';

import { getAllData } from '../actions';
import Filters from '../components/Filters/Filters';

const mapDispatchToProps = (dispatch, { widgetId }) => ({
  onMount: (...args) => dispatch(getAllData(widgetId, ...args)),
});

const StaticFilters = connect(
  () => ({}),
  mapDispatchToProps,
)(Filters);

export default StaticFilters;
