import { connect } from 'react-redux';

import { changeSearchInput } from '../actions';
import SearchInput from '../components/SearchInput/SearchInput';

const mapStateToProps = state => ({
  searchText: state.get('searchText'),
});

const mapDispatchToProps = {
  onSearchTextChange: changeSearchInput,
};

const ActiveSearchInput = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);

export default ActiveSearchInput;
