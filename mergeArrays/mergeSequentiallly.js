// =============================================================
// Lecture 7 - Data Structures with JavaScript
// Topic: Merging Two Arrays using While Loop
// =============================================================
//
// In this lesson, we’ll learn how to merge two arrays manually
// using while loops. This helps us understand how array merging
// works step-by-step — similar to how the "merge" step works in
// the Merge Sort algorithm.


// -------------------------------------------------------------
// 🧩 Method 2: Sequential Merge (Index-Based Join)
// -------------------------------------------------------------
//
// This method merges arrays sequentially — without comparisons.
// It first adds all elements from the first array, then from the
// second array. It’s not meant for sorting but helps to understand
// pointer usage and array traversal.
// -------------------------------------------------------------

let a = [1, 2, 3, 4, 5];  // First array
let b = [6, 7, 8, 9];     // Second array
let c = 0;                // Main counter
let d = [];               // Merged result array
let e = 0;                // Pointer for the second array

let aLength = a.length;
let bLength = b.length;
let bothLength = aLength + bLength;

// Helper function to find which array has a larger length
const findLargeLength = (firstArray, secondArray) => {
    let firstLength = firstArray.length;
    let secondLength = secondArray.length;

    if (firstLength <= secondLength) {
        console.log("secondArray has larger or equal length");
        return secondLength;
    } else {
        console.log("firstArray has larger length");
        return firstLength;
    }
};

const largeLength = findLargeLength(a, b);
console.log(`Larger length found: ${largeLength}`);

// Merge sequentially without comparison
while (c < bothLength) {
    if (c < largeLength) {
        d[c] = a[c];
        c++;
    } else {
        e = c - largeLength;  // Correct index for second array
        console.log(`Pointer e (for array b): ${e}`);
        d[c] = b[e];
        c++;
    }
}

console.log("After merging (Method 2): Sequential merge result →", d);


// -------------------------------------------------------------
// ⚙️ Note:
// In JavaScript, you can merge arrays directly using the concat()
// method or spread operator:
//     const merged = [...data1, ...data2];
// But in DSA, we perform merging manually to understand how data
// is combined and how pointers move internally.
// -------------------------------------------------------------