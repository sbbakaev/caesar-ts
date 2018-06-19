import { MagicString } from './magicString';
export const STR_LENGTH = 26;
export const CHAR_CODE_FROM = 97;

export function caesar(string: string, key: number): string {
    let newStr = [];
    let magicStr = new MagicString([{strLength: STR_LENGTH, charCodeFrom: CHAR_CODE_FROM}]);
    magicStr.setOffset(key);
  
    newStr = string.split('').map((char, index) => {
      return magicStr.getOffsetChar(char);
    });
  
    return newStr.join('');
}
