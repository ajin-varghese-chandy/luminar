// 1. Display name and age
var personName = "Max";
var personAge = 34;

console.log("Hi...My name is " + personName + "..." + personAge + " years old...");


// 2. Swap two numbers
var n1 = 6;
var n2 = 7;

console.log("Before  n1=" + n1 + " n2=" + n2);

var temp = n1;
n1 = n2;
n2 = temp;

console.log("After  n1=" + n1 + " n2=" + n2);


// 3. Type conversion functions
var value = 25.75;

console.log("Original value:", value);
console.log("Number():", Number(value));
console.log("parseInt():", parseInt(value));
console.log("parseFloat():", parseFloat(value));
console.log("String():", String(value));
console.log("Boolean():", Boolean(value));
console.log("isNaN(Number()):", isNaN(Number(value)));


// 4. Current date and time
var currentDate = new Date();

console.log("Current date and time:", currentDate);


// 5. Replace vowels using RegExp
var word = "Javascript";
var replacedWord = word.replace(/[aeiou]/gi, "*");

console.log(replacedWord);


// 6. Create a Map
var student = new Map();

student.set("name", "Max");
student.set("age", 34);
student.set("course", "JavaScript");

console.log(student);


// 7. Create a Set
var numberSet = new Set();

numberSet.add(10);
numberSet.add(20);
numberSet.add(30);
numberSet.add(10);
numberSet.add(20);

console.log(numberSet);


// 8. Remove duplicates from an array using Set
function removeDuplicates(array) {
    return [...new Set(array)];
}

var numbers = [10, 20, 30, 10, 20];
var uniqueNumbers = removeDuplicates(numbers);

console.log(uniqueNumbers);


// 9. Convert "123" into a number using three methods
var numberText = "123";

var convertedNumber1 = Number(numberText);
var convertedNumber2 = parseInt(numberText);
var convertedNumber3 = +numberText;

console.log("Using Number():", convertedNumber1);
console.log("Using parseInt():", convertedNumber2);
console.log("Using unary plus:", convertedNumber3);


// 10. Fix string addition
var stringNumber = "5";

console.log(stringNumber + 2); // Output: 52
console.log(stringNumber - 2); // Output: 3

var fixedAddition = Number(stringNumber) + 2;

console.log("Fixed addition:", fixedAddition); // Output: 7