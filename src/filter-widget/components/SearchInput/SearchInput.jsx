import React from 'react';

import HintContainer from '../HintContainer/HintContainer';
import './SearchInput.scss';

class SearchInput extends React.PureComponent {
  render() {
    return (
      <div className="search-input">
        <label>
          <i className="search-input__icon fas fa-search" />

          <input className="search-input__input" />
        </label>
        <HintContainer className="search-input__hint-container" />
      </div>
    );
  }
}

export default SearchInput;
