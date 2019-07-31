import { connect } from 'react-redux';

import { toggleDimension } from '../actions';
import Dimensions from '../components/Dimensions/Dimensions';

const mapStateToProps = (state) => {
  const currentObj = state.get('data').dimensions;

  if (currentObj instanceof Array) {
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
