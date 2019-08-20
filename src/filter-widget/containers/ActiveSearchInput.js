import { connect } from 'react-redux';

import { changeSearch } from '../actions';
import SearchInput from '../components/SearchInput/SearchInput';

const mapStateToProps = state => ({
  search: state.get('searchText'),
});

const mapDispatchToProps = {
  searchChange: changeSearch,
};

const ActiveSearchInput = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);

export default ActiveSearchInput;
