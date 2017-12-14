import axios from 'axios';
import nock from 'nock';
import httpAdapter from 'axios/lib/adapters/http';

const host = 'https://jsonplaceholder.typicode.com';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('', () => {
  let foo;

  beforeEach(() => {
    nock.cleanAll();

    foo = require('../foo').default;
  });

  it('hello', () => {
    nock(host)
      .get('/posts')
      .reply(200, { foo: 'bar' });

    expect(foo()).toMatchObject({ foo: 'bar' });
  });
});
