// Importing modules
import multiply, {
  add,
  subtract,
  addAndLogUpper,
  doubleMaxAndLogUpper,
  multiplyMaxAndLogUpper,
} from "./mathModule.js";
import { toLowerCase, toUpperCase } from "./stringModule.js";
import { findMax, reverseArray } from "./arrayModule.js";

// Test data
const num1 = 7;
const num2 = 3;
const numbersArray = [1, 7, 9, 2, 3, 4];
const name = "mOhAmMeD";

// Part 2: Test math functions
console.log("Testing add and subtract functions from mathModule.js");
console.log(`Sum of ${num1} and ${num2} is ${add(num1, num2)}`);
console.log(
  `Difference between ${num1} and ${num2} is ${subtract(num1, num2)}`
);

// Part 3:Test string functions
console.log(
  "\n==============================================================="
);
console.log(
  "Testing toUpperCase and toLowerCase functions from stringModule.js"
);
console.log(`${name} in UPPERCASE is ${toUpperCase(name)}`);
console.log(`${name} in lowercase is ${toLowerCase(name)}`);

// Part 5: Test default export (multiply)
console.log("\n==============================================================");
console.log("Testing multiply function (default export) from mathModule.js");
console.log(`Product of ${num1} and ${num2} is ${multiply(num1, num2)}`);

// PArt 6: Test array functions
console.log(
  "\n==============================================================="
);
console.log("Testing findMax and reverseArray functions from arrayModule.js");
console.log("Original array:", numbersArray);

try {
  console.log(`Max element in array: ${findMax(numbersArray)}`);
  console.log("Reversed array:", reverseArray(numbersArray));
} catch (error) {
  console.error("Error:", error.message);
}

// Part 7:Test addAndLogUpper
console.log("==============================================================");
console.log("Testing addAndLogUpper function from mathModule.js");
addAndLogUpper(10, 20);

// Part 8:Test doubleMaxAndLogUpper
console.log("\n==============================================================");
console.log("Testing doubleMaxAndLogUpper function from mathModule.js");
doubleMaxAndLogUpper(numbersArray);

console.log("Testing multiplyMaxAndLogUpper function from mathModule.js");
multiplyMaxAndLogUpper(numbersArray, 2);
multiplyMaxAndLogUpper(numbersArray, 3);
multiplyMaxAndLogUpper(numbersArray, 10);
