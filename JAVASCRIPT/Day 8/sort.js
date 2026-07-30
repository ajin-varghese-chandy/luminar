var arr = [10, 12, 43, 444, 1, 3]

console.log(arr.sort());
console.log(arr.sort((n1, n2) => n1 - n2));
console.log(arr.sort((n1, n2) => n2 - n1));


a = [10, 11, 12, 13, 14]

console.log(a.map(num => num ** 2));
console.log(a.map(num => num * 10));


console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


// sqaaure root
const nums = [4, 9, 22, 25, 3, 77, 44, 23, 90];
console.log(nums.map(num => Math.sqrt(num)));

//  print even no only
console.log(nums.filter(num => num % 2 == 0));

// print no greater than 18
console.log(nums.filter(num => num > 18));

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


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

console.log(employee.find(emp => emp[1] == 'Laisha'));



console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// forEach() method

//[id,name,price,stock]
products = [
    [1, 'Hide and seek', 50, 20],
    [2, 'lays', 20, 80],
    [3, 'oreo', 40, 100],
    [4, 'parleG', 25, 10],
    [5, 'tiger', 20, 0],
    [6, 'unibic', 60, 20],
    [7, 'good day', 70, 20]
]

products.forEach(p => console.log(p[1]))


products.forEach(p => console.log(p[2]))

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

app = [1, 3, 4, 5, 564, 65, 1, 3, 5];

console.log(app.reduce((n1, n2) => n1 + n2)); //summ

console.log(app.reduce((n1, n2) => n1 > n2 ? n1 : n2)); //highest


console.log(app.reduce((n1, n2) => n1 < n2 ? n1 : n2)); // lowest


const arra = [
    [1, 'chinu', 100],
    [2, 'minnu', 200],
    [3, 'ponnu', 100],
    [4, 'Manu', 100],
    [5, 'anu', 300]
];

console.log(arra.reduce((n1, n2) => n1[2] < n2[2] ? n1 : n2));

console.log(arra.reduceRight((n1, n2) => n1[2] < n2[2] ? n1 : n2));



var vehicle = ['Bus','car','bike','cycle']

console.log(vehicle.sort());
console.log(vehicle.reverse());

var points = [40,100,1,5,10]

console.log(points.sort((n1,n2)=> n1 - n2));

console.log(points.sort((n1,n2)=> n2 - n1));

points.sort((n1,n2)=> n1 - n2);

let l = points[0];
let h = points[points.length - 1]
console.log("lowest " + l);
console.log("highest "+ h);

