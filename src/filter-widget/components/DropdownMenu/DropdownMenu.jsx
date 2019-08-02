import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../Dropdown/Dropdown';

import './DropdownMenu.scss';

class DropdownMenu extends React.PureComponent {
  render() {
    const {
      title, subtitle, children, dropdownId, dropdownClass,
    } = this.props;

    return (
      <div className="dropdown-menu">
        <Dropdown dropdownId={dropdownId} title={title} dropdownClass={dropdownClass}>
          {children}
        </Dropdown>
        <p className="dropdown-menu__subtitle">{subtitle}</p>
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.array]).isRequired,
  dropdownId: PropTypes.string.isRequired,
  dropdownClass: PropTypes.string.isRequired,
};

export default DropdownMenu;
