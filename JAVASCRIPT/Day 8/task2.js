// TASK-1

// 1. Print all the duplicate elements in an array
var duplicateArray = [10, 6, 7, 8, 10, 5, 7, 3, 5];
var duplicateElements = [];

for (var i = 0; i < duplicateArray.length; i++) {
    for (var j = i + 1; j < duplicateArray.length; j++) {
        if (
            duplicateArray[i] === duplicateArray[j] &&
            !duplicateElements.includes(duplicateArray[i])
        ) {
            duplicateElements.push(duplicateArray[i]);
        }
    }
}

console.log("Duplicate elements:", duplicateElements);

// 2. Find common elements in both arrays using linear search
var arr1 = [5, 7, 8, 3];
var arr2 = [7, 8, 2, 1];

function linearSearch(array, target) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return true;
        }
    }

    return false;
}

var commonUsingLinearSearch = [];

for (var i = 0; i < arr1.length; i++) {
    if (
        linearSearch(arr2, arr1[i]) &&
        !commonUsingLinearSearch.includes(arr1[i])
    ) {
        commonUsingLinearSearch.push(arr1[i]);
    }
}

console.log("Common elements using linear search:", commonUsingLinearSearch);

// Find common elements using binary search
function binarySearch(array, target) {
    var left = 0;
    var right = array.length - 1;

    while (left <= right) {
        var middle = Math.floor((left + right) / 2);

        if (array[middle] === target) {
            return true;
        } else if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return false;
}

var sortedArr2 = [...arr2].sort(function (a, b) {
    return a - b;
});
var commonUsingBinarySearch = [];

for (var i = 0; i < arr1.length; i++) {
    if (
        binarySearch(sortedArr2, arr1[i]) &&
        !commonUsingBinarySearch.includes(arr1[i])
    ) {
        commonUsingBinarySearch.push(arr1[i]);
    }
}

console.log("Common elements using binary search:", commonUsingBinarySearch);

// TASK-2

// [id, name, designation, location, salary, experience]
var employee = [
    [1000, "Neel", "Developer", "Kochi", 25000, 3],
    [1001, "Max", "Tester", "TVM", 20000, 2],
    [1002, "Vinod", "QA", "KNR", 35000, 4],
    [1003, "Vyom", "QA", "Kochi", 45000, 5],
    [1004, "Laisha", "Tester", "TVM", 55000, 7],
    [1005, "Aahan", "Developer", "TVM", 15000, 1],
    [1006, "Aahil", "QA", "Kochi", 25000, 3],
    [1007, "Shayan", "Developer", "KNR", 30000, 3],
    [1000, "Nihaan", "Developer", "Kochi", 25000, 3],
];

// 1. Print all employee names
var employeeNames = employee.map(function (item) {
    return item[1];
});
console.log("1. Employee names:", employeeNames);

// 2. Print total number of employees
console.log("2. Total number of employees:", employee.length);

// 3. Print developer employee details
var developers = employee.filter(function (item) {
    return item[2] === "Developer";
});
console.log("3. Developer employee details:", developers);

// 4. Print employee details whose salary is greater than 30000
var highSalaryEmployees = employee.filter(function (item) {
    return item[4] > 30000;
});
console.log("4. Employees with salary above 30000:", highSalaryEmployees);

// 5. Print the details of employee Laisha
var laishaDetails = employee.find(function (item) {
    return item[1] === "Laisha";
});
console.log("5. Laisha's details:", laishaDetails);

// 6. Sort employees by salary in descending order
var employeesBySalary = [...employee].sort(function (first, second) {
    return second[4] - first[4];
});
console.log("6. Employees by descending salary:", employeesBySalary);

// 7. Sort employees by experience in ascending order
var employeesByExperience = [...employee].sort(function (first, second) {
    return first[5] - second[5];
});
console.log("7. Employees by ascending experience:", employeesByExperience);