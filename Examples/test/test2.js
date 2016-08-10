var should = require('chai').should();
var expect = require('chai').expect;
var vowels = ['a', 'e', 'i', 'o', 'u'];
var disemvowel = require('../disemvowel.js');

describe('Disemvowel', function () {
  it('should return a string without vowels', function () {
    expect(disemvowel('the quick brown fox jumped over the lazy dog')).to.not.include(vowels);
  });
});