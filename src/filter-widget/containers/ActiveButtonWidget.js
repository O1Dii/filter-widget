import { connect } from 'react-redux';

import { openCloseAll } from '../actions';
import ButtonWidget from '../components/ButtonWidget/ButtonWidget';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  openClose: openCloseAll,
};

const ActiveButtonWidget = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonWidget);

export default ActiveButtonWidget;
