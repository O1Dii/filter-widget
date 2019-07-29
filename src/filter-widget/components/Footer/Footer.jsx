import React from 'react';

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

export default Footer;
