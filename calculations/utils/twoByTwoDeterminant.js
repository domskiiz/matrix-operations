var math = require('mathjs');

module.exports = function twoByTwoDeterminant(a) {
  let size = [ 2, 2 ];
  if (math.size(a)[0] !== size[0] && math.size(b)[1] !== size[1]) {
    throw Error('Size of matrix must be 2x2');
  }

  let ad = a[0][0] * a[1][1];
  let bc = a[0][1] * a[1][0];

  return ad - bc;
}
