import { connect } from 'react-redux';

import { changeSearchWithFiltersUncheck } from '../actions';
import SearchInput from '../components/SearchInput/SearchInput';

const mapStateToProps = (state, { widgetId }) => ({
  searchText: state.getIn([widgetId, 'searchText']),
});

const mapDispatchToProps = (dispatch, { widgetId }) => ({
  onSearchTextChange: (...args) => dispatch(changeSearchWithFiltersUncheck(widgetId, ...args)),
});

const ActiveSearchInput = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchInput);

export default ActiveSearchInput;
