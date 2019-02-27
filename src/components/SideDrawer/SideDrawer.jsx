import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminNav from '../AdminNav';
import './styles/SideDrawer.scss';

class SideDrawer extends Component {
  render() {
    let drawerClasses = 'side-drawer';
    if (this.props.show) {
      drawerClasses = 'side-drawer open';
    }
    return (
      <nav className={drawerClasses}>
        <AdminNav />
      </nav>
    );
  }
}

SideDrawer.propTypes = {
  show: PropTypes.bool
};

SideDrawer.defaultProps = {
  show: false
};

export default SideDrawer;
