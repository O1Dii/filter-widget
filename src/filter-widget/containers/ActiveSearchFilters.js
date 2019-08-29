import { connect } from 'react-redux';

import { matchChange, sortingChange } from '../actions';
import HintContainer from '../components/HintContainer/HintContainer';

const mapStateToProps = state => ({
  chosenMatch: state.get('searchMatch'),
  sortType: state.get('sortType'),
});

const mapDispatchToProps = {
  onMatchChange: matchChange,
  onSortingChange: sortingChange,
};

const ActiveSearchFilters = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HintContainer);

export default ActiveSearchFilters;
