import { connect } from 'react-redux';

import { getContextsData, getDimensionsData, getFiltersData } from '../actions/index.js';
import Filters from '../components/Filters/Filters';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  componentMount: () => {
    dispatch(getContextsData());
    dispatch(getDimensionsData());
    dispatch(getFiltersData());
  },
});

const ActiveFilters = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);

export default ActiveFilters;
