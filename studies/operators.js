/*
* OPERATORS:
*
* 0. Operators take one or more variables and transform them in some way.
*
* 1. Operators allow computers to turn data into more data according to predefined rules -
* or in other words, to computer.
*/

// 1. Assignment Operators //

// Assignment operators change what value a variable is assigned. The simpliest is the = sign:

var foo = "Assinging a string to variable 'foo'"; // 'foo' now has an assigned value.

// Other assignment operators change the variable depending on its former value.

foo += "!"; // 'foo' has a "!" at the end now.

var number = 0;

number -= 1;

number /= 0.5;

number *= 100;

console.log(number); // -200 after all the changes.

// 2. Arithmatic Operators //

// These are your standard "four function calculator" operations
// They all take in two numbers and output a third number.

// '+'
console.log(1 + 1); // Prints 2

// '-'
console.log(1 - 1); // Prints 0

// '*'
console.log(2 * 3); // Prints 6

// '/'
console.log(6 / 2); // Prints 3


// 3. Comparision Operators //

// These operators accept two values, and output a boolean
// Useful when you have two values you need to compare - like needing
// to see if somebody is old enough to buy alcohol or tall enough to
// go on an amusement park ride.

// '>'
console.log(6 > 1); // Prints true

// '<'
console.log(6 < 1); // Prints false
console.log('a' < 'd'); // Prints true

// '!=='
console.log(6 !== 1); // Prints true

// '==='
console.log(6 === 1); // Prints false

// 4. Logical Operators //

// Logical Operators turn two boolean values into a third boolean values.
// This allows for simple chaining of conditions, allow for more
// complex logic. Such as, if somebody hungry AND it is Mondday, ask if
// they want red beans and rice.

var isHungry  = true;
var isSick    = false;
var isMonday  = false;
var isTuesday = true;

// '&&', pronounced "and"
console.log(isHungry && isTuesday); // Prints true
console.log(isHungry && isMonday); // Prints false.

// '||', pronounced "or"
console.log(isHungry || isMonday); // Prints true.
console.log(isSick || isMonday); // Prints false

// 5. Unary Operators //

// Unary Operators are an eclectic set of operators which only need
// one value to operate. They each have different purposes.

// '!'
// The "not" operator, this reverts a boolean.
var todayIsAWeekend = false;

if(!todayIsAWeekend){
    console.log("Time to go to work"); // this is printed.
}

// 'typeof'
// This operator returns a string indicating the datatype of its argument.

console.log(typeof {}); // prints "object"
console.log(typeof 12); // prints "number";

// '-'
// This operator return the aritmatic inverse of an number;

var five = 5;

console.log(-five); // prints "-5"

// 6. Ternary Operator //

// Another eclectic operator, originates from C programming as a more efficent way
// to write a very simple if statement. If the first argument is true, the second
// argument is returned. Otherwise, the third argument is return.

var message = todayIsAWeekend ? "Take the day off!" : "Come into work!";

// Since todayIsAWeekend was true during ^ statement, this will print "Take the day off!"
console.log(message);

