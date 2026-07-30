var nestedArray = [
    [5, 6, 7, -2],
    [-5, -6, -7],
    [8, 9, 10],
    [3, 5, 2, 1, 4],
    [-3, 5, 2, 1],
    [4, 2, 6, 8],
];

// 1. Find Maximum
function findMaximum(array) {
    var maximum = array[0][0];

    for (var i = 0; i < array.length; i++) { 
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j] > maximum) {
                maximum = array[i][j];
            }
        }
    }

    return maximum;
}

// 2. Calculate Average
function calculateAverage(array) {
    var sum = 0;
    var count = 0;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            sum = sum + array[i][j];
            count++;
        }
    }

    return sum / count;
}

// 3. Count Negative Numbers
function countNegativeNumbers(array) {
    var count = 0;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j] < 0) {
                count++;
            }
        }
    }

    return count;
}

// 4. Subarray Sums
function getSubarraySums(array) {
    var sums = [];

    for (var i = 0; i < array.length; i++) {
        var sum = 0;

        for (var j = 0; j < array[i].length; j++) {
            sum = sum + array[i][j];
        }

        sums.push(sum);
    }

    return sums;
}

// 5. Sort Subarrays
function sortSubarrays(array) {
    var sortedArray = [];

    for (var i = 0; i < array.length; i++) {
        var sortedSubarray = [...array[i]].sort(function (a, b) {
            return a - b;
        });

        sortedArray.push(sortedSubarray);
    }

    return sortedArray;
}

// 6. Flatten Nested Array
function flattenNestedArray(array) {
    var flattenedArray = [];

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            flattenedArray.push(array[i][j]);
        }
    }

    return flattenedArray;
}

// 7. Remove Duplicates
function removeDuplicates(array) {
    var flattenedArray = flattenNestedArray(array);
    var uniqueNumbers = [];

    for (var i = 0; i < flattenedArray.length; i++) {
        if (!uniqueNumbers.includes(flattenedArray[i])) {
            uniqueNumbers.push(flattenedArray[i]);
        }
    }

    return uniqueNumbers;
}

// 8. Reverse Subarrays
function reverseSubarrays(array) {
    var reversedArray = [];

    for (var i = 0; i < array.length; i++) {
        reversedArray.push([...array[i]].reverse());
    }

    return reversedArray;
}

// 9. Filter Even Numbers
function filterEvenNumbers(array) {
    var evenNestedArray = [];

    for (var i = 0; i < array.length; i++) {
        var evenSubarray = [];

        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j] % 2 === 0) {
                evenSubarray.push(array[i][j]);
            }
        }

        evenNestedArray.push(evenSubarray);
    }

    return evenNestedArray;
}

// 10. Find Longest Subarray
function findLongestSubarray(array) {
    var longest = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }

    return longest;
}

// Function calls
console.log("1. Maximum:", findMaximum(nestedArray));
console.log("2. Average:", calculateAverage(nestedArray));
console.log("3. Negative count:", countNegativeNumbers(nestedArray));
console.log("4. Subarray sums:", getSubarraySums(nestedArray));
console.log("5. Sorted subarrays:", sortSubarrays(nestedArray));
console.log("6. Flattened array:", flattenNestedArray(nestedArray));
console.log("7. Without duplicates:", removeDuplicates(nestedArray));
console.log("8. Reversed subarrays:", reverseSubarrays(nestedArray));
console.log("9. Even numbers:", filterEvenNumbers(nestedArray));
console.log("10. Longest subarray:", findLongestSubarray(nestedArray));