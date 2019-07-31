import { connect } from 'react-redux';

import Dropdown from '../components/Dropdown/Dropdown';

const mapStateToProps = state => ({ open: state.get('open') });

const mapDispatchToProps = () => ({});

const OpeningDropdown = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dropdown);

export default OpeningDropdown;
