import { connect } from 'react-redux';

import { swapWidgets } from '../actions';
import Filters from '../components/Filters/Filters';

const mapDispatchToProps = (dispatch, { widgetId }) => ({
  onEndDrag: (...args) => dispatch(swapWidgets(widgetId, ...args)),
});

const ActiveFilters = connect(
  () => ({}),
  mapDispatchToProps,
)(Filters);

export default ActiveFilters;
