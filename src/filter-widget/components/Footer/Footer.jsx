import React from 'react';
import PropTypes from 'prop-types';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer.jsx';
import './Footer.scss';

class Footer extends React.PureComponent {
  render() {
    const { className } = this.props;
    return (
      <div className={`footer ${className}`}>
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
