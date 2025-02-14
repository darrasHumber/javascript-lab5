//Part 2: Create the Math Module

import { toUpperCase } from "./stringModule.js";

import { findMax } from "./arrayModule.js";

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

//Part 5: Adding a Default Export
export default function multiply(a, b) {
  return a * b;
}

export function addAndLogUpper(a, b) {
  const result = add(a, b);
  console.log(toUpperCase(result.toString()));
}

//Part 8: Final Challenge

export function doubleMaxAndLogUpper(arr) {
  const doubleMax = multiply(2, findMax(arr));
  console.log(toUpperCase(doubleMax.toString()));
}

export function multiplyMaxAndLogUpper(arr, multiplier) {
  const doubleMax = multiply(multiplier, findMax(arr));
  console.log(`\nInput array: [${arr}]`);
  console.log(`Multiplier: ${multiplier}`);
  console.log(toUpperCase(doubleMax.toString()));
}
