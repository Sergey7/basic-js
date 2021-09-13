import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    const additionRepeatTimes = (options.additionRepeatTimes)?options.additionRepeatTimes:1;
    const addition = (options.addition === undefined)?'':String(options.addition);
    const additionSeparator = (options.additionSeparator)?String(options.additionSeparator):'|';
    const fullAddition = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
    const separator = (options.separator)?String(options.separator):'+';
    const repeatTimes = (options.repeatTimes)?options.repeatTimes:1;
    str = String(str);
    return (str + fullAddition + separator).repeat(repeatTimes - 1) + str + fullAddition
}
