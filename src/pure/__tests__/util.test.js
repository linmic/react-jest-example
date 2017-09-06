import { trimAll, reducer } from '../util';

describe('utils', () => {
  it('should trim all string elements passed in function trimAll', () => {
    expect(trimAll([' a', 'b '])).toEqual(['a', 'b']);
  });

  describe('reducer', () => {
    it('should +1 to the current count if the type is PLUS_ONE', () => {
      expect(reducer(3, 'PLUS_ONE')).toBe(4);
    });

    it('should -1 to the current count if the type is PLUS_ONE', () => {
      expect(reducer(3, 'MINUS_ONE')).toBe(2);
    });
  });
});

