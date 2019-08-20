import { connect } from 'react-redux';

import { openCloseAll } from '../actions';
import OpenButton from '../components/OpenButton/OpenButton';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  openClose: openCloseAll,
};

const ActiveOpenButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OpenButton);

export default ActiveOpenButton;
