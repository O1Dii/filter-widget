import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

import CheckboxText from '../CheckboxText/CheckboxText';

import './List.scss';

class List extends React.PureComponent {
  render() {
    const { data, selectedData } = this.props;

    const res = data.map(([index, { id, name }]) => {
      const val = selectedData.includes(id);
      return <CheckboxText key={id} id={id} checked={val} text={name} check={() => {}} />;
    });

    return (
      <div className="list">
        <Scrollbars style={{ height: data.size * 20, maxHeight: 150 }}>{res}</Scrollbars>
      </div>
    );
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
