import { connect } from 'react-redux';

import { changeSearchWithFiltersUncheck } from '../actions';
import SearchInput from '../components/SearchInput/SearchInput';

const mapStateToProps = state => ({
  searchText: state.get('searchText'),
});

const mapDispatchToProps = {
  onSearchTextChange: changeSearchWithFiltersUncheck,
};

const ActiveSearchInput = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);

export default ActiveSearchInput;
