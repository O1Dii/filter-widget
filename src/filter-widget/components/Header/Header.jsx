import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div>
        <i className="fas fa-bars" />
        <h2>Filters</h2>
        <i className="fas fa-times" />
      </div>
    );
  }
}

export default Header;
