/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import React, { Component, Fragment } from 'react';
import { Image, Header, Table, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  getUniqueProducts,
  getNumberOfEachProduct,
  getCartTotalPrice
} from '../../helpers/arrayHandler';
import './ShoppingCart.scss';
import { createNewSale } from '../../actions/createNewSaleAction';

class ShoppingCart extends Component {
  displayProducts = (numberOfEachProduct, filteredArray) => filteredArray.map(({ id, imageUrl, nameToDisplay, productPrice }) => (
    <Table.Row key={id}>
      <Table.Cell singleLine>{id}</Table.Cell>
      <Table.Cell>
        <Image src={imageUrl} size="small" />
      </Table.Cell>
      <Table.Cell singleLine>{nameToDisplay}</Table.Cell>
      <Table.Cell singleLine>{productPrice}</Table.Cell>
      <Table.Cell singleLine>{numberOfEachProduct[id]}</Table.Cell>
    </Table.Row>
  ));

  createNewSale = (myCart, numberOfEachProduct, productTotal) => {
    for (let index = 0; index < myCart.length; index++) {
      myCart[index].product_id = myCart[index].id;
      myCart[index].quantity = numberOfEachProduct[myCart[index].id];
      myCart[index].item_price = myCart[index].productPrice;
      myCart[index] = {
        product_id: myCart[index].product_id,
        quantity: myCart[index].quantity,
        item_price: myCart[index].item_price
      };
    }
    this.props.createNewSale(myCart, productTotal);
    const { successResponse } = this.props.shoppingCart;
    if (successResponse) {
      localStorage.removeItem('myCart');
    }
  };

  render() {
    const currentItems = JSON.parse(localStorage.getItem('myCart'));
    if (!currentItems || currentItems.length === 0) {
      return <h1>Cart is Currently Empty</h1>;
    }

    const filteredArray = getUniqueProducts(currentItems, 'id');
    const numberOfEachProduct = getNumberOfEachProduct(currentItems);
    const sum = getCartTotalPrice(currentItems);

    return (
      <Fragment>
        <Header as="h1">{`Total Price = $${sum}`}</Header>
        {this.props.shoppingCart.createSaleLoading ? (
          <Button className="buyProducts" color="green" loading />
        ) : (
          <Button
            className="buyProducts"
            color="green"
            animated
            onClick={this.createNewSale.bind(this, filteredArray, numberOfEachProduct, sum)}
          >
            <Button.Content visible>Buy Products</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        )}
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product Id</Table.HeaderCell>
              <Table.HeaderCell>Product Image</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Price ($)</Table.HeaderCell>
              <Table.HeaderCell>Quantity</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.displayProducts(numberOfEachProduct, filteredArray)}</Table.Body>
        </Table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart
});

export { ShoppingCart as ShoppingCartPage };
export default connect(
  mapStateToProps,
  {
    createNewSale
  }
)(ShoppingCart);
