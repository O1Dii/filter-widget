import React from 'react';

class Dropdown extends React.Component {
  render() {
    return (
      <select>
        {this.props.children
          && this.props.children.map((child) => {
            <option>child</option>;
          })}
      </select>
    );
  }
}

export default Dropdown;
