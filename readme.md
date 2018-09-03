# Credit Card Validator

A library to check if a credit card is valid using the Luhn Algorithm.

## Requirements

* [Node.js](https://nodejs.org/en/)
* [npm](https://docs.npmjs.com/getting-started/installing-node)

## Installation and use

You can easily install this library using npm just as it follows:

	$ npm install mry-card-validator

And you can use it just as easily with Node.js:

	$ node
	> const library = require('mry-card-validator)
	> library.cardValidator(36490102462661)
	> // true

## Roadmap

Version 1.0.0
* Returns `true` if a credit card is valid; `false` if it's not.