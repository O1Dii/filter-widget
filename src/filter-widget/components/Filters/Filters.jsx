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

const SourceSpec = {
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

const targetSpec = {
  drop: props => ({ id: props.widgetId }),
};

function targetCollect(connect) {
  return { connectDropTarget: connect.dropTarget() };
}

function sourceCollect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

@DropTarget('widget', targetSpec, targetCollect)
@DragSource('widget', SourceSpec, sourceCollect)
class Filters extends React.PureComponent {
  componentDidMount() {
    const { onMount, widgetId } = this.props;
    onMount(widgetId);
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
      onEndDrag,
    } = this.props;

    const connectDrag = onEndDrag ? connectDragSource : null;

    const content = (
      <div className={classNames('filters', className, { filters_hidden: isDragging })}>
        <Header widgetId={widgetId} onCloseClick={onCloseClick} connectDragSource={connectDrag} />
        <ChangableContext widgetId={widgetId} />
        <ChangableDimensions widgetId={widgetId} />
        <ActiveSearch widgetId={widgetId} />
        <Footer className="filters__footer" />
      </div>
    );

    if (onEndDrag) {
      return connectDragPreview(connectDropTarget(content));
    }

    return content;
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
