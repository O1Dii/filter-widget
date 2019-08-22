import { connect } from 'react-redux';

import { toggleDimensionWithUncheck } from '../actions';
import DropdownBlock from '../components/DropdownBlock/DropdownBlock';

const mapStateToProps = (state) => {
  const currentData = state.get('dimensions');
  const currentSelectedContexts = state.get('selectedContexts');
  const currentSelectedData = state.get('selectedDimensions');
  const isDisabled = !currentSelectedContexts.count();

  const filteredData = currentData.filter(item => currentSelectedContexts.includes(item.contextId));

  return {
    isDisabled,
    title: 'dimensions',
    items: filteredData,
    selectedItems: currentSelectedData,
  };
};

const mapDispatchToProps = {
  onChecked: toggleDimensionWithUncheck,
};

const ChangableDimensions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownBlock);

export default ChangableDimensions;
