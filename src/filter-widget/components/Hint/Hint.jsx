import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Hint.scss';

class Hint extends React.PureComponent {
  render() {
    const { sortType, className, click } = this.props;

    return (
      <div className={classNames('hint', className)}>
        <button type="button" onClick={() => click(sortType)} className="hint__text">
          {sortType}
        </button>
      </div>
    );
  }
}

Hint.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  click: PropTypes.func.isRequired,
};

Hint.defaultProps = {
  className: '',
};

export default Hint;
