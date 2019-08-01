import { connect } from 'react-redux';

import { matchChange, sortingChange } from '../actions';
import HintContainer from '../components/HintContainer/HintContainer';

const mapStateToProps = state => ({
  chosenMatch: state.get('search').match,
  reverse: state.get('search').sortingReverse,
});

const mapDispatchToProps = dispatch => ({
  matchChange: (data) => {
    dispatch(matchChange(data));
  },
  sortingChange: (data) => {
    if (data === 'A-Z') {
      dispatch(sortingChange(true));
    } else {
      dispatch(sortingChange(false));
    }
  },
});

const ActiveSearchFilters = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HintContainer);

export default ActiveSearchFilters;
