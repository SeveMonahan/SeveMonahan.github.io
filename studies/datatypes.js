/*
* DATA TYPES:
*
* 0. Every variable has a data type which describes how it can be used in javascript
*
* 1. Different data types are used for different purposes, you do not use the same data
* type to both store somebody's name and their age.
*
*/

// 1. Number //
// The simpliest data type, Number refers to any number. All of the following are numbers:
var years = 7;
var heightInCM = 600;
var PI = 3.14;

// Note that strings containing digits are not Numbers
var telephoneNumber = "555-5555" // A string rather than a Number.

// 2. String //
// A String is a series of charcters. These are used to show and manipulate text.
// All the following are strings:
var triangle = "#\n##\n###\n";
var favoriteActor = "Brad Pitt";
var friendsName = "亚历山德拉"; // Unicode.
var favoritePlay = "Shakespeare's 'Romeo and Juliet'"; // Single quotes allowed in double quotes.

// 3. Boolean //

// A Boolean is a variable which is either "true" or "false"

var imFalse = false;
var imTrue = true;

// This is useful when tracking the state of binary possibilities:

var todaysYourBirthday = false;
var livesInUSA = true;

// 4. Array //

// An Array is a group of variables smashed together, which can be individually
// accessed like this: array[x] where x is any number.
var presidents = ["George Washington", "Abe Lincoln"];
var evenNumbers = [2, 4, 6, 8, 10, 12];

// Arrays tend to be useful when all the variables of the array are similar in some factions,
// but it's not actually required for them to all be the same data type.
var mixedArray = ["Hello", 3.00, {}, []];

// 5. Objects //
// Objects are similar to arrays, but instead of accessing elements with number,
// elements are accessed with strings referred to as "keys". This makes Objects
// good at holding several variable which are related but disimilar.

var person = {
    name: "Fred",
    age: 27,
    occupation: "Chief",
    friends: ["Bob", "Zachery"]
}

// You can access items with dot notation:
var friendsArray = person.friends;

// or bracket notation:
var job = person["occupation"];

// 6. Function //
// A function is a snippet of code which does something.
// By attaching functions to variables, you can make a generic "higher-order function";

// There are several ways of declaring functions:
function function1(){
    console.log("function1");
}

var function2 = function(){
    console.log("function2");
}

var function3 = () => console.log("function3");

// And a higher-order function:

var doTwice = function(functionHere){
    functionHere();
    functionHere();
}

doTwice(function3); // Will print "function3" twice.

// 7. undefined //
// undefined is what a variable is a special value. Every variable is undefined
// if you haven't yet initalized it or fail to initalize it. Every function
// without an explict return value return undefined.

console.log(willBeDefinedLater); // Prints "undefined"
var willBeDefinedLater = "You'll never see this string";

console.log(function3()); // Prints "undefined"

// 8. null //

// null is like undefined in that it represents an absent value, but unlike
// undefined it must be explictly used by the programmer.

var imNull = null;

// null is often used to represent a value which wasn't found in the data.

function cleanObject(object){
    if(object.valid){
        return object;
    }

    return null; // Since our object wasn't good.
}

// 9. NaN //

// NaN stands for "Not a Number". It's a value used when a math expression
// unexpectedly includes a non-Number data type.

var imNaN = 7 - {};
var imNaNToo = 9 + undefined;

// 10. Infinity and -Infinity

// According to most forms of arithmatic, any number divided by 0 has no value.
// computers don't like "impossible" operations, so javascript instead
// defines numbers divided by 0 as infinity, keeping the sign of the number divided.

var infinity = 7/0;
var negativeInfinity = -9/0;

// Infinity and -Infinity can also be generated just by making a number too large for javascript
// to handle.

var infinityToBe = 1000;
for(var i = 0; i < 100; i++){
  infinityToBe *= infinityToBe;
}
console.log(infinityToBe); // Will show infinityToBe is now Infinity.

// 11. simple/primative datatypes vs. complex datatypes //

// The complex data types are object and array. Both of these datatypes can have
// other dataypes embedded inside them, which makes them complex.

// Simple
var primitiveString = "Hi";
var primitiveNumber = 2;

// Complex
var complexArray = [primitiveString, primitiveNumber];
var complexObject = {a: primitiveString, b: primitiveNumber};


// 12. Pass-by-Copy and Pass-by-Reference //

// Simple data types are passed by copy to functions, which mean the function gets
// its very own copy of the data to work with.

function simpleAdd(number){
    number = number + 1; // This change only happens to a copy.
}
simpleAdd(primitiveNumber); // Does nothing

console.log(primitiveNumber); // Still 2

// Complex data types, on the other hand, are passed by reference. This means the 
// functions operates on the original copy of the data, allowing the function
// to change the variable without explictly returning an altered version.

function complexAdd(array){
    (array[1])++; // This change happens to the value passed in.
}

complexAdd(complexArray); // Changes value

console.log(complexArray[1]); // Now this value is 3.
