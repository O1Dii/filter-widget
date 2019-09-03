import React from 'react';
import Immutable from 'immutable';
import PropTypes from 'prop-types';

import DraggableWrapper from '../../containers/DraggableWrapper';

import './ButtonWidget.scss';

class ButtonWidget extends React.PureComponent {
  render() {
    const { widgetsIds, onClick, onCloseClick } = this.props;

    return (
      <div className="open-button">
        <button onClick={() => onClick()} type="button" className="open-button__button">
          Create new widget
        </button>

        <div className="open-button__filters-container">
          {widgetsIds.map(id => (
            <div key={id} className="open-button__filters-cover">
              <DraggableWrapper
                className="open-button__filters"
                widgetId={id}
                onCloseClick={onCloseClick}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ButtonWidget.propTypes = {
  onClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  widgetsIds: PropTypes.instanceOf(Immutable.Seq),
};

ButtonWidget.defaultProps = {
  widgetsIds: Immutable.Seq(),
};

export default ButtonWidget;
