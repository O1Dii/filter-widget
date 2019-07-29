import React from 'react';
import PropTypes from 'prop-types';

import './Hint.scss';

class Hint extends React.PureComponent {
  render() {
    const { values, className } = this.props;

    return (
      <div className={`hint ${className}`}>
        {values.map(value => (
          <p key={value} className="hint__text">
            {value}
          </p>
        ))}
      </div>
    );
  }
}

Hint.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

Hint.defaultProps = {
  className: '',
};

export default Hint;
