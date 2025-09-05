// hoisting in action
// console.log(something); // hoisting of the variable and declare as var something;
// var something = 'something';
// console.log(something);


callingPeople(); // here the function was hoisted

function callingPeople() {
    console.log(`Calling to ${something}`); // here the variable was hoisted
}

var something = 'something'; // variable was assigned

console.log(something);