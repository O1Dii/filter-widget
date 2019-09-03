import { connect } from 'react-redux';

import { swapWidgets, getAllData } from '../actions';
import Filters from '../components/Filters/Filters';

const mapDispatchToProps = (dispatch, { widgetId }) => ({
  onEndDrag: (...args) => dispatch(swapWidgets(widgetId, ...args)),
  onMount: (...args) => dispatch(getAllData(widgetId, ...args)),
});

const ActiveFilters = connect(
  () => ({}),
  mapDispatchToProps,
)(Filters);

export default ActiveFilters;
