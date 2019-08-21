import { connect } from 'react-redux';

import Search from '../components/Search/Search';

const mapStateToProps = state => ({
  isDisabled: !state.get('selectedDimensions').size,
});

const ActiveSearch = connect(mapStateToProps)(Search);

export default ActiveSearch;
