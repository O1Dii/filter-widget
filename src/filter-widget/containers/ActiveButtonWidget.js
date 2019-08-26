import { connect } from 'react-redux';

import { openCloseAll } from '../actions';
import ButtonWidget from '../components/ButtonWidget/ButtonWidget';

const mapDispatchToProps = {
  openClose: openCloseAll,
};

const ActiveButtonWidget = connect(
  () => ({}),
  mapDispatchToProps,
)(ButtonWidget);

export default ActiveButtonWidget;
