import React from 'react';
import './SeparatedContainer.scss';

class SeparatedContainer extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="separated-container">
        <div className="separated-container__empty" />
        <div className="separated-container__content">{children}</div>
      </div>
    );
  }
}

export default SeparatedContainer;
