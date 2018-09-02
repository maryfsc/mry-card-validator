module.exports.multiplyOddIndexes = function multiplyOddIndexes(digit, index) {
  if (index % 2 === 0){
    return digit;
  } else {
    if (digit * 2 <= 9) {
      return digit * 2;
    } else {
      return digit * 2 - 9;
    }
  }
};

module.exports.cardValidator = function cardValidator (input) {
  if (input === undefined) {
    throw new Error('None parameter is given');
  }

  if (typeof input !== 'number') {
    throw new Error('Parameter should be a number');
  }

  

  let reversedNumber = Array.from(input.toString()).map(Number).reverse();
  
  let singleDigitsArray = reversedNumber.map(num => multiplyOddIndexes(num, 0));

  let sum = singleDigitsArray.reduce((a, b) => a + b, 0);

  return sum % 10 === 0 ? true : false;
};

// try {
 
//   
//   if (input.toString().length === 1) throw 'Number is too short';
// }

// catch(err) {
//   err;
// }