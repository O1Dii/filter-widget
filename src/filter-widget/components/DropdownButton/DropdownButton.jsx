import React from 'react';
import PropTypes from 'prop-types';

import './DropdownButton.scss';

class DropdownButton extends React.PureComponent {
  render() {
    const { title, openClose } = this.props;

    return (
      <button type="button" className="dropdown-button" onClick={openClose}>
        <i className="dropdown-button__arrow fas fa-angle-down" />
        {title}
      </button>
    );
  }
}

DropdownButton.propTypes = {
  title: PropTypes.string.isRequired,
  openClose: PropTypes.func.isRequired,
};

export default DropdownButton;
