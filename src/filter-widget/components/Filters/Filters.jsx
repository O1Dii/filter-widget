import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Footer from '../Footer/Footer';

import ChangableContext from '../../containers/ChangableContexts';
import ChangableDimensions from '../../containers/ChangableDimensions';
import ActiveSearch from '../../containers/ActiveSearch';
import Header from '../Header/Header';

import './Filters.scss';

class Filters extends React.PureComponent {
  componentDidMount() {
    const { onMount } = this.props;
    onMount();
  }

  render() {
    const {
      className, visible, widgetId, onCloseClick,
    } = this.props;

    return (
      visible && (
        <div className={classNames('filters', className)}>
          <Header widgetId={widgetId} onCloseClick={onCloseClick} />
          <ChangableContext widgetId={widgetId} />
          <ChangableDimensions widgetId={widgetId} />
          <ActiveSearch widgetId={widgetId} />
          <Footer className="filters__footer" />
        </div>
      )
    );
  }
}

Filters.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  visible: PropTypes.bool.isRequired,
  onMount: PropTypes.func.isRequired,
  widgetId: PropTypes.string.isRequired,
};

Filters.defaultProps = {
  className: '',
};

export default Filters;
