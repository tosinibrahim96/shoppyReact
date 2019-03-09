import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import { updateCategory } from '../../actions/updateCategoryAction';
import { addCategory } from '../../actions/addCategoryAction';
import { productCategories } from '../../actions/getCategoriesAction';
import './ModalForms.scss';

class CategoryForm extends Component {
  state = {
    categoryDetails: {
      name: this.props.details.nameToDisplay || '',
      image_url: this.props.details.imageUrl || '',
      description: this.props.details.description || ''
    }
  };

  componentWillUnmount = () => {
    clearTimeout(this.state.timeoutId);
  };

  handleFormChange = (event) => {
    const { categoryDetails } = this.state;
    const { name, value } = event.target;
    categoryDetails[name] = value;
    this.setState({
      categoryDetails
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { categoryDetails } = this.state;
    const { id } = this.props.details;
    if (Object.keys(this.props.details).length === 0) {
      this.props.addCategory(categoryDetails);
    } else {
      this.props.updateCategory(categoryDetails, id);
    }
    const timeoutId = setTimeout(() => this.props.productCategories(), 500);
    this.setState({ timeoutId });
  };

  render() {
    const { name, image_url, description } = this.state.categoryDetails;
    return (
      <Form className="modalForm" onSubmit={this.handleFormSubmit}>
        <Form.Field className="formField">
          <input
            placeholder="Category Name"
            value={name}
            onChange={this.handleFormChange}
            name="name"
          />
        </Form.Field>
        <Form.Field className="formField">
          <input
            placeholder="Image URL (example:https://exampleimageurl.jpg)"
            typeof="url"
            value={image_url}
            onChange={this.handleFormChange}
            name="image_url"
          />
          <a target="_blank" rel="noopener noreferrer" href="https://imgur.com/">
            Upload image here
          </a>
        </Form.Field>
        <Form.TextArea
          placeholder="Short Description"
          className="formField"
          value={description}
          onChange={this.handleFormChange}
          name="description"
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  state
});

export { CategoryForm as CategoryFormPage };
export default connect(
  mapStateToProps,
  { updateCategory, addCategory, productCategories }
)(CategoryForm);
