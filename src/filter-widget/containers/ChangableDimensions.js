import { connect } from 'react-redux';

import { toggleDimension } from '../actions';
import DropdownBlock from '../components/DropdownBlock/DropdownBlock';

const mapStateToProps = (state) => {
  const currentData = state.get('dimensions');
  const currentSelectedContexts = state.get('selectedContexts');
  const currentSelectedData = state.get('selectedDimensions');
  const disabled = !currentSelectedContexts.size;

  const filteredData = currentData.filter(item => currentSelectedContexts.includes(item.contextId));

  return {
    disabled,
    title: 'dimensions',
    items: filteredData,
    selectedItems: currentSelectedData,
  };
};

const mapDispatchToProps = {
  onChecked: toggleDimension,
};

const ChangableDimensions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownBlock);

export default ChangableDimensions;
