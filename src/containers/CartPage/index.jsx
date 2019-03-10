import React, { Component } from 'react';
import Navbar from '../Navbar';
import ShoppingCart from '../../components/ShoppingCart';

export default class CartPage extends Component {
  render() {
    //  const currentItems = JSON.parse(localStorage.getItem('myCart'));
    //  if (!currentItems) {
    //    localStorage.setItem('myCart', JSON.stringify([]));
    //  }
    return <Navbar displayPage={<ShoppingCart />} />;
  }
}
