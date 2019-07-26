import React from 'react';
import DropdownMenu from '../Dropdownmenu/Dropdownmenu.jsx';

class DropdownMenuContainer extends React.Component {
  render() {
    return (
      <div>
        <i className="fas fa-angle-down" />
        <DropdownMenu />
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

export default DropdownMenuContainer;
