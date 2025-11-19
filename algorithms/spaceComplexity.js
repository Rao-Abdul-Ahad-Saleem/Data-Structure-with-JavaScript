// ============================================================================
//                          Space Complexity (Big-O)
//                  How Much EXTRA Memory an Algorithm Uses
// ============================================================================
//
// Space Complexity measures how much *extra* memory an algorithm needs
// as input size grows.
//
// NOTE:
// - Input itself is NOT counted.
// - Only variables, new arrays, recursion stacks, etc.
//
// Common complexities: O(1), O(n), O(n²).
// ============================================================================


// ============================================================
// O(1) — Constant Space
// Uses same amount of memory regardless of input size
// ============================================================
function constantSpaceExample(arr) {
    let sum = 0; // Only one variable

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // No extra memory
    }

    console.log("Sum:", sum);
}

constantSpaceExample([1, 2, 3, 4]);
// => Always O(1) extra space


// ============================================================
// O(n) — Linear Space
// Uses memory proportional to input size (new array created)
// ============================================================
function linearSpaceExample(arr) {
    let newArray = []; // grows with input → O(n)

    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i] * 2);
    }

    console.log("New Array:", newArray);
}

linearSpaceExample([10, 20, 30]);
// => O(n) because new array of size n is created


// ============================================================
// O(n²) — Quadratic Space
// Creating 2D arrays (matrix-like structure)
// ============================================================
function quadraticSpaceExample(n) {
    let matrix = []; // size n x n → n² space

    for (let i = 0; i < n; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = i + j;
        }
    }

    console.log(matrix);
}

quadraticSpaceExample(3);
// => O(n²)


// ============================================================
// SUMMARY:
// O(1) → No new big structures
// O(n) → New array proportional to input
// O(n²) → 2D structures
// ============================================================
