// =============================================================
// Lecture 4 - Data Structures with JavaScript
// Topic: Deleting an Element from an Array (Manually)
// =============================================================
//
// In this lesson, we’ll learn how to manually delete an element
// from a specific position in an array without using built-in
// methods like splice().
//
// This helps us understand how deletion works at the memory level
// in data structures (by shifting elements to the left).
// =============================================================

let arr = [13, 15, 67, 78, 60];
let position = 1; // Pointer (index) of the element to delete

// -------------------------------------------------------------
// Step 1: Shift all elements one position backward
// starting from the index of the element we want to delete.
// -------------------------------------------------------------
for (let i = position; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]; // Shift each element to the left
}

// -------------------------------------------------------------
// Step 2: Reduce the array length by one
// -------------------------------------------------------------
//
// Since the last element becomes duplicated (or undefined),
// we remove it by decreasing the array length.
// This simulates how deletion works in low-level arrays.
//
arr.length = arr.length - 1;

// -------------------------------------------------------------
// Step 3: Show the result with explanation
// -------------------------------------------------------------
console.log(
    `After deletion: Element at position ${position} has been removed`,
    arr
);

// -------------------------------------------------------------
// ⚙️ Note:
// In JavaScript, the same operation can be performed easily using:
// arr.splice(position, 1);
// But in DSA, we perform this manually to understand how elements
// shift in memory during deletion.
// -------------------------------------------------------------
