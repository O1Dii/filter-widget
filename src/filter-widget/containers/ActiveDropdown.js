import { connect } from 'react-redux';

import { openCloseDropdown } from '../actions';
import Dropdown from '../components/Dropdown/Dropdown';

const mapStateToProps = state => ({ open: state.get('open') });

const mapDispatchToProps = dispatch => ({
  openClose: (section) => {
    dispatch(openCloseDropdown(section));
  },
});

const ActiveFilters = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dropdown);

export default ActiveFilters;
