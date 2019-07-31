import React from 'react';
import PropTypes from 'prop-types';

import SwitchableDropdown from '../../containers/SwitchableDropdown';

import './DropdownMenu.scss';

class DropdownMenu extends React.PureComponent {
  render() {
    const {
      title, subtitle, children, dropdownId, dropdownClass,
    } = this.props;

    return (
      <div className="dropdown-menu">
        <SwitchableDropdown dropdownId={dropdownId} title={title} dropdownClass={dropdownClass}>
          {children}
        </SwitchableDropdown>
        <p className="dropdown-menu__subtitle">{subtitle}</p>
      </div>
    );
  }
}

DropdownMenu.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  dropdownId: PropTypes.string.isRequired,
  dropdownClass: PropTypes.string.isRequired,
};

export default DropdownMenu;
