import React from 'react';

import Header from '../Header/Header.jsx';
import Contexts from '../Contexts/Contexts.jsx';
import Dimensions from '../Dimensions/Dimensions.jsx';
import Search from '../Search/Search.jsx';
import Footer from '../Footer/Footer.jsx';
import './Filters.scss';

class Filters extends React.PureComponent {
  render() {
    const { className } = this.props;

    return (
      <div className={`filters ${className}`}>
        <Header />
        <Contexts />
        <Dimensions />
        <Search />
        <Footer className="filters__footer" />
      </div>
    );
  }
}

export default Filters;
