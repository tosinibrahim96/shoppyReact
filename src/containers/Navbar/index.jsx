import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import NavbarComponent from '../../components/Navbar';
import { getUserInfo } from '../../helpers/jwtHelper';

export default class Navbar extends Component {
  render() {
    const userInfo = getUserInfo();
    return userInfo === null ? (
      <Redirect to="/login" />
    ) : (
      <NavbarComponent
        userRole={userInfo.userRole}
        displayPage={this.props.displayPage}
        currentPage={this.props.currentPage}
      />
    );
  }
}
Navbar.propTypes = {
  displayPage: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]).isRequired
};
