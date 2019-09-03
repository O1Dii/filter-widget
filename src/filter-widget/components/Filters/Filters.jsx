import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ChangableContext from '../../containers/ChangableContexts';
import ChangableDimensions from '../../containers/ChangableDimensions';
import ActiveSearch from '../../containers/ActiveSearch';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Filters.scss';

class Filters extends React.PureComponent {
  componentDidMount() {
    const { onMount } = this.props;
    onMount();
  }

  render() {
    const {
      className, widgetId, onCloseClick, connectDragSource,
    } = this.props;

    return (
      <div className={classNames('filters', className)}>
        <Header
          widgetId={widgetId}
          onCloseClick={onCloseClick}
          connectDragSource={connectDragSource}
        />
        <ChangableContext widgetId={widgetId} />
        <ChangableDimensions widgetId={widgetId} />
        <ActiveSearch widgetId={widgetId} />
        <Footer className="filters__footer" />
      </div>
    );
  }
}

Filters.propTypes = {
  connectDragSource: PropTypes.func,
  onCloseClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  widgetId: PropTypes.number.isRequired,
  isDragging: PropTypes.bool,
};

Filters.defaultProps = {
  className: '',
  connectDragSource: null,
  isDragging: false,
};

export default Filters;
