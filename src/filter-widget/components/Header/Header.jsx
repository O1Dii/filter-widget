import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

class Header extends React.PureComponent {
  onCloseClick = () => {
    const { onCloseClick, widgetId } = this.props;
    onCloseClick(widgetId);
  };

  render() {
    const { connectDragSource } = this.props;

    const bars = connectDragSource ? (
      connectDragSource(<i className="header__bars fas fa-bars" />)
    ) : (
      <i className="header__bars fas fa-bars" />
    );

    return (
      <div className="header">
        {bars}
        <h2 className="header__title">Filters</h2>
        <button type="button" onClick={this.onCloseClick} className="header__exit fas fa-times" />
      </div>
    );
  }
}

Header.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
};

export default Header;
