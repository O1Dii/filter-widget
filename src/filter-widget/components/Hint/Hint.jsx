import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Hint.scss';

class Hint extends React.PureComponent {
  render() {
    const { sortType, className, onClick } = this.props;

    return (
      <div className={classNames('hint', className)}>
        <button type="button" onClick={() => onClick(sortType)} className="hint__text">
          {sortType}
        </button>
      </div>
    );
  }
}

Hint.propTypes = {
  sortType: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Hint.defaultProps = {
  className: '',
};

export default Hint;
