/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

/*
* SECTION 1: Declaration and Assignment
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
* SECTION 2: var, let, and const
*/

/*
* There are three different ways to assign variables in javascript, each of which does different things.
* In general, the three keywords can be divided into the following purposes:
* const - Variables which are intended to never be changed.
* let - Variables with an intentionally limited scope.
* var - All other variables.
*/

// 1. consts //
const PI = 3.14; // Sets a variable intended to never be changed.
//PI = 4.00; // Will throw an TypeError

// 2. let //

// The primary purpose of a let varaible is to intentionally limit a scope. For example:

if(true){
    let x = 1; // Variable is trapped in this if block
}

//console.log(x); // Will throw a Reference Error

// This can also be done in while loops
do{
  let y = 1;
}while(false);
  
//console.log(y); // Will throw a Reference Error

//The primary reasons to limit scope is to avoid accidentally re-accessing an old, variable
//which no longer has a purpose.

if(true){
    let currentItem = 20;
}

// ...

//currentItem++; // This will cause a ReferenceError rather than silently
               // failing because we used "let"

// 3. Var //

if(true){
    var x = 1; // Most expansive, var variables are accessible from anywhere in the same scope.
}

console.log(x); // this will work, printing "1" to the console.

function foo(){
    var y = 1; // Different scopes, such as in functions do isolate var-variables, however
}

foo();

//console.log(y); // Will throw ReferenceError.

/*
* SECTION 3: Hoisting
*/

// Some variables, such as functions and var variables, are automatically brought to the top
// of the scope they occur in.

console.log(varVariable); // Will print "undefined" rather than throwing a ReferenceError.
var varVariable = "I've been initalized";

hoistingExample() // Will print "I can see the function 'Hoisting Example'".
function hoistingExample(){
    console.log("I can see the function 'Hoisting Example'");
}