import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const stats = {}
  for(let i of domains) {
    let subStr = '.' + i.split('.').reverse().join('.')
    while (subStr !== '.') {
      if (stats[subStr]) {
        stats[subStr]++
      } else {
        stats[subStr] = 1
      }
      subStr = '.' + subStr.split('.').slice(1,-1).join('.')
      console.log(subStr);
    }
  }
  return stats
}