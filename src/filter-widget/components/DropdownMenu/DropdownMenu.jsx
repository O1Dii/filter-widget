import React from 'react';
import PropTypes from 'prop-types';

import ActiveDropdown from '../../containers/ActiveDropdown';

import './DropdownMenu.scss';

class DropdownMenu extends React.PureComponent {
  render() {
    const {
      title, subtitle, children, dropdownId,
    } = this.props;

    return (
      <div className="dropdown-menu">
        <ActiveDropdown className="dropdown-menu__dropdown" dropdownId={dropdownId} title={title}>
          {children}
        </ActiveDropdown>
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
};

export default DropdownMenu;
