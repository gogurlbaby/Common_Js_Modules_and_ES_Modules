// Variable Declaration
let num1 = 5;
let num2 = 10;

// Dummy function 1
function addNumbers(a, b) {
  return a + b;
}

// Dummy function 2
function multiplyNumbers(a, b) {
  return a * b;
}

// Exporting variables and functions using module pattern to export to another file
module.exports = {
    // num1: num1,
    // num2: num2,
    // addNumbers: addNumbers,
    multiplyNumbers: multiplyNumbers
  };