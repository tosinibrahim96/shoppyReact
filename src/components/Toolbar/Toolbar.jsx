import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AdminNav from '../AdminNav';
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
        <AdminNav />
      </div>
    </nav>
  </header>
);

toolbar.propTypes = {
  drawerClickHandler: PropTypes.func.isRequired
};

export default toolbar;
