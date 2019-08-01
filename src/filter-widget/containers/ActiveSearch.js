import { connect } from 'react-redux';

import Search from '../components/Search/Search';

const mapStateToProps = state => ({
  disabled: !state.get('selectedData').dimensions.length,
});

const ActiveSearch = connect(mapStateToProps)(Search);

export default ActiveSearch;
