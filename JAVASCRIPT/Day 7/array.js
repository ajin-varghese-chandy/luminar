//To hold an expenses , and 

//Find total expense
//Find maximum expense
//Find minimum expense


var expenses = [12000, 20000, 34000, 10000, 28000, 15000, 50000];
var total = 0;

// total exp..
for (let i of expenses) {
    total += i;
}
console.log("total expense is " + total);

// max exp..
var fel = expenses[0];

for (var i = 1; i < expenses.length; i++) {
    if (expenses[i] > fel) {
        fel = expenses[i];
    }
}
console.log("max exp " + fel);

//min exp..
for (var i = 1; i < expenses.length; i++) {
    if (expenses[i] < fel) {
        fel = expenses[i];
    }
}
console.log("min exp " + fel);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


var arr = [4, 5, 6]
var total = 15;

for (let i = 0; i < arr.length; i++) {
    total > arr[0] ? arr[i] = total - arr[i] : arr[i] = arr[i] - total;
}
console.log(arr);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


//[id,name,designation,location,salary,experience]
employee = [
    [1000, 'Neel', 'Developer', 'Kochi', 25000, 3], //emp
    [1001, 'Max', 'Tester', 'TVM', 20000, 2],
    [1002, 'Vinod', 'QA', 'KNR', 35000, 4],
    [1003, 'Vyom', 'QA', 'Kochi', 45000, 5],
    [1004, 'Laisha', 'Tester', 'TVM', 55000, 7],
    [1005, 'Aahan', 'Developer', 'TVM', 15000, 1],
    [1006, 'Aahil', 'QA', 'Kochi', 25000, 3],
    [1007, 'Shayan', 'Developer', 'KNR', 30000, 3],
    [1000, 'Nihaan', 'Developer', 'Kochi', 25000, 3],

]

//1 Print all employee name 
for (let emp of employee) {
    console.log(emp[1]);

}
//2 Print total number of employee
console.log("total no of emp : " + employee.length);

//3 Print developer employee details
for (let emp of employee) {
    if (emp[2] == "Developer") {

        console.log("Developer : " + emp[1]);
    }

}
//4 Print all employee details whose salary > 30000
console.log("salary greater than 30000 : ");
for (let emp of employee) {
    if (emp[4] > 30000) {

        console.log("--" + emp[1]);
    }

}

//5 Print details of employee Laisha

for (let emp of employee) {
    if (emp[1] == "Laisha") {
        console.log(emp);
    }
}



//6 Sort employee based on descending order of salary
employee.sort((em1,em2)=>em2[4]-em1[4])
console.log(employee);

//7 sort employee based on ascending order of experienc
employee.sort((em1,em2)=>em2[5]-em1[5])
console.log(employee);

//Nested Array
//print all elements, whose values are less than 10 in given array
a=[
    [1,2],
    [10,22],
    [14,21],
    [3,6],
    [5,9],
    [19,28],
]

for(let i of a) {
    for(let j of i){
        if(j<10){
            console.log(j);
        }
    }
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

var arr = [2,3,4,5];

for(let i of arr){
    for(let j of arr){
        if(i+j == 9){
            console.log(`pairs are(${i},${j})`);
            
        }
    }
}
