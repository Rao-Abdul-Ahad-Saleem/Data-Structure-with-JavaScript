// -------------------------------------------------------------
//                 Lec 10 : Array Sorting (Bubble Sort)
// -------------------------------------------------------------
//
// What is Bubble Sort?
// --------------------
// Bubble Sort is the simplest comparison-based sorting algorithm.
// It repeatedly compares adjacent elements and swaps them if they
// are in the wrong order.
//
// Why "Bubble"?
// -------------
// Because the largest values "bubble up" to the end of the array
// after each full pass.
//
// Time Complexity  : O(n²) → two nested loops
// Space Complexity : O(1)  → sorting happens inside the same array
//
// -------------------------------------------------------------

// Initial unsorted array
let s = [47, 34, 10, 144, 5];

console.log("Before sorting:", s);

// -------------------------------------------------------------
// Bubble Sort Algorithm
// -------------------------------------------------------------
for (let i = 0; i < s.length; i++) {

    // This comment shows that we have entered the outer loop
    // (Each pass places the next largest element at the correct position)
    console.log(`\n------ Pass ${i + 1} of Outer Loop ------`);
    
    for (let j = 0; j < s.length - 1; j++) {

        console.log(`\nComparing s[${j}] = ${s[j]} with s[${j + 1}] = ${s[j + 1]}`);
        console.log("Array before comparison:", s);

        // Check and swap if the current element is greater
        if (s[j] > s[j + 1]) {

            console.log("Swap is required — swapping…");

            // Using a temporary variable to swap values
            let temp = s[j];
            s[j] = s[j + 1];
            s[j + 1] = temp;

            console.log("Array after swapping :", s);

        } else {
            console.log("No swap required");
        }
    }
}

// Final sorted array
console.log("\nAfter sorting (Bubble Sort):", s);
