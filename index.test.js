import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'antd';

import ButtonAntd from '../index';

describe('<ButtonAntd />', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(<ButtonAntd />);
    expect(wrapper.contains(<p>button text</p><Button>ANTD BUTTON</Button>)).toBe(true);
  });
});
