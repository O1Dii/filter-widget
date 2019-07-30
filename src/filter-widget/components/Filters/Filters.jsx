import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header.jsx';
import Search from '../Search/Search.jsx';
import Footer from '../Footer/Footer.jsx';
import './Filters.scss';
import ChangableContext from '../../containers/ChangableContext';
import ChangableDimensions from '../../containers/ChangableDimensions';

class Filters extends React.PureComponent {
  componentDidMount() {
    const { componentMount } = this.props;
    componentMount();
  }

  render() {
    const { className } = this.props;

    return (
      <div className={`filters ${className}`}>
        <Header />
        <ChangableContext />
        <ChangableDimensions />
        <Search />
        <Footer className="filters__footer" />
      </div>
    );
  }
}

Filters.propTypes = {
  className: PropTypes.string,
  componentMount: PropTypes.func.isRequired,
};

Filters.defaultProps = {
  className: '',
};

export default Filters;
