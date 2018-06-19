import {STR_LENGTH, CHAR_CODE_FROM, caesar} from '../caesar';
import { assert } from 'chai';


describe('caesar', function () {
  it('should convert abc to bcd if key is 1', () => { 
    assert.equal(caesar('abc', 1), 'bcd')
  });

  it('should convert last alphabet char to first "z" to "a" if key is 1', () => {
    assert.equal(caesar('z', 1), 'a')
  });

  it('phrases should be equal if key is equal alphabet length', () => {
    assert.equal(caesar('abc', STR_LENGTH), 'abc')
  });

  it('should do not change string if char does not containe in alphabet', () => {
    assert.equal(caesar('!', 1), '!')
  });

  it('should convert key like string%STR_LENGTH', () => {
    assert.equal(caesar('a', 52), 'a')
  });
})