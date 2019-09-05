import { connect } from 'react-redux';

import { swapWidgets } from '../actions';
import Filters from '../components/DraggableFilters/DraggableFilters';

const mapDispatchToProps = (dispatch, { widgetId }) => ({
  onEndDrag: (...args) => dispatch(swapWidgets(widgetId, ...args)),
});

const DraggableFilters = connect(
  () => ({}),
  mapDispatchToProps,
)(Filters);

export default DraggableFilters;
