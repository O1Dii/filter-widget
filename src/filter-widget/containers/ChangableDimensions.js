import { connect } from 'react-redux';

import { checkDimension, uncheckDimensionWithFilters } from '../actions';
import DropdownBlock from '../components/DropdownBlock/DropdownBlock';
import { getFilteredDimensions } from '../selectors';

const mapStateToProps = state => ({
  isDisabled: !state.get('selectedContexts').count(),
  title: 'dimensions',
  items: getFilteredDimensions(state),
  selectedItems: state.get('selectedDimensions'),
});

const mapDispatchToProps = {
  onCheck: checkDimension,
  onUncheck: uncheckDimensionWithFilters,
};

const ChangableDimensions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownBlock);

export default ChangableDimensions;
