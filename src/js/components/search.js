import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div>
        <SearchInput />
        <hr />
        <ElementsList />
      </div>
    );
  }
}

export default Search;
