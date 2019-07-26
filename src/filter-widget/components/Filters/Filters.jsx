import React from 'react';
import Header from '../Header/Header.jsx';
import Contexts from '../Contexts/Contexts.jsx';
import Dimensions from '../Dimensions/Dimensions.jsx';
import Search from '../Search/Search.jsx';
import Footer from '../Footer/Footer.jsx';
import './Filters.scss';

class Filters extends React.PureComponent {
  render() {
    return (
      <div className="filters">
        <Header />
        <Contexts />
        <Dimensions />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default Filters;
