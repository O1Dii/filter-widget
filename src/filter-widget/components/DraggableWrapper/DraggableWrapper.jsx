import React from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';

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
class DraggableFilters extends React.PureComponent {
  render() {
    const {
      className,
      widgetId,
      onCloseClick,
      isDragging,
      connectDragPreview,
      connectDragSource,
      connectDropTarget,
      content,
    } = this.props;

    const Filters = content;

    return connectDragPreview(
      connectDropTarget(
        <div>
          <Filters
            className={className}
            widgetId={widgetId}
            onCloseClick={onCloseClick}
            isDragging={isDragging}
            connectDragSource={connectDragSource}
          />
        </div>,
      ),
    );
  }
}

DraggableFilters.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  widgetId: PropTypes.number.isRequired,
};

DraggableFilters.defaultProps = {
  className: '',
};

export default DraggableFilters;
