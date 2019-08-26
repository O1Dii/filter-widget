import { connect } from 'react-redux';

import { getAllData } from '../actions';
import Filters from '../components/Filters/Filters';

const mapStateToProps = state => ({
  visible: state.get('visible'),
});

const mapDispatchToProps = {
  onMount: getAllData,
};

const ActiveFilters = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);

export default ActiveFilters;
