import { connect } from 'react-redux';

import { openCloseAll } from '../actions';
import Header from '../components/Header/Header';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  close: () => {
    dispatch(openCloseAll());
  },
});

const ActiveHeader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default ActiveHeader;
