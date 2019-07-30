import { connect } from 'react-redux';

import { getContextsData, getDimensionsData, getFiltersData } from '../actions/index.js';
import Filters from '../components/Filters/Filters';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({ componentMount: () => dispatch(getContextsData()) });

const ChangableContext = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);

export default ChangableContext;
