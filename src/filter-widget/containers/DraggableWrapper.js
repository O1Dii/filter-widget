import { connect } from 'react-redux';

import { swapWidgets } from '../actions';
import Wrapper from '../components/DraggableWrapper/DraggableWrapper';

const mapDispatchToProps = (dispatch, { widgetId }) => ({
  onEndDrag: (...args) => dispatch(swapWidgets(widgetId, ...args)),
});

const DraggableWrapper = connect(
  () => ({}),
  mapDispatchToProps,
)(Wrapper);

export default DraggableWrapper;
