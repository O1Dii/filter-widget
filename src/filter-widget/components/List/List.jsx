import React from 'react';
import PropTypes from 'prop-types';

import CheckboxText from '../CheckboxText/CheckboxText';

import './List.scss';

class List extends React.PureComponent {
  render() {
    const { values } = this.props;

    const res = values.map(({ id, name, val }) => (
      <CheckboxText key={id} id={id} checked={val} text={name} check={() => {}} />
    ));

    return <div className="list">{res}</div>;
  }
}

List.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, val: PropTypes.bool }),
  ),
};

List.defaultProps = {
  values: [],
};

export default List;
