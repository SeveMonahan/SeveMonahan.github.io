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