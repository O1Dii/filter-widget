import React from 'react';
import CheckboxText from '../Checkboxtext/Checkboxtext.jsx';

class ElementsList extends React.Component {
  render() {
    if (this.props.children) {
      return this.props.children.map(child => {
        <CheckboxText text={chlid} />;
      });
    }
    return null;
  }
}

export default ElementsList;
