import { connect } from 'react-redux';

import { toggleContext } from '../actions';
import Contexts from '../components/Contexts/Contexts';

const mapStateToProps = (state) => {
  const currentObj = state.get('data').contexts;

  if (currentObj instanceof Array) {
    return {
      values: Object.fromEntries(currentObj.map(item => [[item.name], true])),
      subtitle: currentObj.map(item => item.name).join(', '),
    };
  }

  return {};
};

const mapDispatchToProps = dispatch => ({
  onContextChecked: (id) => {
    dispatch(toggleContext(id));
  },
});

const ChangableContext = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contexts);

export default ChangableContext;
