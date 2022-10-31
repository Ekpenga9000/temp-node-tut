// Import modules and use them to excute the function in the intro

const numberEval = require('./5-utils');
const { five, ten, fifteen } = require('./4-number');
const data = require('./6-alternative-flavour');

require('./7-mind-granade')
numberEval(five);
numberEval(ten);
numberEval(fifteen);
console.log(data.aPerson.name)
console.log(data.items[0])

console.log(module)