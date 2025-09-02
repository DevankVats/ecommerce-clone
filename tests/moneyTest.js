import {formatCurrency} from '../data/utils/money.js'

console.log('test-suite: formatCurrency');

console.log('converts cents into dollars');
if(formatCurrency(2095)==='20.95'){
  console.log('passed');
}else{
  console.log('failed');
}

console.log('code works with 0');
if(formatCurrency(0)==='0.00'){
  console.log('passed');
}else{
  console.log('failed');
}

console.log('code rounds upto the nearest integer');
if(formatCurrency(2000.5)==='20.01'){
  console.log('passed');
}else{
  console.log('failed');
}

if(formatCurrency(2000.4)==='20.00'){
  console.log('passed');
}else{
  console.log('failed');
}


/*model-testing=> 2types
a.)manual testing:testing with the help of ui adding deleting and checking cart.
b.)automated testing:write code to test.
*/