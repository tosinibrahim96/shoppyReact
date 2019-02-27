import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import NotFound from '../../components/NotFound';

export default class FourOhFour extends Component {
  render() {
    return <Navbar displayPage={<NotFound />} />;
  }
}
