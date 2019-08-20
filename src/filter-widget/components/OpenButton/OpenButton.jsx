import React from 'react';
import Draggable from 'react-draggable';

import ActiveFilters from '../../containers/ActiveFilters';

import './OpenButton.scss';

class OpenButton extends React.PureComponent {
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

export default OpenButton;
