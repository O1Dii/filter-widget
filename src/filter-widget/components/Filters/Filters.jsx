import React from 'react';
import Header from '../Header/Header.jsx';
import Contexts from '../Contexts/Contexts.jsx';
import Dimensions from '../Dimensions/Dimensions.jsx';
import Search from '../Search/Search.jsx';
import Footer from '../Footer/Footer.jsx';

class Filters extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Contexts />
        <Dimensions />
        <Search />
        <Footer />
      </>
    );
  }
}

export default Filters;
