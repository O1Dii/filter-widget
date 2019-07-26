import React from 'react';
import HintContainer from '../Hintcontainer/Hintcontainer.jsx';

class SearchInput extends React.Component {
  render() {
    return (
      <div>
        <label>
          <i className="fas fa-search" />
        </label>
        <input className="green" />
        <HintContainer />
      </div>
    );
  }
}

export default SearchInput;
