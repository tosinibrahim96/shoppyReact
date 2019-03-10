import React, { Component, Fragment } from 'react';
import { Button, Form, Select } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { productCategories } from '../../actions/getCategoriesAction';
import { updateProduct } from '../../actions/updateProductAction';
import { getAllProducts } from '../../actions/getProductsAction';
import { addProduct } from '../../actions/addProductAction';
import './ModalForms.scss';

class ProductForm extends Component {
  state = {
    category_id: this.props.details.categoryId || '',
    category_name: this.props.details.categoryName || '',
    productDetails: {
      name: this.props.details.nameToDisplay || '',
      image_url: this.props.details.imageUrl || '',
      description: this.props.details.description || '',
      price: this.props.details.productPrice || '',
      quantity: this.props.details.productQuantity || ''
    }
  };

  componentWillUnmount = () => {
    clearTimeout(this.state.timeoutId);
  };

  getAllCategories = () => {
    this.props.productCategories();
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { productDetails, category_id } = this.state;
    const { id } = this.props.details;
    if (Object.keys(this.props.details).length === 0) {
      this.props.addProduct(productDetails, category_id);
    } else {
      this.props.updateProduct(productDetails, category_id, id);
    }
    const timeoutId = setTimeout(() => this.props.getAllProducts(), 500);
    this.setState({ timeoutId });
  };

  handleFormChange = (event) => {
    const { productDetails } = this.state;
    const { name, value } = event.target;
    productDetails[name] = value;
    this.setState({
      productDetails
    });
  };

  handleSelectChange = (event, { value }) => {
    this.setState({
      category_id: value,
      category_name: event.target.textContent
    });
  };

  firstThreeFields = () => {
    const { successResponse } = this.props.allCategories;
    const { image_url } = this.state.productDetails;
    const { category_id, category_name } = this.state;
    const dropdownCategories = successResponse.map(({ name, id }) => ({ text: name, value: id }));
    return (
      <Fragment>
        <Form.Field className="formField">
          <label>Product Name</label>
          <input
            placeholder="Product Name"
            value={this.state.productDetails.name}
            onChange={this.handleFormChange}
            name="name"
          />
        </Form.Field>
        <Form.Field className="formField">
          <label>Category</label>
          <Select
            placeholder="Select a Category"
            onClick={this.getAllCategories}
            text={category_name}
            value={category_id}
            options={dropdownCategories}
            onChange={this.handleSelectChange}
            name="category_id"
          />
        </Form.Field>
        <Form.Field className="formField">
          <label>Image URL</label>
          <input
            placeholder="Image URL (example:https://exampleimageurl.jpg)"
            typeof="url"
            value={image_url}
            onChange={this.handleFormChange}
            name="image_url"
          />
          <a target="_blank" rel="noopener noreferrer" href="https://imgur.com/">
            Upload image here and provide link
          </a>
        </Form.Field>
      </Fragment>
    );
  };

  lasthreeFields = () => {
    const { description, quantity, price } = this.state.productDetails;
    return (
      <Fragment>
        <Form.Field className="formField">
          <label>Product Price</label>
          <input
            placeholder="Price"
            typeof="number"
            value={price}
            onChange={this.handleFormChange}
            name="price"
          />
        </Form.Field>
        <Form.Field className="formField">
          <label>Quantity</label>
          <input
            placeholder="Quantity"
            typeof="number"
            value={quantity}
            onChange={this.handleFormChange}
            name="quantity"
          />
        </Form.Field>
        <Form.TextArea
          placeholder="Short Description"
          className="formField"
          value={description}
          onChange={this.handleFormChange}
          name="description"
        />
      </Fragment>
    );
  };

  render() {
    return (
      <Form className="modalForm" onSubmit={this.handleFormSubmit}>
        {this.firstThreeFields()}
        {this.lasthreeFields()}
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  allCategories: state.allCategories
});

export { ProductForm as ProductFormPage };
export default connect(
  mapStateToProps,
  { productCategories, updateProduct, addProduct, getAllProducts }
)(ProductForm);
