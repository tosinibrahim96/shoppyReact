import React, { Component, Fragment } from 'react';
import { Button, Form, Select } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { productCategories } from '../../actions/getCategoriesAction';
import './ModalForms.scss';

class ProductForm extends Component {
  getAllCategories = () => {
    this.props.productCategories();
  };

  // onSelectChange = (event, { value }) => {};

  firstThreeFields = () => {
    const { successResponse } = this.props.allCategories;
    const { nameToDisplay, imageUrl } = this.props.details;
    const dropdownCategories = successResponse.map(({ name, id }) => ({ text: name, value: id }));
    return (
      <Fragment>
        <Form.Field className="formField">
          <input placeholder="Product Name" value={nameToDisplay} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field className="formField">
          <Select
            placeholder="Select a Category"
            onClick={this.getAllCategories}
            options={dropdownCategories}
            onChange={this.onSelectChange}
          />
        </Form.Field>
        <Form.Field className="formField">
          <input
            placeholder="Image URL (example:https://exampleimageurl.jpg)"
            typeof="url"
            value={imageUrl}
            onChange={this.handleChange}
          />
          <a target="_blank" rel="noopener noreferrer" href="https://imgur.com/">
            Upload image here
          </a>
        </Form.Field>
      </Fragment>
    );
  };

  lasthreeFields = () => {
    const { description, productPrice, productQuantity } = this.props.details;
    return (
      <Fragment>
        <Form.Field className="formField">
          <input
            placeholder="Price"
            typeof="number"
            value={productPrice}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field className="formField">
          <input
            placeholder="Quantity"
            typeof="number"
            value={productQuantity}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.TextArea
          placeholder="Short Description"
          className="formField"
          value={description}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  };

  render() {
    return (
      <Form className="modalForm">
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
  { productCategories }
)(ProductForm);
