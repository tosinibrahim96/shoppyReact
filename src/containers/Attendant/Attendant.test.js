import React from 'react';
import { shallow } from 'enzyme';
import Attendant from './index';

describe('Test the Attendant Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Attendant />);
    expect(wrapper).toMatchSnapshot();
  });
});
