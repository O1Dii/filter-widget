import React from 'react';
import DropdownMenu from './dropdownmenu';

class DropdownMenuContainer extends React.Component {
  render() {
    return (
      <div>
        <img />
        <DropdownMenu />
        <p>{this.props.subtitle}</p>
      </div>
    );
  }
}

export default DropdownMenuContainer;
