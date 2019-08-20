import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';

import './Footer.scss';

class Footer extends React.PureComponent {
  render() {
    const { className } = this.props;
    const mainClassName = classNames('footer', className);

    return (
      <div className={mainClassName}>
        <SeparatedContainer />
      </div>
    );
  }
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
