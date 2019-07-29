import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../Dropdown/Dropdown.jsx';
import './DropdownMenu.scss';

class DropdownMenu extends React.PureComponent {
  render() {
    const { title, subtitle, children } = this.props;

    return (
      <div className="dropdown-menu">
        <Dropdown className="dropdown-menu__dropdown" title={title}>
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
  children: PropTypes.node.isRequired,
};

export default DropdownMenu;
