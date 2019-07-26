import React from 'react';
import CheckboxText from '../CheckboxText/CheckboxText.jsx';

class List extends React.Component {
  render() {
    if (this.props.children) {
      return this.props.children.map((child) => {
        <CheckboxText text={chlid} />;
      });
    }
    return null;
  }
}

export default List;
