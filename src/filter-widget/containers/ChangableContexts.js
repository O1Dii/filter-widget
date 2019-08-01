import { connect } from 'react-redux';

import { toggleContext } from '../actions';
import Contexts from '../components/Contexts/Contexts';

const mapStateToProps = (state) => {
  const currentData = state.get('data').contexts;
  const currentSelectedData = state.get('selectedData').contexts || [];
  const open = state.get('open');

  if (!currentData) {
    return { dropdownClass: open && open[1] ? 'open' : '' };
  }

  const values = Object.values(currentData).map(item => ({
    id: item.id,
    name: item.name,
    val: Object.values(currentSelectedData).includes(item.id),
  }));

  return {
    values,
    subtitle: currentSelectedData
      .map(item => Object.values(currentData).filter(({ id }) => id === item)[0].name)
      .join(', '),
    dropdownClass: open && open[1] ? 'open' : '',
  };
};

const mapDispatchToProps = dispatch => ({
  onContextChecked: (id) => {
    dispatch(toggleContext(id));
  },
});

const ChangableContexts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contexts);

export default ChangableContexts;
