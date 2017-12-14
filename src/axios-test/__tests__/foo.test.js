jest.mock('../constant');

import axios from 'axios';
import nock from 'nock';
import httpAdapter from 'axios/lib/adapters/http';

const host = 'http://localhost';

describe('', () => {
  let foo;

  beforeEach(() => {
    nock.cleanAll();

    foo = require('../foo').default;
  });

  it('hello', async () => {
    let scope = nock(host)
      .get('/posts/1')
      .reply(200, { 'foo': 'bar' });

    const result = await foo();

    expect(result).toMatchObject({ foo: 'bar' });
    expect(scope.isDone()).toBeTruthy();
  });
});
