import React from 'react';
import PropTypes from 'prop-types';

import ActiveDropdownButton from '../../containers/ActiveDropdownButton';

import './Dropdown.scss';

class Dropdown extends React.PureComponent {
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
        <ActiveDropdownButton title={title} dropdownId={dropdownId} />
        <div className={`dropdown__content ${this.dropdownClass}`}>{children}</div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  dropdownId: PropTypes.string.isRequired,
};

export default Dropdown;
