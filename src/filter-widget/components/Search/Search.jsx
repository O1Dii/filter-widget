import React from 'react';
import PropTypes from 'prop-types';

import SeparatedContainer from '../SeparatedContainer/SeparatedContainer';
import ActiveSearchInput from '../../containers/ActiveSearchInput';
import ActiveList from '../../containers/ActiveList';

import './Search.scss';

class Search extends React.PureComponent {
  render() {
    const { isDisabled, widgetId } = this.props;

    return (
      <div className="search">
        <SeparatedContainer isDisabled={isDisabled}>
          <ActiveSearchInput widgetId={widgetId} />
          <hr className="search__hr" />
          <ActiveList widgetId={widgetId} />
        </SeparatedContainer>
      </div>
    );
  }
}

Search.propTypes = {
  isDisabled: PropTypes.bool,
  widgetId: PropTypes.number.isRequired,
};

Search.defaultProps = {
  isDisabled: false,
};

export default Search;
