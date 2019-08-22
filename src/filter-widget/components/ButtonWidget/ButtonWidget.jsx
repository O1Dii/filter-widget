import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

import ActiveFilters from '../../containers/ActiveFilters';

import './ButtonWidget.scss';

class ButtonWidget extends React.PureComponent {
  constructor(props) {
    super(props);
    this.openClose = this.openClose.bind(this);
  }

  openClose() {
    const { openClose } = this.props;
    openClose();
  }

  render() {
    return (
      <div className="open-button">
        <button onClick={this.openClose} type="button" className="open-button__button">
          Open/Close
        </button>

        <div>
          <ActiveFilters className="open-button__filters" />
        </div>
      </div>
    );
  }
}

ButtonWidget.propTypes = {
  openClose: PropTypes.func.isRequired,
};

export default ButtonWidget;
