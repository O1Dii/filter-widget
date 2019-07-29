import React from 'react';

import './Hint.scss';

class Hint extends React.PureComponent {
  render() {
    const { values, className } = this.props;

    return (
      <div className={`hint ${className}`}>
        {values.map(value => (
          <p className="hint__text">{value}</p>
        ))}
      </div>
    );
  }
}

export default Hint;
