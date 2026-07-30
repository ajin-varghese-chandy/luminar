// TASK-1

// 1. Print all the duplicate elements in an array
var arr = [10, 6, 7, 8, 10, 5, 7, 3, 5];

var duplicateElements = [
    ...new Set(
        arr.filter(function (number, index) {
            return arr.indexOf(number) !== index;
        })
    ),
];

console.log("1. Duplicate elements:", duplicateElements);

// 2. Find common elements in both arrays
var arr1 = [5, 7, 8, 3];
var arr2 = [7, 8, 2, 1];

var commonElements = arr1.filter(function (number) {
    return arr2.includes(number);
});

console.log("2. Common elements:", commonElements);

// TASK-3

// 1. Purpose of filter()
// filter() creates a new array containing only the elements that satisfy a condition.

// 2. How filter() works
// It checks every element using a callback function. If the callback returns true,
// the element is added to the new array. The original array is not changed.

// 3. Create a new array of even numbers
var integers = [1, 2, 3, 4, 5, 6, 7, 8];
var evenNumbers = integers.filter(function (number) {
    return number % 2 === 0;
});
console.log("3. Even numbers:", evenNumbers);

// 4. Difference between filter() and find()
// filter() returns an array containing all matching elements.
// find() returns only the first matching element, or undefined if there is no match.
var numbersAboveFour = integers.filter(function (number) {
    return number > 4;
});
var firstNumberAboveFour = integers.find(function (number) {
    return number > 4;
});
console.log("4. filter():", numbersAboveFour);
console.log("4. find():", firstNumberAboveFour);

// 5. Purpose of map()
// map() creates a new array by applying a function to every element.
// The original array is not changed.

// 6. Double each element in an array
var numbersToDouble = [1, 2, 3, 4, 5];
var doubledNumbers = numbersToDouble.map(function (number) {
    return number * 2;
});
console.log("6. Doubled numbers:", doubledNumbers);

// 7. Difference between map() and forEach()
// map() returns a new array containing the transformed values.
// forEach() only runs a function for every element and returns undefined.
var mappedNumbers = numbersToDouble.map(function (number) {
    return number * 2;
});
var forEachResult = numbersToDouble.forEach(function (number) {
    number * 2;
});
console.log("7. map() result:", mappedNumbers);
console.log("7. forEach() result:", forEachResult);

// 8. Extract specific properties from an array of objects
var people = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Eve", age: 28 },
];

var peopleNames = people.map(function (person) {
    return person.name;
});
console.log("8. Names:", peopleNames);

// 9. How reduce() works
// reduce() combines all array elements into one value using an accumulator.
// The second argument below (0) is the accumulator's initial value.
var valuesToAdd = [10, 20, 30, 40];
var total = valuesToAdd.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log("9. Total using reduce():", total);

// 10. Difference between reduce() and reduceRight()
// reduce() processes elements from left to right.
// reduceRight() processes elements from right to left.
var letters = ["A", "B", "C"];
var leftToRight = letters.reduce(function (result, letter) {
    return result + letter;
}, "");
var rightToLeft = letters.reduceRight(function (result, letter) {
    return result + letter;
}, "");
console.log("10. reduce():", leftToRight);
console.log("10. reduceRight():", rightToLeft);