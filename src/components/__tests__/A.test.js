// jest.mock('../B', () => 'B');

import React, { Component } from 'react';
import { render, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<A />', () => {
  let makeSubject;
  let makeShallowSubject;
  let makeRenderSubject;
  let params;
  let A;

  beforeEach(() => {
    jest.resetModules();
    params = {
      bar: jest.fn(),
    };

    A = require('../A').default;

    makeSubject = () => mount(<A {...params} />);
    makeShallowSubject = () => shallow(<A {...params} />)
    makeRenderSubject = () => render(<A {...params} />);
  });

  describe('snapshots', () => {
    // snapshot
    it('should match latest render snapshot', () => {
      const subject = makeRenderSubject();

      expect(toJson(subject)).toMatchSnapshot();
    });

    it('should match latest shallow snapshot', () => {
      const subject = makeShallowSubject();

      expect(toJson(subject)).toMatchSnapshot();
    });

    it('should match latest mount snapshot', () => {
      const subject = makeSubject();

      expect(toJson(subject)).toMatchSnapshot();
    });
  });

  it('should set state.count to 1 if foo() is called', () => {
    const subject = makeSubject();

    subject.instance().foo();
    expect(subject.state().count).toBe(1);
  });

  // event simulate with shallow
  it('should call foo when .btn-foo clicked', () => {
    const subject = makeShallowSubject();

    subject.find('.btn-bar').simulate('click');
    expect(params.bar).toHaveBeenCalled();
  });

  // event simulate with mount
  it('should call foo when .btn-foo clicked', () => {
    const subject = makeSubject();

    subject.instance().foo = jest.fn();
    subject.update();
    subject.find('.btn-foo').simulate('click');
    expect(subject.instance().foo).toHaveBeenCalled();
  });

  // setState
  it('should display the <h1> when this.state.showTitle is true, and vice versa', () => {
    const subject = makeSubject();
    const titleEl = subject.find('h1');

    // default state
    expect(titleEl.prop('style')).toMatchObject({ display: 'none' });

    // the same works for setProps
    subject.setState({ showTitle: true });
    expect(titleEl.prop('style')).toBe(undefined);
  });
});
