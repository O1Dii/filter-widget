import { connect } from 'react-redux';

import { toggleContext } from '../actions/index.js';
import Contexts from '../components/Contexts/Contexts';

const mapStateToProps = (state) => {
  const currentObj = state.toggle.context;
  const res = { values: currentObj };

  if (currentObj) {
    res.subtitle = Object.keys(currentObj)
      .filter(key => currentObj[key])
      .join(', ');
  }

  return res;
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
