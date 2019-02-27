import React from 'react';
import PropTypes from 'prop-types';
import './styles/DrawerToggleButton.scss';

const drawerToggleButton = props => (
  <button type="button" className="toggle-button" onClick={props.click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

drawerToggleButton.propTypes = {
  click: PropTypes.func.isRequired
};

export default drawerToggleButton;
