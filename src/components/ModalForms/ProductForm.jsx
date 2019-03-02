import React, { Component } from 'react';
import { Button, Form, Select } from 'semantic-ui-react';
import './ModalForms.scss';

export default class ProductForm extends Component {
  render() {
    return (
      <Form className="modalForm">
        <Form.Field className="formField">
          <input placeholder="Product Name" />
        </Form.Field>
        <Form.Field className="formField">
          <Select placeholder="Select a Category" options={[]} />
        </Form.Field>
        <Form.Field className="formField">
          <input placeholder="Image URL (example:https://exampleimageurl.jpg)" typeof="url" />
          <a target="_blank" rel="noopener noreferrer" href="https://imgur.com/">
            Upload image here
          </a>
        </Form.Field>
        <Form.Field className="formField">
          <input placeholder="Price" typeof="number" />
        </Form.Field>
        <Form.Field className="formField">
          <input placeholder="Quantity" typeof="number" />
        </Form.Field>
        <Form.TextArea placeholder="Short Description" className="formField" />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
