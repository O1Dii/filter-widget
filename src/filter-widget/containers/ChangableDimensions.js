import { connect } from 'react-redux';

import { toggleDimension } from '../actions';
import Contexts from '../components/Contexts/Contexts';

const mapStateToProps = (state) => {
  const currentData = state.get('dimensions');
  const currentSelectedContexts = state.get('selectedContexts');
  const currentSelectedData = state.get('selectedDimensions');
  const disabled = !currentSelectedContexts.size;

  const filteredData = currentData.filter(([index, item]) => currentSelectedContexts.includes(item.contextId));

  return {
    disabled,
    title: 'dimensions',
    data: filteredData,
    selectedData: currentSelectedData,
  };
};

const mapDispatchToProps = {
  onChecked: toggleDimension,
};

const ChangableDimensions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contexts);

export default ChangableDimensions;
