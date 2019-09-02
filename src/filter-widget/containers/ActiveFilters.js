import { connect } from 'react-redux';

import { getAllData, swapWidgets } from '../actions';
import Filters from '../components/Filters/Filters';

const mapDispatchToProps = (dispatch, { widgetId }) => ({
  onMount: (...args) => dispatch(getAllData(widgetId, ...args)),
  onEndDrag: (...args) => dispatch(swapWidgets(widgetId, ...args)),
});

const ActiveFilters = connect(
  () => ({}),
  mapDispatchToProps,
)(Filters);

export default ActiveFilters;
