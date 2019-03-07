import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import './Navbar.scss';

class Navbar extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="mainContainer">
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          userRole={this.props.userRole}
        />
        <SideDrawer show={this.state.sideDrawerOpen} userRole={this.props.userRole} />
        {backdrop}
        <main className="pageContent">{this.props.displayPage}</main>
      </div>
    );
  }
}

Navbar.propTypes = {
  displayPage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
    PropTypes.array
  ]),
  userRole: PropTypes.string
};

Navbar.defaultProps = {
  displayPage: [] || {} || '',
  userRole: ''
};

export default Navbar;
