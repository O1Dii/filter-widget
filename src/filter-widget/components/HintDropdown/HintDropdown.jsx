import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './HintDropdown.scss';

class Hint extends React.PureComponent {
  render() {
    const { values, className, click } = this.props;

    return (
      <div className={classNames('hint', className)}>
        {values.map(value => (
          <button type="button" key={value} onClick={() => click(value)} className="hint__text">
            {value}
          </button>
        ))}
      </div>
    );
  }
}

Hint.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  click: PropTypes.func.isRequired,
};

Hint.defaultProps = {
  className: '',
};

export default Hint;
