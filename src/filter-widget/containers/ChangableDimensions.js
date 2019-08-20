import { connect } from 'react-redux';

import { toggleDimension } from '../actions';
import Contexts from '../components/Contexts/Contexts';

const mapStateToProps = (state) => {
  const currentData = state.get('dimensions');
  const currentSelectedContexts = state.get('selectedContexts');
  const currentSelectedData = state.get('selectedDimensions');

  const filteredData = currentData.filter(([index, item]) => currentSelectedContexts.includes(item.contextId));

  return {
    title: 'dimensions',
    data: filteredData,
    selectedData: currentSelectedData,
  };
};

const mapDispatchToProps = dispatch => ({
  onChecked: (id) => {
    dispatch(toggleDimension(id));
  },
});

const ChangableDimensions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contexts);

export default ChangableDimensions;
