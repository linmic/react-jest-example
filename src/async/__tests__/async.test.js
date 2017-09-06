import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

const apiURL = 'http://localhost';

axios.defaults.host = apiURL;
axios.defaults.adapter = httpAdapter;

describe('async example', () => {
  beforeEach(() => {
    nock.cleanAll();

    nock(apiURL)
      .get('/users/1')
      .reply(200, { name: 'Linmic', age: 32 });
  });

  it('works with promises', () => {
    expect.assertions(1);

    return axios.get(`${apiURL}/users/1`).then(res => {
      expect(res.data).toMatchObject({
        name: 'Linmic',
        age: 32,
      });
    });
  });

  it('works with async', async () => {
    const result = await axios.get(`${apiURL}/users/1`);

    expect(result.data).toMatchObject({
      name: 'Linmic',
      age: 32,
    });
  });
});
