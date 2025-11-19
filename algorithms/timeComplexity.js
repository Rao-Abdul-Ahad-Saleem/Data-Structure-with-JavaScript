// ============================================================================
//                           Time Complexity (Big-O)
//                  Understanding How Algorithm Time Scales
// ============================================================================
//
// Time Complexity explains how the running time of an algorithm increases
// as the size of the input grows.
// We use Big-O Notation (O(1), O(n), O(log n), O(n²), etc) to describe this.
//
// IMPORTANT:
// - We do NOT count actual seconds.
// - We count "number of operations".
// - We only focus on how the algorithm scales.
//
// Below are the most common complexities with examples.
// ============================================================================


// ============================================================
// O(1) — Constant Time
// Work does NOT depend on input size
// ============================================================
function constantTimeExample(arr) {
    // Always runs only ONE operation regardless of array size
    console.log("First element:", arr[0]);
}

constantTimeExample([10, 20, 30, 40]);  
// => Always O(1)


// ============================================================
// O(n) — Linear Time
// Work grows in direct proportion to input size
// ============================================================
function linearTimeExample(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);  // This runs n times
    }
}

linearTimeExample([1, 2, 3, 4]);
// => O(n) because loop runs n times


// ============================================================
// O(n²) — Quadratic Time
// Typically appears with nested loops
// ============================================================
function quadraticExample(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`i=${i}, j=${j}`);
        }
    }
}

quadraticExample(3);
// => O(n²) because for every i, j loops n times


// ============================================================
// O(log n) — Logarithmic Time
// Algorithms that reduce work by half each step (binary search)
// ============================================================
function logTimeExample(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    // Binary Search (only works on sorted array)
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            console.log("Found at index:", mid);
            return;
        }

        if (arr[mid] < target) start = mid + 1;
        else end = mid - 1;
    }

    console.log("Not found");
}

logTimeExample([10, 20, 30, 40, 50, 60], 40);
// => O(log n)


// ============================================================
// SUMMARY:
// O(1) → constant
// O(log n) → fast growth
// O(n) → linear
// O(n²) → slow (avoid for large inputs)
// ============================================================
