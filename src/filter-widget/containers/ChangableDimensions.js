import { connect } from 'react-redux';

import { toggleDimension } from '../actions/index.js';
import Dimensions from '../components/Dimensions/Dimensions';

const mapStateToProps = (state) => {
  const currentObj = state.toggle.dimension;
  const res = { values: currentObj };

  if (currentObj) {
    res.subtitle = Object.keys(currentObj)
      .filter(key => currentObj[key])
      .join(', ');
  }

  return res;
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
