import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavLinks from '../NavLinks';
import './styles/SideDrawer.scss';

class SideDrawer extends Component {
  render() {
    let drawerClasses = 'side-drawer';
    if (this.props.show) {
      drawerClasses = 'side-drawer open';
    }
    return (
      <nav className={drawerClasses}>
        <NavLinks userRole={this.props.userRole} />
      </nav>
    );
  }
}

SideDrawer.propTypes = {
  show: PropTypes.bool,
  userRole: PropTypes.string.isRequired
};

SideDrawer.defaultProps = {
  show: false
};

export default SideDrawer;
