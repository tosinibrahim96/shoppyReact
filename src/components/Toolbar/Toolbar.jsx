import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavLinks from '../NavLinks';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.scss';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <Link to="/login">Shoppy</Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <NavLinks userRole={props.userRole} />
      </div>
    </nav>
  </header>
);

toolbar.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired,
  userRole: PropTypes.string.isRequired
};

toolbar.defaultProps = {};

export default toolbar;
