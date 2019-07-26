import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <i className="header__bars fas fa-bars" />
        <h2 className="header__title">Filters</h2>
        <i className="header__exit fas fa-times" />
      </div>
    );
  }
}

export default Header;
