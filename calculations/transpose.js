module.exports = function transpose(m) {
  const numRows = m.length;
  const numCols = m[0].length;

  let t = new Array(numCols);

  for (var r = 0; r < numCols; r++) {
    t[r] = new Array;
    for (var c = 0; c < numRows; c++) {
      t[r].push(m[c][r]);
    }
  }
  return t;
}
