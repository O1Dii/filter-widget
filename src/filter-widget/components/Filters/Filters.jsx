import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer/Footer';

import ChangableContext from '../../containers/ChangableContexts';
import ChangableDimensions from '../../containers/ChangableDimensions';
import ActiveSearch from '../../containers/ActiveSearch';
import ActiveHeader from '../../containers/ActiveHeader';

import './Filters.scss';

class Filters extends React.PureComponent {
  componentDidMount() {
    const { componentMount } = this.props;
    componentMount();
  }

  render() {
    const { className, hidden } = this.props;

    const additionalClassName = hidden ? 'hidden' : '';

    return (
      <div className={`filters ${className} ${additionalClassName}`}>
        <ActiveHeader />
        <ChangableContext />
        <ChangableDimensions />
        <ActiveSearch />
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
