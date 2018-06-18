var det = require('../calculations/utils/twoByTwoDeterminant');
var cp = require('../calculations/crossProduct')

describe("Determinants", function() {
  it("Easy example", function() {
    expect(det([[8, 3], [3, 1]])).toBe(-1);
  });

  it("Easy example", function() {
    expect(det([[0, 0], [0, 0]])).toBe(0);
  });

  it("Easy example", function() {
    expect(det([[2, 2], [19, 2324]])).toBe(4610);
  });
});

describe("CP", function() {
  it("First", function() {
    expect(cp([8, 3, 3], [3, 1, 5])).toEqual([12, -31 , -1]);
  });

  it("2nd", function() {
    expect(cp([42, -3, 12], [31, 10, 2])).toEqual([-126, 288, 513]);
  });

  it("3rd", function() {
    expect(cp([567, 32, 100], [-93, 24, 5])).toEqual([-2240, -12135, 16584]);
  });
});
