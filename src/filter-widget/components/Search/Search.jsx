import React from 'react';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import ActiveSearchInput from '../../containers/ActiveSearchInput';
import ActiveList from '../../containers/ActiveList';

import './Search.scss';

class Search extends React.PureComponent {
  render() {
    return (
      <div className="search">
        <SeparatedContainer>
          <ActiveSearchInput />
          <hr className="search__hr" />
          <ActiveList />
        </SeparatedContainer>
      </div>
    );
  }
}

export default Search;
