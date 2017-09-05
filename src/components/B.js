import React from 'react';
import C from './C';

const B = () => (
  <nav>
    {Array(3).fill().map((_, i) => <C key={i} id={i} />)}
  </nav>
);

export default B;