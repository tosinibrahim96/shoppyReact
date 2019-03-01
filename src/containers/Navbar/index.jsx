import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavbarComponent from '../../components/Navbar';

export default class Navbar extends Component {
  render() {
    return <NavbarComponent userRole="admin" displayPage={this.props.displayPage} />;
  }
}
Navbar.propTypes = {
  displayPage: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]).isRequired
};
