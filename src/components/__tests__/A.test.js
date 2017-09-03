import React, { Component } from 'react';
import { mount } from 'enzyme';

describe('<A />', () => {
  let makeSubject;
  let params;
  let A;

  beforeEach(() => {
    params = {};
    A = require('../A').default;

    makeSubject = () => mount(<A />);
  });

  it('should match latest snapshot', () => {
    const subject = makeSubject();

    expect(subject.html()).toMatchSnapshot();
  });

  it('should call foo when .btn-foo clicked', () => {
    const subject = makeSubject();
    
    subject.instance().foo = jest.fn();
    subject.update();
    subject.find('.btn-foo').simulate('click');
    expect(subject.instance().foo).toHaveBeenCalled();
  });
});
