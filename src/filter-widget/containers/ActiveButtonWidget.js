import { connect } from 'react-redux';

import { createWidget, closeWidget, getAllData } from '../actions';
import ButtonWidget from '../components/ButtonWidget/ButtonWidget';

const mapStateToProps = state => ({
  widgetsIds: state.keySeq(),
});

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(createWidget(id)),
  onCloseClick: id => dispatch(closeWidget(id)),
});

const ActiveButtonWidget = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonWidget);

export default ActiveButtonWidget;
