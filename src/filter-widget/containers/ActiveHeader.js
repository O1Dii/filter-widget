import { connect } from 'react-redux';

import { openCloseAll } from '../actions';
import Header from '../components/Header/Header';

const mapDispatchToProps = {
  onCloseClick: openCloseAll,
};

const ActiveHeader = connect(
  () => ({}),
  mapDispatchToProps,
)(Header);

export default ActiveHeader;
