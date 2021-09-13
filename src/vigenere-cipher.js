import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor (mod) {
    this.machine = mod;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`)
    }
    while (message.length > key.length) {
      key 
    }
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`)
    }
  }
}
const al = []
console.log('a'.charCodeAt());
console.log('t'.charCodeAt());
console.log('e'.charCodeAt());
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let n = alphabet.slice(19) + alphabet.slice(0, 19)
let index = alphabet.search('E')
console.log('in', index);
console.log(n[index]);
console.log(alphabet[15]);