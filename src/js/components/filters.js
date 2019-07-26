import React from 'react';
import Header from './header';
import Contexts from './contexts';
import Dimensions from './dimensions';
import Search from './search';
import Footer from './footer';

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
