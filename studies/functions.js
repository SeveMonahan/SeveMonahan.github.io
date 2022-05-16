/*
* FUNCTIONS:
*
* 0. Functions are used to reuse code, isolating blocks in way that let you use it
* whenever you want.
*
* 1. You can isolate variables into "parameters", which let you "inject" variables into
* the function.
*/

// 1. Phases of a function //

// In order to use a function, you must first define the function and
// then execute it. A function's code is only run when it is called.

console.log("Step 1 - Before Function");

// This is the function definition. This defines what a function "does"
// Nothing immediate happens when javascripts gets to a function defintion.
// function definitions only have effects in the context of later functions calls.
function detectCall(){
	console.log("Function Call");
}

console.log("Step 2 - After Function Declaration");

// This is a function call. The function is used here, and code in the function
// definition is excuted. This allows for the function to have an actual effect
// (in this case, printing a string to console.)
detectCall(); // This is when the console prints "Function Call"

console.log("Step 3- After Function Call");

// 2. Parameters vs. Arguments //

// A *parameter* refers to the generic variable used in a function,
// its value indeterminate until it is called. An *argument* is 
// a specific value passed to the funciton when it is called.

function write(parameter){ // What's parameter? We don't know.
	console.log(parameter);
}

const argument1 = "Hello World!";
const argument2 = "Hello Mars!";

write(argument1); // Argument is "Hello World!"
write(argument2); // Argument is "Hello Mars!"

// 3. Named Function syntax //

// As already shown, a named function is called like this:

function foo(){
	console.log("Ran foo function");
}

// 4. Assign function to variable //

// The syntax is as follows:

if(true){
	let func = () => console.log("function in let variable");
	func();
}

// func() can no longer be called because it was in a let variable.

// 5. Optional Input and Outputs.

// This is the syntax for optional inputs:

function foobar (message = "Default Message"){
	// If there's not input, message with be "Default Message".
	// This is the "default argument"
	console.log(message);
}

foobar();
foobar("Hello Mars!");

// Output are assigned with the return keyword:

function foobarfoo(){
	return "Hello Venus!";
}

console.log(foobarfoo());

// 6. Scope //

// Functions have a "private scope" which hold variables. In order
// to make it easier to write code, the variables can't be accessed
// outside the function. This means you can ignore the variables in
// the function when writing outside code.

var globalMessage = "Hello Mecurary!";

var shadowedMessage = "Hello Jupiter!";

function limitedScope(){
	console.log(globalMessage);

	var shadowedMessage = "Hello Saturn!";
	var limitedScopeMessage = "Hello Neptune!";

	console.log(shadowedMessage);     // "Hello Saturn!"
	console.log(limitedScopeMessage); // "Hello Neptune!"
}

console.log(shadowedMessage);         // This is "Hello Jupiter!")
// console.log(limitedScopeMessage);  // This would throw a ReferenceError

// 7. Closures //

// The variables in a function can be "kept alive" if they're
// accessed by something else.

function closureFunction(){
	var message = "Hello Pluto!";
	return () => console.log(message);
}

var newFunction = closureFunction();
newFunction(); // This is "Hello Pluto!"
