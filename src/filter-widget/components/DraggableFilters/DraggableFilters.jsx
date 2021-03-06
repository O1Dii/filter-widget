import React from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import classNames from 'classnames';

import StaticFilters from '../../containers/StaticFilters';

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
    } = this.props;

    return connectDragPreview(
      connectDropTarget(
        <div className={classNames({ filters_hidden: isDragging })}>
          <StaticFilters
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
  connectDragPreview: PropTypes.func.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  widgetId: PropTypes.number.isRequired,
  isDragging: PropTypes.bool.isRequired,
};

DraggableFilters.defaultProps = {
  className: '',
};

export default DraggableFilters;
