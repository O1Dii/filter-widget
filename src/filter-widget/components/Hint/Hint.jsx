import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Hint.scss';

class Hint extends React.PureComponent {
  onClick = () => {
    const { onClick, sortType } = this.props;
    onClick(sortType);
  };

  render() {
    const { sortType, className } = this.props;

    return (
      <div className={classNames('hint', className)}>
        <button type="button" onClick={this.onClick} className="hint__text">
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
