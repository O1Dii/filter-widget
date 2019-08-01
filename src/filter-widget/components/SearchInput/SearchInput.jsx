import React from 'react';
import PropTypes from 'prop-types';

import ActiveSearchFilters from '../../containers/ActiveSearchFilters';
import './SearchInput.scss';

class SearchInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { searchChange } = this.props;
    searchChange(e.target.value);
  }

  render() {
    const { search } = this.props;

    return (
      <div className="search-input">
        <label>
          <i className="search-input__icon fas fa-search" />

          <input value={search} className="search-input__input" onChange={this.onChange} />
        </label>
        <ActiveSearchFilters className="search-input__hint-container" />
      </div>
    );
  }
}

SearchInput.propTypes = {
  search: PropTypes.string.isRequired,
  searchChange: PropTypes.func.isRequired,
};

export default SearchInput;
