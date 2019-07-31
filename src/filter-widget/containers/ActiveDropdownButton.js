import { connect } from 'react-redux';

import { openCloseDropdown } from '../actions';
import DropdownButton from '../components/DropdownButton/DropdownButton';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  openClose: (section) => {
    dispatch(openCloseDropdown(section));
  },
});

const ActiveDropdownButton = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownButton);

export default ActiveDropdownButton;
