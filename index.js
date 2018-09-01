function cardValidator(input){
  let reversedNumber = Array.from(input.toString()).map(Number).reverse();
  
  let singleDigitsArray = reversedNumber.map(num => multiplyOddIndexes(num, 0));

  let sum = singleDigitsArray.reduce((a, b) => a + b, 0);

  return sum % 2 === 0 ? true : false;
}

function multiplyOddIndexes(digit, index) {
  if (index % 2 === 0){
    return digit;
  } else {
    if (digit * 2 <= 9) {
      return digit * 2;
    } else {
      return digit * 2 - 9;
    }
  }
}

module.exports = cardValidator;
module.exports = multiplyOddIndexes;