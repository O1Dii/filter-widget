import React from 'react';
import HintContainer from '../HintContainer/HintContainer.jsx';

class SearchInput extends React.Component {
  render() {
    return (
      <div>
        <label>
          <i className="fas fa-search" />

          <input id="input" />
        </label>
        <HintContainer />
      </div>
    );
  }
}

export default SearchInput;
