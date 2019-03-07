import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import './ModalForms.scss';

export default class CategoryForm extends Component {
  render() {
    const { nameToDisplay, imageUrl, description } = this.props.details;
    return (
      <Form className="modalForm">
        <Form.Field className="formField">
          <input placeholder="Category Name" defaultValue={nameToDisplay} />
        </Form.Field>
        <Form.Field className="formField">
          <input
            placeholder="Image URL (example:https://exampleimageurl.jpg)"
            typeof="url"
            defaultValue={imageUrl}
          />
          <a target="_blank" rel="noopener noreferrer" href="https://imgur.com/">
            Upload image here
          </a>
        </Form.Field>
        <Form.TextArea
          placeholder="Short Description"
          className="formField"
          defaultValue={description}
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
