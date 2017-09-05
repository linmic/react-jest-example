import React from 'react';
import { shallow, mount } from 'enzyme';

describe('<B />', () => {
  let B;
  let makeShallowSubject;
  let makeSubject;

  beforeEach(() => {
    B = require('../B').default;

    makeShallowSubject = () => shallow(<B />);
    makeSubject = () => mount(<B />);
  });

  it('should match shallow snapshot', () => {
    const subject = makeShallowSubject();

    expect(subject.html()).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const subject = makeSubject();

    expect(subject.html()).toMatchSnapshot();
  });
});