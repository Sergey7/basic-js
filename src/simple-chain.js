import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  ob: [],
  getLength() {
    return this.ob.length();
  },
  addLink(value) {
    this.ob.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) === "number" && this.ob[position - 1]) {
      this.ob.splice(position - 1, 1)
      return this
    } else {
      this.ob = []
      throw new Error(`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    this.ob.reverse()
    return this
  },
  finishChain() {
    let res = this.ob.join("~~"); 
    this.ob = [];
    return res;
  }
};