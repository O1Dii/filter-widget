import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Footer from '../Footer/Footer';

import ChangableContext from '../../containers/ChangableContexts';
import ChangableDimensions from '../../containers/ChangableDimensions';
import ActiveSearch from '../../containers/ActiveSearch';
import ActiveHeader from '../../containers/ActiveHeader';

import './Filters.scss';

class Filters extends React.PureComponent {
  componentDidMount() {
    const { onMount } = this.props;
    onMount();
  }

  render() {
    const { className } = this.props;

    return (
      <div className={classNames('filters', className)}>
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
  onMount: PropTypes.func.isRequired,
};

Filters.defaultProps = {
  className: '',
};

export default Filters;
