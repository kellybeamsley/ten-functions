"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */


//1. Define a function
// named isTrue
// that takes in any input and
// returns true if the input provided is exactly equal to true
// in value and boolean in data type.

//TODO
// [X] create function name istrue
// [X] with parameter
// [ ] return true if the input is exactly true
function isTrue(input){
    return input === true;
};



//2. Define a function named isFalse that takes in a value and returns true if and only if the argument provided false.
// isFalse(false)             // true
// isFalse(true)              // false
// isFalse(0)                 // false
// isFalse(null)              // false
// isFalse("")                // false
// isFalse("Banana")          // false
// isFalse([1, 2])            // false

function isFalse(input){
    return input === false;
}



//3.  Define a function named not that takes in any input and returns the boolean opposite of the provided input.
// not(false)                  // true
// not(0)                      // true
// not("")                     // true
// not(null)                   // true
// not(NaN)                    // true
// not(undefined)              // true
// not(true)                   // false
// not("something")            // false
// not(Infinity)               // false
// not(123)                    // false

function not(input){
    return !input;
}



// 4. Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.
// addOne(0)                    // 1
// addOne(2)                    // 3
// addOne(-5)                   // -4
// addOne(5.789)                // 6.789
// addOne(Infinity)             // Infinity
// addOne("2")                  // 3
// addOne("0")                  // 1
// addOne("banana")             // NaN
// addOne(true)                 // NaN
// addOne(NaN)                  // NaN

function addOne(input){
    return Number(input) + 1;
}


// 5. Define a function named isEven that takes in a single input. If the input is an even number or a string containing an even number, return true. Any other input should return false for the output.
// isEven(2)                   // true
// isEven(-8)                  // true
// isEven(0)                   // true
// isEven("42")                // true
// isEven(1)                   // false
// isEven("-3")                // false
// isEven(false)               // false
// isEven("banana")            // false

function isEven(input){
     if(typeof input === "boolean"){
         return false;
     }
     return  input % 2 === 0;
}



// 6. Define a function named isIdentical that takes in two input arguments. If each input is equal both in data type and in value, then return true. If the values are not the same data type or not the same value, return false.
// isIdentical(3, 3)                     // true
// isIdentical(false, false)             // true
// isIdentical("hello", "hello")         // true
// isIdentical(3, 3.0)                   // true
// isIdentical(undefined, undefined)     // true
// isIdentical(2, "2")                   // false
// isIdentical("javascript", "java")     // false

function isIdentical(input1, input2) {
    return input1 === input2 && typeof input1 === typeof input2;
}



// 7. Define a function named isEqual that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.
// isEqual(3, "3")                       // true
// isEqual("abc123", "abc123")           // true
// isEqual(true, 1)                      // true
// isEqual(0, false)                     // true
// isEqual(4, -5)                        // false
// isEqual("java", "javascript")         // false

function isEqual(input1, input2){
    return input1 == input2;
}



// 8. Define a function named or that takes in two input arguments. The output returned should be the result of an or operation on both inputs.
// or(true, true)                    // true
// or(true, false)                   // true
// or(false, true)                   // true
// or(false, false)                  // false
// or("hello", "world")              // "hello" (this behavior is non-obvious, research more!)

function or(input1, input2) {
    return input1 || input2;
}



// 9.  Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.
// and(true, true)                    // true
// and(true, false)                   // false
// and(false, true)                   // false
// and(false, false)                  // false
// and("hello", "world")              // "world" (this behavior is non-obvious, research more)

function and(input1, input2){
    return input1 && input2;
}

// 10. Define a function named concat that takes in two input arguments. If both arguments are strings, then return the concatenated result. If two numbers are provided, then return the string concatenation of each set of numerals.
// concat("code", "up")                // "codeup"
// concat("connect", 4)                // "connect4"
// concat("hello", "world")            // "helloworld"
// concat(4, 2)                        // "42"
// concat(true, true)                  // "truetrue"

function concat (input1, input2){
    return inut1.toString() + input2.toString();
}