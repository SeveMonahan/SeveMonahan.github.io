/*
* STRING MANIPULATION:
*
* 0. All strings are constants. Whenever you "manipulate" a string, you are technically creating
* a new string based on one or more older strings.
*
* 1. Strings can be manipulated through either operators or built-in functions of javascript, each
* of which do different things.
*/

// 1. With Operators //

console.log("first half" + "second half"); //prints "first halfsecond half"

// 2. With Functions //

var pangram = "The quick brown fox jumps over the lazy dog.";

// 'charAt' return the character (letter or digit) at a particular position 
console.log(pangram.charAt(2)); // prints "e"

// 'slice' slices part of the string
console.log(pangram.slice(3)); // print " quick brown fox jumps over the lazy dog."
console.log(pangram.slice(4,9)); // prints "quick"

// 'toUpperCase' capitalizes all letters in a string.
console.log(pangram.toUpperCase()); // print "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

// 'toLowerCase' makes all letters in a string lowercase
console.log(pangram.toLowerCase()); // print "the quick brown fox jumps over the lazy dog."
// There are dozens of other string manipulation functions. If you have a task to do,
// somebody somewhere has probably written a function which can do it.