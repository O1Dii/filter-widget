import { connect } from 'react-redux';

import { toggleDimension } from '../actions';
import Dimensions from '../components/Dimensions/Dimensions';

const mapStateToProps = (state) => {
  const currentData = state.get('data').dimensions;
  const currentSelectedContexts = state.get('selectedData').contexts || [];
  const currentSelectedData = state.get('selectedData').dimensions || [];
  const open = state.get('open');

  if (!currentData) {
    return {
      disabled: !currentSelectedContexts.length,
      dropdownClass: open && open[2] ? 'open' : '',
    };
  }

  const filteredData = Object.values(currentData)
    .filter(item => currentSelectedContexts.includes(item.contextId));

  const values = Object.values(filteredData).map(item => ({
    id: item.id,
    name: item.name,
    val: Object.values(currentSelectedData).includes(item.id),
  }));

  return {
    disabled: !currentSelectedContexts.length,
    values,
    subtitle: currentSelectedData
      .map(item => Object.values(currentData).filter(({ id }) => id === item)[0].name)
      .join(', '),
    dropdownClass: open && open[2] ? 'open' : '',
  };
};

const mapDispatchToProps = dispatch => ({
  onDimensionChecked: (id) => {
    dispatch(toggleDimension(id));
  },
});

const ChangableDimensions = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dimensions);

export default ChangableDimensions;
