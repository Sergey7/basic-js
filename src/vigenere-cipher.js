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
    this.machine = (typeof(mod) === 'boolean')?mod:true;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
    this.regex = new RegExp('[a-z]');
  }

  getMessageTrueLength (message, key) {
    let messageOnlyText = message.replace(/[^a-z]+/g, '')
    if (messageOnlyText.length > key.length) {
      key = key.repeat(Math.ceil((messageOnlyText.length - key.length) / key.length) + 1);
      key = key.substring(0, messageOnlyText.length)
    }
    return key
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`)
    }
    message = message.toLowerCase()
    key = key.toLowerCase()
    key = this.getMessageTrueLength(message, key)
    let encryptStr = '';
    let noChar = 0;
    for (let i = 0; i < message.length; i++) {
      if (!this.regex.test(message[i])) {
        encryptStr += message[i];
        noChar++
        continue
      }
      encryptStr += this.alphabet[(this.alphabet.search(message[i]) + this.alphabet.search(key[i - noChar])) % 26]
    }
    return (this.machine)?encryptStr.toUpperCase():encryptStr.toUpperCase().split('').reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error(`Incorrect arguments!`)
    }
    message = message.toLowerCase()
    key = key.toLowerCase()
    key = this.getMessageTrueLength(message, key)
    let encryptStr = '';
    let noChar = 0;
    for (let i = 0; i < message.length; i++) {
      if (!this.regex.test(message[i])) {
        encryptStr += message[i];
        noChar++
        continue
      }
      encryptStr += this.alphabet[(this.alphabet.search(message[i]) + 26 - this.alphabet.search(key[i - noChar])) % 26] 
    }
    return (this.machine)?encryptStr.toUpperCase():encryptStr.toUpperCase().split('').reverse().join('');
  }
}

// const directMachine = new VigenereCipheringMachine();
// console.log( directMachine.encrypt('attack at dawn!', 'alphonse'));
// console.log( directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
// // AEIHQX SX DLLU!