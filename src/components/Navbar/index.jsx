import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import selectModalForm from '../../helpers/SelectModalForm';
import './Navbar.scss';

class Navbar extends Component {
  state = {
    open: false,
    sideDrawerOpen: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    const { open } = this.state;
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
        {this.props.currentPage === 'dashboard' ? (
          ''
        ) : (
          <Button onClick={this.onOpenModal}>{`Add new ${this.props.currentPage}`}</Button>
        )}
        <Modal open={open} onClose={this.onCloseModal} center>
          {selectModalForm(this.props.currentPage)}
        </Modal>
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
