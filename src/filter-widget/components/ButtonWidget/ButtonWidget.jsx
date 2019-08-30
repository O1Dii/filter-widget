import React from 'react';

import ActiveFilters from '../../containers/ActiveFilters';

import './ButtonWidget.scss';

class ButtonWidget extends React.PureComponent {
  render() {
    const { widgetsIds, onClick, onCloseClick } = this.props;

    return (
      <div className="open-button">
        <button onClick={onClick} type="button" className="open-button__button">
          Create new widget
        </button>

        {widgetsIds.map(id => (
          <ActiveFilters
            className="open-button__filters"
            key={id}
            widgetId={id}
            onCloseClick={onCloseClick}
          />
        ))}
      </div>
    );
  }
}

ButtonWidget.propTypes = {};

ButtonWidget.defaultProps = {};

export default ButtonWidget;
