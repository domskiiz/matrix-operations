var math = require('mathjs')
var det = require('./utils/twoByTwoDeterminant.js');

module.exports = function crossProduct(a, b) {
  /*
  * Check size of matricies.
  */
  const size = [3];
  if (math.size(a)[0] !== size[0] || math.size(b)[0] !== size[0]) {
    throw Error('Size of matricies must be 1x3');
  }

  /*
  * Calculate appropriate determinants.
  * i, j, and k represent the two by two matricies that are used
  * in calculating the appropriate i, j, and k components.
  */
  let i = [[a[1], a[2]], [b[1], b[2]]];
  let j = [[a[0], a[2]], [b[0], b[2]]];
  let k = [[a[0], a[1]], [b[0], b[1]]];

  let iComponent = det(i);
  let jComponent = det(j);
  let kComponent = det(k);

  return [iComponent, -jComponent, kComponent];
}
