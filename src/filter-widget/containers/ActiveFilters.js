import { connect } from 'react-redux';

import { getAllData } from '../actions';
import Filters from '../components/Filters/Filters';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  componentMount: () => {
    dispatch(getAllData());
  },
});

const ActiveFilters = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);

export default ActiveFilters;
