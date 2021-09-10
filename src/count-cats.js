import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  return matrix.reduce((total, item) => {
    item.map(elem => {
      if (elem === '^^') total++}
      )
    return total
  }, 0)
}

console.log(countCats([
    [0, 1, '^^'],
   [0, '^^', '^^'],
    ['^^', 1, '^^']
   ]));