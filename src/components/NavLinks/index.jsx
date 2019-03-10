import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class NavLinks extends Component {
  handleLogout = () => {
    localStorage.removeItem('Authentication');
    window.location.reload();
  };

  displayCorrectSidebar = (role) => {
    if (role === 'admin') {
      return (
        <li>
          <Link to="/attendants">Attendants</Link>
        </li>
      );
    }
    return (
      <li>
        <Link to="/cart">My Cart </Link>
      </li>
    );
  };

  render() {
    const { userRole } = this.props;
    return (
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {this.displayCorrectSidebar(userRole)}
        <li role="presentation" onClick={this.handleLogout}>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    );
  }
}

NavLinks.propTypes = {
  userRole: PropTypes.string.isRequired
};
