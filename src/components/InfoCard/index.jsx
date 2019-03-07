import React, { Component, Fragment } from 'react';
import { Card, Button, Image, Icon } from 'semantic-ui-react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import selectModalForm from '../../helpers/SelectModalForm';
import { getUserInfo } from '../../helpers/jwtHelper';
import './InfoCard.scss';

export default class InfoCards extends Component {
  state = {
    open: false,
    deleteOpen: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  openDeleteModal = () => {
    this.setState({ deleteOpen: true });
  };

  closeDeleteModal = () => {
    this.setState({ deleteOpen: false });
  };

  displayAdminButtons = (userRole) => {
    if (userRole === 'admin') {
      return (
        <div className="ui two buttons adminActions">
          <Button basic color="green" onClick={this.onOpenModal}>
            Edit
          </Button>
          <Button basic color="red" onClick={this.openDeleteModal}>
            Delete
          </Button>
        </div>
      );
    }
  };

  displayAddToCartButton = (currentPage, userRole) => {
    if (currentPage === 'product' && userRole === 'attendant') {
      return (
        <Button animated>
          <Button.Content visible>Add to Cart</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      );
    }
  };

  createCard = () => {
    const {
      imageUrl,
      nameToDisplay,
      description,
      mobileNumber,
      userRole,
      currentPage
    } = this.props;
    return (
      <Card className="categoryCard">
        <Image src={imageUrl} />
        <Card.Content extra>
          <Card.Header className="adminCardTitle">{nameToDisplay}</Card.Header>
          <Card.Description className="adminCardDescription">{description}</Card.Description>
          <Card.Description className="adminCardDescription">{mobileNumber}</Card.Description>
          {this.displayAdminButtons(userRole)}
          {this.displayAddToCartButton(currentPage, userRole)}
        </Card.Content>
      </Card>
    );
  };

  displayModals = () => {
    const { open, deleteOpen } = this.state;
    return (
      <Fragment>
        <Modal open={open} onClose={this.onCloseModal} center>
          {selectModalForm(this.props.currentPage, this.props)}
        </Modal>
        <Modal open={deleteOpen} onClose={this.closeDeleteModal} center>
          <p className="confirmDelete">
            {`Are You Sure You want to delete this ${this.props.currentPage}`}
          </p>
          <Button negative className="noDelete" onClick={this.closeDeleteModal}>
            No
          </Button>
          <Button positive icon="checkmark" labelPosition="right" content="Yes" />
        </Modal>
      </Fragment>
    );
  };

  render() {
    const userInfo = getUserInfo();
    return !userInfo ? (
      <Redirect to="/login" />
    ) : (
      <Fragment>
        {this.displayModals()}
        <div className="categoryCardContainer">{this.createCard()}</div>
      </Fragment>
    );
  }
}

export { InfoCards as InfoCardsPage };
InfoCards.propTypes = {
  currentPage: PropTypes.string,
  imageUrl: PropTypes.string,
  nameToDisplay: PropTypes.string,
  description: PropTypes.string,
  mobileNumber: PropTypes.string,
  userRole: PropTypes.string
};

InfoCards.defaultProps = {
  currentPage: '',
  imageUrl: '',
  nameToDisplay: '',
  description: '',
  mobileNumber: '',
  userRole: ''
};
