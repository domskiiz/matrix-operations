import * as math from 'mathjs';

export function multiply(a, b) {
  /*
  * Check size of matricies.
  * If a is an nxm matrix, b must be an mxp matrix.
  */
  if (math.size(a)[1] != math.size(b)[0]) {
    throw Error('Matricies are invalid sizes');
  }

  

}
