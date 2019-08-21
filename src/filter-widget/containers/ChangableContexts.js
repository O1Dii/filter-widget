import { connect } from 'react-redux';

import { toggleContext } from '../actions';
import DropdownBlock from '../components/DropdownBlock/DropdownBlock';

const mapStateToProps = (state) => {
  const currentContexts = state.get('contexts');
  const currentSelectedContexts = state.get('selectedContexts');

  return {
    title: 'contexts',
    items: currentContexts,
    selectedItems: currentSelectedContexts,
  };
};

const mapDispatchToProps = {
  onChecked: toggleContext,
};

const ChangableContexts = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropdownBlock);

export default ChangableContexts;
