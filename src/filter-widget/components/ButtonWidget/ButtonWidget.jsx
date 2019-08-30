import React from 'react';

import ActiveFilters from '../../containers/ActiveFilters';

import './ButtonWidget.scss';

class ButtonWidget extends React.PureComponent {
  onClick = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { widgetsIds, onCloseClick } = this.props;

    return (
      <div className="open-button">
        <button onClick={this.onClick} type="button" className="open-button__button">
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
