import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import Immutable from 'immutable';

import CheckboxText from '../CheckboxText/CheckboxText';

import './List.scss';

class List extends React.PureComponent {
  onCheck = id => {
    const { onChecked } = this.props;
    onChecked(id);
  };

  onAllChecked = () => {
    const { onAllChecked, allChecked, items } = this.props;

    onAllChecked(items.map(({ id }) => id).toList(), !allChecked);
  };

  getItems = items => {
    const { selectedItems } = this.props;

    return items
      .map(({ id, name }) => {
        const checked = selectedItems.includes(id);
        return (
          <CheckboxText
            key={id}
            id={id}
            checked={checked}
            text={name}
            onCheck={() => this.onCheck(id)}
          />
        );
      })
      .toList();
  };

  render() {
    const { items, allChecked } = this.props;

    const res = this.getItems(items);

    return (
      <div className="list">
        <Scrollbars autoHeight autoHeightMax={100} className="list__scrollbar">
          {Boolean(res.size) && (
            <CheckboxText id={0} checked={allChecked} text="(All)" onCheck={this.onAllChecked} />
          )}
          {res}
        </Scrollbars>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.instanceOf(Immutable.Map),
  selectedItems: PropTypes.instanceOf(Immutable.List),
  onChecked: PropTypes.func.isRequired,
};

List.defaultProps = {
  items: Immutable.Map(),
  selectedItems: Immutable.List(),
};

export default List;
