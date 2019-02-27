import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AttendantNav extends Component {
  render() {
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
        <li>
          <Link to="/sales">Sales</Link>
        </li>
        <li>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    );
  }
}
