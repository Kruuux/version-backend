const { sum } = require('./sum');

describe('sum', () => {
  it('should return 3 when 1 and 2 are given', () => {
    expect(sum(1, 2)).toBe(3);
  });

})