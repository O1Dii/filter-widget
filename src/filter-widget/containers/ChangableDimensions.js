import { connect } from 'react-redux';

import { toggleDimension } from '../actions/index.js';
import Dimensions from '../components/Dimensions/Dimensions';

const mapStateToProps = (state) => {
  const currentObj = state.data.dimensions;

  if (currentObj) {
    return {
      values: Object.fromEntries(currentObj.map(item => [[item.name], true])),
      subtitle: currentObj.map(item => item.name).join(', '),
    };
  }

  return {};
};

const mapDispatchToProps = dispatch => ({
  onDimensionChecked: (id) => {
    dispatch(toggleDimension(id));
  },
});

const ChangableContext = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dimensions);

export default ChangableContext;
