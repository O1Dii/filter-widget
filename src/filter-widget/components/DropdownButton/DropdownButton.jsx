import React from 'react';
import PropTypes from 'prop-types';

import './DropdownButton.scss';

class DropdownButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.openCloseDropdown = this.openCloseDropdown.bind(this);
  }

  openCloseDropdown() {
    const { dropdownId, openClose } = this.props;
    openClose(dropdownId);
  }

  render() {
    const { title } = this.props;

    return (
      <button type="button" className="dropdown-button" onClick={this.openCloseDropdown}>
        <i className="dropdown-button__arrow fas fa-angle-down" />
        {title}
      </button>
    );
  }
}

DropdownButton.propTypes = {
  title: PropTypes.string.isRequired,
  dropdownId: PropTypes.string.isRequired,
  openClose: PropTypes.func.isRequired,
};

export default DropdownButton;
