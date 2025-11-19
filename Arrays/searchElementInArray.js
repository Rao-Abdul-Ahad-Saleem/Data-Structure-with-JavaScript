// ==========================================================
//  Lecture: Linear Search in Array (DSA Basics)
//  Topic: Searching an Element in an Array
//  Method: Linear Search (Iterative)
//  Time Complexity: O(n)
//  Space Complexity: O(1)
// ==========================================================

// Sample array
let array = [12, 34, 56, 7, 8];

// Value we want to search inside the array
let valueToSearch = 8;

/**
 * --------------------------------------------------------------
 * FUNCTION: findElementInArray
 * PURPOSE:
 *    - Search for a specific value in the given array.
 *    - Uses Linear Search → checks each element one-by-one.
 *
 * PARAMETERS:
 *    searchValue       → The value we want to find.
 *    array_of_values   → The array in which we search.
 *
 * RETURNS:
 *    - Prints the index (pointer) where value is found.
 *    - Prints a message if value is not found.
 *
 * ABOUT LINEAR SEARCH:
 *    - This algorithm scans elements from index 0 to end.
 *    - Works on BOTH sorted and unsorted arrays.
 *    - Simple but not the most efficient for large datasets.
 *
 * Time Complexity:
 *    Best Case: O(1)  → value found at index 0
 *    Worst Case: O(n) → value not found or at last index
 *
 * Space Complexity:
 *    O(1) → Only one extra variable (isFound)
 * --------------------------------------------------------------
 */
function findElementInArray(searchValue, array_of_values) {
    let isFound = false;   // Flag to check if element is found

    // ----- Linear Search starts -----
    for (let i = 0; i < array_of_values.length; i++) {

        // Compare current element with the search value
        if (array_of_values[i] === searchValue) {
            console.log(`Value found at index (pointer): ${i}`);
            isFound = true;
            break; // Stop searching once value is found
        }
    }

    // If the flag is still false → element was not found
    if (!isFound) {
        console.log("Value not found in the array.");
    }
    // ----- Linear Search ends -----
}

// Call the function
findElementInArray(valueToSearch, array);
