import { connect } from 'react-redux';

import { toggleContext } from '../actions';
import Contexts from '../components/Contexts/Contexts';

const mapStateToProps = (state) => {
  const currentData = state.get('contexts');
  const currentSelectedData = state.get('selectedContexts');

  return {
    title: 'contexts',
    data: currentData,
    selectedData: currentSelectedData,
  };
};

const mapDispatchToProps = dispatch => ({
  onChecked: (id) => {
    dispatch(toggleContext(id));
  },
});

const ChangableContexts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contexts);

export default ChangableContexts;
