import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

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

    expect(toJson(subject)).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    const subject = makeSubject();

    expect(toJson(subject)).toMatchSnapshot();
  });
});
