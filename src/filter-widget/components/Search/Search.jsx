import React from 'react';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import ActiveSearchInput from '../../containers/ActiveSearchInput';
import List from '../List/List';

import './Search.scss';

class Search extends React.PureComponent {
  render() {
    return (
      <div className="search">
        <SeparatedContainer>
          <ActiveSearchInput />
          <hr className="search__hr" />
          <List />
        </SeparatedContainer>
      </div>
    );
  }
}

export default Search;
