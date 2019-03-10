import React, { Component, Fragment } from 'react';
import { Card, Button, Image, Icon } from 'semantic-ui-react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import selectModalForm from '../../helpers/SelectModalForm';
import { deleteProductCategory } from '../../actions/deleteCategoryAction';
import { deleteProduct } from '../../actions/deleteProductAction';
import { deleteStoreAttendant } from '../../actions/deleteAttendantAction';
import { storeAttendants } from '../../actions/getAttendantsAction';
import { productCategories } from '../../actions/getCategoriesAction';
import { getAllProducts } from '../../actions/getProductsAction';
import { getUserInfo } from '../../helpers/jwtHelper';
import './InfoCard.scss';

class InfoCards extends Component {
  state = {
    open: false,
    deleteOpen: false,
    shoppingCart: []
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

  displayAdminButtons = (userRole, currentPage) => {
    if (userRole === 'admin') {
      return (
        <div className="ui two buttons adminActions">
          {currentPage === 'attendant' ? (
            ''
          ) : (
            <Button basic color="green" onClick={this.onOpenModal}>
              Edit
            </Button>
          )}
          <Button basic color="red" onClick={this.openDeleteModal}>
            Delete
          </Button>
        </div>
      );
    }
  };

  addToCart = (product) => {
    const { shoppingCart } = this.state;
    this.setState({
      shoppingCart: shoppingCart.concat(product)
    });
    const currentItems = JSON.parse(localStorage.getItem('myCart'));
    currentItems.push(product);
    localStorage.setItem('myCart', JSON.stringify(currentItems));
  };

  displayAddToCartButton = (currentPage, userRole) => {
    if (currentPage === 'product' && userRole === 'attendant') {
      return (
        <Button animated onClick={this.addToCart.bind(this, this.props)}>
          <Button.Content visible>Add to Cart</Button.Content>
          <Button.Content hidden>
            <Icon name="shop" />
            {this.state.shoppingCart.length}
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
      currentPage,
      productPrice,
      categoryName
    } = this.props;
    return (
      <Card className="categoryCard">
        <Image src={imageUrl} />
        <Card.Content extra>
          <Card.Header className="adminCardTitle">{nameToDisplay}</Card.Header>
          <Card.Description className="adminCardDescription">{description}</Card.Description>
          <Card.Description className="adminCardDescription">{mobileNumber}</Card.Description>
          <Card.Description className="adminCardDescription">
            {productPrice ? `$${productPrice}` : ''}
          </Card.Description>
          <Card.Description className="adminCardDescription">{categoryName}</Card.Description>
          {this.displayAdminButtons(userRole, currentPage)}
          {this.displayAddToCartButton(currentPage, userRole)}
        </Card.Content>
      </Card>
    );
  };

  deleteContent = (currentPage, componentId) => {
    switch (currentPage) {
      case 'category':
        this.props.deleteProductCategory(componentId);
        setTimeout(() => this.props.productCategories(), 500);
        break;
      case 'product':
        this.props.deleteProduct(componentId);
        setTimeout(() => this.props.getAllProducts(), 500);
        break;
      case 'attendant':
        this.props.deleteStoreAttendant(componentId);
        setTimeout(() => this.props.storeAttendants(), 500);
        break;
      default:
        break;
    }
  };

  displayModals = () => {
    const { open, deleteOpen } = this.state;
    const { currentPage, id } = this.props;
    return (
      <Fragment>
        <Modal open={open} onClose={this.onCloseModal} center>
          {selectModalForm(currentPage, this.props)}
        </Modal>
        <Modal open={deleteOpen} onClose={this.closeDeleteModal} center>
          <p className="confirmDelete">{`Are You Sure You want to delete this ${currentPage}`}</p>
          <Button negative className="noDelete" onClick={this.closeDeleteModal}>
            No
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Yes"
            onClick={this.deleteContent.bind(this, currentPage, id)}
          />
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

const mapStateToProps = state => ({
  state
});

export { InfoCards as InfoCardsPage };
export default connect(
  mapStateToProps,
  {
    deleteProductCategory,
    deleteProduct,
    deleteStoreAttendant,
    productCategories,
    storeAttendants,
    getAllProducts
  }
)(InfoCards);

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
