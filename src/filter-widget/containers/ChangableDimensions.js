import { connect } from 'react-redux';

import { toggleDimensionWithUncheck } from '../actions';
import DropdownBlock from '../components/DropdownBlock/DropdownBlock';
import { getFilteredDimensions } from '../selectors';

const mapStateToProps = state => ({
  isDisabled: !state.get('selectedContexts').count(),
  title: 'dimensions',
  items: getFilteredDimensions(state),
  selectedItems: state.get('selectedDimensions'),
});

const mapDispatchToProps = {
  onCheck: toggleDimensionWithUncheck,
};

const ChangableDimensions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownBlock);

export default ChangableDimensions;
