import { connect } from 'react-redux';

import { checkDimension, uncheckDimensionWithFilters } from '../actions';
import DropdownBlock from '../components/DropdownBlock/DropdownBlock';
import { getFilteredDimensions } from '../selectors';

const mapStateToProps = (state, { widgetId }) => ({
  isDisabled: !state.getIn([widgetId, 'selectedContexts']).count(),
  title: 'dimensions',
  items: getFilteredDimensions(state, widgetId),
  selectedItems: state.getIn([widgetId, 'selectedDimensions']),
});

const mapDispatchToProps = (dispatch, { widgetId }) => ({
  onCheck: (...args) => dispatch(checkDimension(widgetId, ...args)),
  onUncheck: (...args) => dispatch(uncheckDimensionWithFilters(widgetId, ...args)),
});

const ChangableDimensions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownBlock);

export default ChangableDimensions;
