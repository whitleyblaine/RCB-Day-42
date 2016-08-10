var should = require('chai').should();
var expect = require('chai').expect;
var calculator = require('../calculator.js');

describe('Calculator', function () {
  it('should return the product of the 2 numbers when mutiply is the operation', function () {
    expect(calculator(4,3, 'multiply')).to.equal(12);
    expect(calculator(10,5, 'divide')).to.equal(2);
    expect(calculator(4,3, 'add')).to.equal(7);
    expect(calculator(42,40, 'subtract')).to.equal(2);
  });
});