var math = require('mathjs')

module.exports = function tensorProduct(a, b) {
  const aNumRows = math.size(a)[0]; const aNumCols = math.size(a)[1];
  const bNumRows = math.size(b)[0]; const bNumCols = math.size(b)[1];
  /*
   * Let a be a nxm matrix and b be a pxq matrix.
   * Then the tensor product is a (n*p)x(m*q) matrix.
   */
  const totalRows = aNumRows * bNumRows;
  const totalCols = aNumCols * bNumCols;

  let result = new Array(totalRows);
  for (let i = 0; i < totalRows; i++) {
    result[i] = new Array(totalCols);
  }

  for (let ra = 0; ra < aNumRows; ra++) {
    for (let ca = 0; ca < aNumCols; ca++) {
      for (let rb = 0; rb < bNumRows; rb++) {
        for (let cb = 0; cb < bNumCols; cb++) {
          result[bNumRows * ra + rb][bNumCols * ca + cb]
          = a[ra][ca]*b[rb][cb];
        }
      }
    }
  }
  return result;
}
