import React from 'react';
import { render } from 'enzyme';

describe('<C />', () => {
  let C;
  let makeSubject;

  beforeEach(() => {
    C = require('../C').default;

    makeSubject = () => render(<C />);
  });

  it('should match snapshot', () => {
    const subject = makeSubject();

    expect(subject).toMatchSnapshot();
  });
});