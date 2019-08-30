import { connect } from 'react-redux';

import Search from '../components/Search/Search';

const mapStateToProps = (state, { widgetId }) => ({
  isDisabled: !state.getIn([widgetId, 'selectedDimensions']).count(),
});

const ActiveSearch = connect(mapStateToProps)(Search);

export default ActiveSearch;
