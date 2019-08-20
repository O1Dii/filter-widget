import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Hint.scss';

class Hint extends React.PureComponent {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  click() {
    const { click, sortType } = this.props;
    click(sortType);
  }

  render() {
    const { sortType, className } = this.props;

    return (
      <div className={classNames('hint', className)}>
        <button type="button" onClick={this.click} className="hint__text">
          {sortType}
        </button>
      </div>
    );
  }
}

Hint.propTypes = {
  sortType: PropTypes.string.isRequired,
  className: PropTypes.string,
  click: PropTypes.func.isRequired,
};

Hint.defaultProps = {
  className: '',
};

export default Hint;
