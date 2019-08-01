import { connect } from 'react-redux';

import { openCloseDropdown } from '../actions';
import Dropdown from '../components/Dropdown/Dropdown';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  openClose: (section, prop) => {
    dispatch(openCloseDropdown(section, prop));
  },
});
const SwitchableDropdown = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dropdown);

export default SwitchableDropdown;
