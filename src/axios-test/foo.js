import axios from 'axios';
import URLs from './constant';

const foo = async () => {
  const result = await axios.get(`${URLs.baseURL}/posts/1`);

  return result.data;
};

export default foo;
