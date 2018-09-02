const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

const cardLib = require('../index.js');
const cardValidator = cardLib.cardValidator;
const multiplyOddIndexes = cardLib.multiplyOddIndexes;

describe('cardLib', function() {

  describe('when parameter is not a number'), function() {
    it('should throw an error'), function() {
      let noNumber = () => { cardLib.cardValidator('text') };
      expect(noNumber).throw('Parameter should be a number');
    }
  
  describe('when none parameter is given', function() {
    it('should throw an error', function() {
      let noParameter = () => { cardLib.cardValidator() };
      expect(noParameter).throw('None parameter is given');
      });
    });
}
});
