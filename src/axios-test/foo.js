import axios from 'axios';
// axios.defaults.adatper = require('axios/lib/adapters/http');

const foo = async () => {
  return await axios.get('https://jsonplaceholder.typicode.com/posts/1');
};

export default foo;
