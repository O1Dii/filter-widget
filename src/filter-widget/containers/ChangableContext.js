import { connect } from 'react-redux';

import { toggleContext } from '../../actions/index.js';

const mapDispatchToProps = dispatch => ({
  onContextChecked: (text) => {
    dispatch(toggleContext(text));
  },
});
