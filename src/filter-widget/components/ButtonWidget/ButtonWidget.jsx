import React from 'react';
import PropTypes from 'prop-types';

import ActiveFilters from '../../containers/ActiveFilters';

import './ButtonWidget.scss';
import Draggable from 'react-draggable';

class ButtonWidget extends React.PureComponent {
  state = {
    visible: true,
  };

  onClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    const { id } = this.props;

    return (
      <div className="open-button">
        <button onClick={this.onClick} type="button" className="open-button__button">
          Open/Close
        </button>

        <ActiveFilters
          className="open-button__filters"
          widgetId={id}
          visible={this.state.visible}
          onCloseClick={this.onClick}
        />
      </div>
    );
  }
}

ButtonWidget.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ButtonWidget;
