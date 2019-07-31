import React from 'react';
import PropTypes from 'prop-types';

import './Dropdown.scss';

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.openCloseDropdown = this.openCloseDropdown.bind(this);
  }

  openCloseDropdown() {
    const { dropdownId, openClose } = this.props;
    openClose(dropdownId);
  }

  render() {
    const {
      open, title, children, dropdownId,
    } = this.props;

    if (open[dropdownId]) {
      this.dropdownClass = 'open';
    } else {
      this.dropdownClass = '';
    }

    return (
      <div className="dropdown">
        <i className="dropdown__arrow fas fa-angle-down" />
        <button type="button" className="dropdown__button" onClick={this.openCloseDropdown}>
          {title}
        </button>
        <div className={`dropdown__content ${this.dropdownClass}`}>{children}</div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  dropdownId: PropTypes.string.isRequired,
  openClose: PropTypes.func.isRequired,
  open: PropTypes.objectOf(PropTypes.bool).isRequired,
};

export default Dropdown;
