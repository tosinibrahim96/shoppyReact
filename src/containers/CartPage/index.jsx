import React, { Component } from 'react';
import Navbar from '../Navbar';
import ShoppingCart from '../../components/ShoppingCart';

export default class CartPage extends Component {
  render() {
    return <Navbar displayPage={<ShoppingCart />} />;
  }
}
