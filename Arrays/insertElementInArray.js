// =============================================================
// Lecture 3 - Data Structures with JavaScript
// Topic: Inserting an Element into an Array (Manually)
// =============================================================

// -------------------------------------------------------------
// 🧩 Method 1: Manual Insertion using Backward Loop and Shifting
// -------------------------------------------------------------
//
// In this method, we manually shift array elements to the right
// starting from the last index until we reach the target position.
// Then we place the new value at that position.
//
// This simulates how insertion happens at the memory level in DSA.
//
// -------------------------------------------------------------

let arr1 = [12, 5, 6, 56, 45];
let newValue = 500;   // Value to insert
let position = 2;     // Index where we want to insert the new value

for (let i = arr1.length - 1; i >= 0; i--) {
    if (i >= position) {
        // Shift each element one step forward
        arr1[i + 1] = arr1[i];

        // When we reach the desired position, place the new value
        if (i === position) {
            arr1[i] = newValue;
        }
    }
}

console.log(`After insertion (Method 1): Value  ${newValue} inserted at the position ${position}`, arr1);

// -------------------------------------------------------------
// 🧩 Method 2: Simplified Version of the Above Approach
// -------------------------------------------------------------
//
// Here, we start the loop from arr.length (instead of arr.length - 1)
// and move backward until the desired position.
//
// The logic remains the same, but the loop condition and assignment
// are slightly simplified for better readability.
//
// -------------------------------------------------------------

let arr2 = [120, 15, 60, 5, 45];
let newValue2 = 900;
let position2 = 3;

for (let i = arr2.length; i >= position2; i--) {
    // Shift elements one step forward
    arr2[i] = arr2[i - 1];

    // Insert the new value once the pointer reaches the desired position
    if (i === position2) {
        arr2[i] = newValue2;
    }
}

console.log(`After insertion (Method 2): Value ${newValue2} inserted at position ${position2}`, arr2);
