import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import Immutable from 'immutable';

import CheckboxText from '../CheckboxText/CheckboxText';

import './List.scss';

class List extends React.PureComponent {
  onCheck = id => {
    const { onCheck } = this.props;

    onCheck(id);
  };

  onAllChecked = () => {
    const { onAllChecked, filteredItems, selectedItems } = this.props;

    const allChecked = filteredItems.count() === selectedItems.count();
    onAllChecked(filteredItems, !allChecked);
  };

  getItems = items => {
    const { selectedItems } = this.props;

    return items
      .map(item => {
        const checked = selectedItems.includes(item.get('id'));

        return (
          <CheckboxText
            key={item.get('id')}
            id={item.get('id')}
            checked={checked}
            text={item.get('name')}
            onCheck={() => this.onCheck(item.get('id'))}
          />
        );
      })
      .toList();
  };

  render() {
    const { items, filteredItems, selectedItems } = this.props;

    const allChecked = filteredItems.count() === selectedItems.count();
    const res = this.getItems(items);

    return (
      <div className="list">
        <Scrollbars autoHeight autoHeightMax={100} className="list__scrollbar">
          {!res.isEmpty() && (
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
  onCheck: PropTypes.func.isRequired,
};

List.defaultProps = {
  items: Immutable.Map(),
  selectedItems: Immutable.List(),
};

export default List;
