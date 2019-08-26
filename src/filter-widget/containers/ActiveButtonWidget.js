import { connect } from 'react-redux';

import { openCloseAll } from '../actions';
import ButtonWidget from '../components/ButtonWidget/ButtonWidget';

const mapDispatchToProps = {
  onClick: openCloseAll,
};

const ActiveButtonWidget = connect(
  () => ({}),
  mapDispatchToProps,
)(ButtonWidget);

export default ActiveButtonWidget;
