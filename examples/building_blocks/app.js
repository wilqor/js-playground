var os = 'windows';
console.log(os);
console.log(typeof os);

var uninitialized;
console.log(uninitialized);
console.log(typeof uninitialized); // type is returned as a string

// primitive data types
// string, number, boolean, null, undefined, symbol (ES6)

var name = 'Joe'; // same as: var name = "Joe";
console.log(typeof name);
var hasQuotes = "there is a \"quote\" inside";
console.log(hasQuotes);
// length is a property
console.log("Has quotes is: " + hasQuotes.length + " characters long");
// toUpperCase() is a method()
console.log(hasQuotes.toUpperCase());

// operators
// arithmetic: * / % + -
// assignment: =
// comparison: >, >=, <, <=
// equal value: ==
// equal value and type: ===, uses coersion
8 == '8'; // true
// not equal: !=, !==
// inc/dec: x++, ++x, x--, --x
// concatenation: 'a' + 'b'