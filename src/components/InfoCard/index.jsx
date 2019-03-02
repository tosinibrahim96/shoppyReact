import React, { Component, Fragment } from 'react';
import { Card, Button, Image, Icon } from 'semantic-ui-react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import selectModalForm from '../../helpers/SelectModalForm';
import './InfoCard.scss';

export default class InfoCards extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  displayAdminButtons = (userRole) => {
    if (userRole === 'admin') {
      return (
        <div className="ui two buttons adminActions">
          <Button basic color="green">
            Edit
          </Button>
          <Button basic color="red">
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

  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <p role="presentation" className="adminCardsP" onClick={this.onOpenModal}>
          {`Add new ${this.props.currentPage}`}
        </p>
        <Modal open={open} onClose={this.onCloseModal} center>
          {selectModalForm(this.props.currentPage)}
        </Modal>
        <div className="categoryCardContainer">{this.createCard()}</div>
      </Fragment>
    );
  }
}

InfoCards.propTypes = {
  currentPage: PropTypes.string,
  imageUrl: PropTypes.string,
  nameToDisplay: PropTypes.string,
  description: PropTypes.string,
  mobileNumber: PropTypes.string,
  userRole: PropTypes.string.isRequired
};

InfoCards.defaultProps = {
  currentPage: '',
  imageUrl: '',
  nameToDisplay: '',
  description: '',
  mobileNumber: ''
};
