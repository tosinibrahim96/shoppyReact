import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavbarComponent from '../../components/Navbar';
import { getUserInfo } from '../../helpers/jwtHelper';

export default class Navbar extends Component {
  render() {
    const result = getUserInfo();
    const { userRole } = result;
    return <NavbarComponent userRole={userRole} displayPage={this.props.displayPage} />;
  }
}
Navbar.propTypes = {
  displayPage: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]).isRequired
};
