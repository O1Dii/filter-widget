import { connect } from 'react-redux';

import { checkContext, uncheckContextWithDimensions } from '../actions';
import DropdownBlock from '../components/DropdownBlock/DropdownBlock';

const mapStateToProps = (state, { widgetId }) => ({
  title: 'contexts',
  items: state.getIn([widgetId, 'contexts']),
  selectedItems: state.getIn([widgetId, 'selectedContexts']),
});

const mapDispatchToProps = (dispatch, { widgetId }) => ({
  onCheck: (...args) => dispatch(checkContext(widgetId, ...args)),
  onUncheck: (...args) => dispatch(uncheckContextWithDimensions(widgetId, ...args)),
});

const ChangableContexts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownBlock);

export default ChangableContexts;
