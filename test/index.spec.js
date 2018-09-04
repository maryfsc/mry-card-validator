const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const cardLib = require('../index.js');
const cardValidator = cardLib.cardValidator;

describe('cardLib', function() {
 describe('when parameter is not a number', function() {
   it('should throw an error', function() {
     let noNumber = () => { cardLib.cardValidator('36490102462661') };
     expect(noNumber).to.throw('Parameter should be a number');
   });
 });
 describe('when none parameter is given', function() {
   it('should throw an error', function() {
     let noParameter = () => { cardLib.cardValidator() };
     expect(noParameter).to.throw('None parameter is given');
   });
 });
 describe('when it\'s a single digit number', function() {
  it('should throw an error', function() {
    let shortNumber = () => { cardLib.cardValidator(1) };
    expect(shortNumber).to.throw('Number is too short');
  });
 });
 describe('when it\'s an integer and valid card', function() {
  it('should return true', function() {
    expect(cardLib.cardValidator(36490102462661)).to.equal(true);
  });
 });
 describe('when it\'s an integer and invalid card', function() {
  it('should return false', function() {
    expect(cardLib.cardValidator(76849395473385)).to.equal(false);
  });
 }); 
});