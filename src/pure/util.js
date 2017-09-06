export const trimAll = (arr) => arr.map(s => s.trim());

export const reducer = (count, type) => {
  switch (type) {
    case 'PLUS_ONE': {
      return count += 1;
    }
    case 'MINUS_ONE': {
      return count -= 1;
    }
    default:
      return count;
  }
};
