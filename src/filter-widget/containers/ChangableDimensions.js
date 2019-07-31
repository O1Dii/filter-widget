import { connect } from 'react-redux';

import { toggleDimension } from '../actions';
import Dimensions from '../components/Dimensions/Dimensions';

const mapStateToProps = (state) => {
  const currentData = state.get('data').dimensions;
  const currentSelectedData = state.get('selectedData').dimensions || [];

  if (currentData) {
    const values = Object.values(currentData).map(item => ({
      id: item.id,
      name: item.name,
      val: Object.values(currentSelectedData).includes(item.id),
    }));

    return {
      values,
      subtitle: currentSelectedData.map(item => currentData[item].name).join(', '),
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
