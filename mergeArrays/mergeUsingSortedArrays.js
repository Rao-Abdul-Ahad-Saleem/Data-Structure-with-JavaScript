// =============================================================
// Lecture 7 - Data Structures with JavaScript
// Topic: Merging Two Arrays using While Loop
// =============================================================
//
// In this lesson, we’ll learn how to merge two arrays manually
// using while loops. This helps us understand how array merging
// works step-by-step — similar to how the "merge" step works in
// the Merge Sort algorithm.


// ⚠️ Important Concept:
// Comparison-based merging only works correctly if BOTH arrays
// are already sorted individually. If they are unsorted, the
// comparison will not maintain a proper sorted order.
// =============================================================


// -------------------------------------------------------------
// 🧩 Method 1: Comparison-Based Merge (Sorted Array Merge)
// -------------------------------------------------------------
//
// Here we merge two sorted arrays by comparing elements one by one.
// The smaller value is placed first in the new array.
//
// This is the exact logic used in the Merge Sort algorithm’s
// merging phase. It works correctly ONLY when both arrays are sorted.
// -------------------------------------------------------------

let data1 = [13, 16, 19, 40, 54, 60];     // Sorted array 1
let data2 = [10, 15, 17, 25, 100];     // Sorted array 2
let data3 = [];                           // To store the merged result

let d1 = 0;  // Pointer for data1
let d2 = 0;  // Pointer for data2
let d3 = 0;  // Pointer for data3

// Compare and merge until one array is fully traversed
while (d1 < data1.length && d2 < data2.length) {
    if (data1[d1] < data2[d2]) {
        data3[d3] = data1[d1];
        d1++;
    } else {
        data3[d3] = data2[d2];
        d2++;
    }
    d3++;
}

// Copy remaining elements from data1 (if any)
while (d1 < data1.length) {
    data3[d3] = data1[d1];
    d1++;
    d3++;
}

// Copy remaining elements from data2 (if any)
while (d2 < data2.length) {
    data3[d3] = data2[d2];
    d2++;
    d3++;
}

console.log(
    `After merging (Method 1): Comparison-based merge of two sorted arrays →`,
    data3
);


// -------------------------------------------------------------
// 🧠 Why Comparison Works Only for Sorted Arrays
// -------------------------------------------------------------
//
// Comparison-based merging relies on this rule:
// → At any moment, the element pointed to by each array’s pointer
//   (d1 or d2) must be the smallest remaining element in that array.
//
// Example (Sorted):
//   data1 = [10, 20, 30]
//   data2 = [15, 25, 35]
//   Comparison works perfectly → [10, 15, 20, 25, 30, 35]
//
// Example (Unsorted):
//   data1 = [30, 10, 20]
//   data2 = [25, 5, 15]
//   Comparison fails → output becomes [25, 5, 15, 30, 10, 20]
//   (not sorted and logically incorrect)
//
// ✅ Therefore, for comparison-based merging to work correctly,
//    both arrays must already be sorted.



// -------------------------------------------------------------
// ⚙️ Note:
// In JavaScript, you can merge arrays directly using the concat()
// method or spread operator:
//     const merged = [...data1, ...data2];
// But in DSA, we perform merging manually to understand how data
// is combined and how pointers move internally.
// -------------------------------------------------------------