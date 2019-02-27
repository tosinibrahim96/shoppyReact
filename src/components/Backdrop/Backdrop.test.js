import React from 'react';
import { shallow } from 'enzyme';
import Backdrop from './Backdrop';
import Navbar from '../Navbar';

describe('Test the Backdrop Component', () => {
  it('should match snapshot', () => {
    const click = jest.fn();
    const wrapper = shallow(<Backdrop click={click} />);
    expect(wrapper).toMatchSnapshot();
  });
});
