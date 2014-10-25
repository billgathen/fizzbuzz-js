function fizzbuzzUpTo(max) {
  'use strict';
  var result = [], i = 1;
  for (i = 1; i <= max; i += 1) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }
  return result.join(', ');
}
