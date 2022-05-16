/*
* LOOPS:
*
* 0. A loop is a what of "iterating" across a piece of code, running it over
* and over until a condition is met.
*
* 1. For loops iterate a specific number of times, while "while loops" can have
* any condition
*/
// SECTION 1: Loop Types

// 1.1 For loop

// A for loop is used to execute some code a fixed number of times.
for(var i = 0; i < 5; i++){ // Do this 5 times.
	console.log(i);
}

// This can be variable in some cases - you can use it to go through an
// array

var array = ["a", "b", "c", "d", "e"];

for(var i = 0; i < array.length; i++){
	console.log(array[i]);
}

// 1.2 While loop

// A while loop runs until a particular variable becomes true.
// This is useful if you have a process with an unknown number of iterations.

var shouldContinue = true;
while(shouldContinue){
	shouldContinue = Math.random() > 0.8 ? false : true;
	console.log("#");
}

// 1.3 For-in loop

// A For-in loop iterates over through all keys in a object
// useful if you need to access all properties in an object.

var object = {a: 1, b: 2, c: 3};

for(key in object){ // Go over every key in object
	console.log(`${key} : ${object[key]}`);
}


// SECTION 2 - Backwards loops

// For loops can go backwards. All loops have three parts, an
// initalization, a "continue check", and a incrementor.

// See the following:

for(
var i = 0; // Initalization
i < 5;     // Continue Check
i++        // Increment
){
	console.log(i);
}

// So if we change the increment and continue check, we can
// count backwards:

for(
var i = 0;
i > -5;
i--
){
	console.log(i);
}

// Similarly, we can go through an array backwards.
for(
var i = array.length - 1;
i >= 0;
i--
){
	console.log(array[i]);
}