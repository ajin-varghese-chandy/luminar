var emp = {
    id: 1,
    name: "john",
    designation: "Developer",
    salary: 35000,
    exp: 4
}

console.log(emp);
console.log(emp["name"]);
console.log(emp.salary);

// to check wheather a particular key is present in the emp

console.log("exp" in emp);
console.log("gender" in emp);

// add or insert a new key/value pairs to object
// objec-name["key"] = value

emp["gender"] = "male";
console.log(emp.gender);


// add isVaccinated or not

emp.isVaccinated = true;
console.log(emp.isVaccinated);

// add vaccine

emp.vaccine = 'covisheild';
console.log(emp);

// update

emp.vaccine = 'covaccine'
console.log(emp);


// increment salary by 5k

emp.salary += 5000;
console.log(emp);

// print key/value pairs one by one

for (let key in emp) {
    console.log(`${key}: ${emp[key]}`);
}
// to delete and key from an array
delete emp.exp;
console.log(emp);

var car = {
    name: "honda city",
    model: "sedan",
    manufacturer: "honda",
    price: "14000000"
}

// display manfacture info

console.log(car.manufacturer);

// check whether the model is present or not

console.log("sedan" in car);

// add property varient
car.varient = ['manual', 'automatic']
console.log(car);

// add property color
car.color = ['red', 'black', 'green', 'yellow']
console.log(car);


// print   word count from the given text

text = "one two one two one"

const words = text.trim().split(/\s+/);
const wordCount = {};

words.forEach((word) => {
    if (word in wordCount) {
        wordCount[word]++;
    } else {
        wordCount[word] = 1;
    }
});

console.log(wordCount);
console.log("+++++++++++++++++++++++++++++++++++++++++++++");

// print count of each item in the given array
a = [10,10,20,20,30,40,40,50,50,50,60]
const count = {};

a.map(num => {
    count[num] = (count[num] || 0) + 1;
});

console.log(count);


//


products = [
  //array of objects
  { pid: 100, pname: 'apple', band: '5G', price: 120000, display: 'led' },
  { pid: 101, pname: 'samsung', band: '5G', price: 45000, display: 'led' },
  { pid: 102, pname: 'blackberry', band: '4G', price: 50000, display: 'led' },
  { pid: 103, pname: 'nokia', band: '3G', price: 1200, display: 'lcd' },
  { pid: 104, pname: 'motorola', band: '4G', price: 10000, display: 'lcd' },
]

//1. print product name only
products.forEach(data => console.log(data.pname));


//2. print all mobile details whose display is lcd
products.forEach(data =>  data.display == 'lcd' ? console.log(data) : console.log());

//3. print 5G mobile phone name
products.forEach(data =>  data.band == '5G' ? console.log(data.pname) : console.log());

//4. sort mobile based on price
let sorted = [...products].sort((f1, f2) => f1.price - f2.price);
console.log(sorted);

//5. print costly mobile
let costly = products.reduce((max, mobile) =>
  mobile.price > max.price ? mobile : max
);
console.log(costly);

//6. print low cost mobile
let lowCost = products.reduce((min, mobile) =>
  mobile.price < min.price ? mobile : min
);
console.log(lowCost);






