import { connect } from 'react-redux';

import { matchChange, sortingChange } from '../actions';
import HintContainer from '../components/HintContainer/HintContainer';

const mapStateToProps = state => ({
  chosenMatch: state.get('searchMatch'),
  reverse: state.get('sortType'),
});

const mapDispatchToProps = dispatch => ({
  matchChange: (data) => {
    dispatch(matchChange(data));
  },
  sortingChange: (data) => {
    dispatch(sortingChange(data));
  },
});

const ActiveSearchFilters = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HintContainer);

export default ActiveSearchFilters;
