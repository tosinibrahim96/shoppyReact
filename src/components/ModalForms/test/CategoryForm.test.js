import React from 'react';
import { shallow } from 'enzyme';
import { CategoryFormPage } from '../CategoryForm';
import { updateCategory } from '../../../actions/updateCategoryAction';
import { addCategory } from '../../../actions/addCategoryAction';
import { productCategories } from '../../../actions/getCategoriesAction';

describe('Test the CategoryForm Component', () => {
  it('should match snapshot', () => {
    const details = {
      nameToDisplay: 'John Doe',
      imageUrl: 'https://i.imgur.com/27DUH5b.jpg',
      description: 'admin@mail.com'
    };
    const event = {
      target: {
        name: 'name',
        value: 'pname'
      },
      preventDefault: () => {}
    };
    const wrapper = shallow(
      <CategoryFormPage
        details={details}
        updateCategory={updateCategory}
        addCategory={addCategory}
        productCategories={productCategories}
      />
    );
    wrapper.instance().handleFormChange(event);
    wrapper.instance().handleFormSubmit(event);
    wrapper.instance().componentWillUnmount();
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const details = {};
    const event = {
      target: {
        name: 'name',
        value: 'pname'
      },
      preventDefault: () => {}
    };
    const wrapper = shallow(
      <CategoryFormPage
        details={details}
        updateCategory={updateCategory}
        addCategory={addCategory}
        productCategories={productCategories}
      />
    );
    wrapper.instance().handleFormChange(event);
    wrapper.instance().handleFormSubmit(event);
    wrapper.instance().componentWillUnmount();
    expect(wrapper).toMatchSnapshot();
  });
});
