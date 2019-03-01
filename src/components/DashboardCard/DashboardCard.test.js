import React from 'react';
import { shallow } from 'enzyme';
import DasboardCard from './index';

describe('Test the DasboardCard Component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<DasboardCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
