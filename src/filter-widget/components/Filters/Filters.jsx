import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DragSource, DropTarget } from 'react-dnd';

import Footer from '../Footer/Footer';

import ChangableContext from '../../containers/ChangableContexts';
import ChangableDimensions from '../../containers/ChangableDimensions';
import ActiveSearch from '../../containers/ActiveSearch';
import Header from '../Header/Header';

import './Filters.scss';

const spec = {
  beginDrag: () => ({}),
  endDrag: (props, monitor) => {
    const dragWidgetId = monitor.getDropResult() && monitor.getDropResult().id;

    if (!dragWidgetId || dragWidgetId === props.widgetId) {
      return;
    }

    props.onEndDrag(dragWidgetId);
    return;
  },
};

const target = {
  drop: props => ({ id: props.widgetId }),
};

function collectTarget(connect) {
  return { connectDropTarget: connect.dropTarget() };
}

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

@DropTarget('widget', target, collectTarget)
@DragSource('widget', spec, collectSource)
class Filters extends React.PureComponent {
  componentDidMount() {
    const { onMount } = this.props;
    onMount();
  }

  render() {
    const {
      className,
      widgetId,
      onCloseClick,
      isDragging,
      connectDragPreview,
      connectDragSource,
      connectDropTarget,
    } = this.props;

    return connectDragPreview(
      connectDropTarget(
        <div className={classNames('filters', className, { filters_hidden: isDragging })}>
          <Header
            widgetId={widgetId}
            onCloseClick={onCloseClick}
            connectDragSource={connectDragSource}
          />
          <ChangableContext widgetId={widgetId} />
          <ChangableDimensions widgetId={widgetId} />
          <ActiveSearch widgetId={widgetId} />
          <Footer className="filters__footer" />
        </div>,
      ),
    );
  }
}

Filters.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  widgetId: PropTypes.number.isRequired,
};

Filters.defaultProps = {
  className: '',
};

export default Filters;
