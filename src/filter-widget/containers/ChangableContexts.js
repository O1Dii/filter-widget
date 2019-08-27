import { connect } from 'react-redux';

import { checkContext, uncheckContextWithDimensions } from '../actions';
import DropdownBlock from '../components/DropdownBlock/DropdownBlock';

const mapStateToProps = state => ({
  title: 'contexts',
  items: state.get('contexts'),
  selectedItems: state.get('selectedContexts'),
});

const mapDispatchToProps = {
  onCheck: checkContext,
  onUncheck: uncheckContextWithDimensions,
};

const ChangableContexts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownBlock);

export default ChangableContexts;
