import { connect } from 'react-redux';

import { changeSearch } from '../actions';
import SearchInput from '../components/SearchInput/SearchInput';

const mapStateToProps = state => ({
  search: state.get('search').text,
});

const mapDispatchToProps = dispatch => ({
  searchChange: (data) => {
    dispatch(changeSearch(data));
  },
});

const ActiveSearchInput = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);

export default ActiveSearchInput;
