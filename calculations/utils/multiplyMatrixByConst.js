var math = require('mathjs')

module.exports = function multiplyMatrixByConst(a, c) {
  let result = new Array(math.size(a)[0]);
  a.forEach(function(row, rIndex) {
    result[rIndex] = new Array(math.size(a)[1]);
    row.forEach(function(col, colIndex) {
      result[rIndex][colIndex] = a[rIndex][colIndex] * c;
    })
  })
  return result;
}
