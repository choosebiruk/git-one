// feature-a.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

// Example usage
console.log(add(2, 3));        // Output: 5
console.log(subtract(5, 2));   // Output: 3
console.log(multiply(4, 3));   // Output: 12
console.log(divide(10, 2));    // Output: 5
console.log(divide(10, 0));    // Output: Error: Division by zero