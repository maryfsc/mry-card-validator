module.exports.cardValidator = function cardValidator (input) {
  if (input === undefined) {
    throw new Error('None parameter is given');
  }

  if (typeof input !== 'number') {
    throw new Error('Parameter should be a number');
  }

  let reversedNumber = Array.from(input.toString()).reverse().map(Number);

  if (input.toString().length === 1) {
    throw new Error('Number is too short');
  }  
  
  let singleDigitsArray = reversedNumber.map((digit, index) => {
    let position = index % 2 !== 0 ? digit * 2 : digit;
    return position >= 10 ? position - 9 : position;
  });

  let result = singleDigitsArray.reduce((a, b) => a + b, 0);

  return result % 10 === 0 ? true : false;
};
