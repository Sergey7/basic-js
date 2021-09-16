import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (!str) return "";
  let codeStr = '';
  let lastChar = str[0];
  let sumChar = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === lastChar) {
      sumChar++;
      continue;
    } else {
      if (sumChar === 1) {
        codeStr += lastChar;
        lastChar = str[i];
      } else {
        codeStr += sumChar + lastChar;
        sumChar = 1;
        lastChar = str[i]
      }
    }
  }
  (sumChar === 1)?codeStr+=lastChar:codeStr+=sumChar+lastChar;
  return codeStr
}
