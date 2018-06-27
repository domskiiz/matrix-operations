module.exports = function multiply(a, b) {
  /*
  * Check size of matricies.
  * If a is an nxm matrix, b must be an mxp matrix.
  */
  aNumRows = a.length; aNumCols = a[0].length;
  bNumRows = b.length; bNumCols = b[0].length;

  if (aNumCols != bNumRows) {
    throw Error('Matricies are invalid sizes');
  }

  let result = new Array(aNumRows);

  for (var r = 0; r < aNumRows; r++) {
    result[r] = new Array(bNumCols);
    for (var c = 0; c < bNumCols; c++) {
      result[r][c] = 0;
      for (var i = 0; i < aNumCols; i++) {
        result[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return result;
}
