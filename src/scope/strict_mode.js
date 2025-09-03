// Example without use of strict mode

pi = 3.1415;

console.log(pi); // This run. But, the variable pi is automatically considerate as a var variable.

// When we use the strict mode, not run.

'use strict';
pi = 3.1415;
console.log(pi); // No run because the error ReferenceError: pi is not defined.