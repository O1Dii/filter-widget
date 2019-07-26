import React from 'react';
import Dropdown from '../Dropdown/Dropdown.jsx';

class DropdownMenu extends React.Component {
  render() {
    return (
      <div>
        <i className="fas fa-angle-down" />
        <Dropdown />
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

export default DropdownMenu;
