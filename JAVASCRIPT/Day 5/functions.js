// addition
console.log("++++++++++++++++++--addition--+++++++++++++++++++++++++++");

function add(a, b) {
    console.log(a + b);

}

add(21, 434);

function addition(a, b) {
    c = a + b;
    return c;
}

console.log(addition(6, 7));

console.log("++++++++++++++++++--substract--+++++++++++++++++++++++++++");

function sub(a, b) {
    return a > b ? a - b : b - a;
}

console.log(sub(50, 40));


console.log("+++++++++++++++++++--cube--++++++++++++++++++++++++++");
function cube(a) {
    return a * a * a;
}

console.log(cube(3));

console.log("++++++++++++++++++--odd or even--+++++++++++++++++++++++++++");


function oddOrEven(num) {
    if (num % 2 == 0) {
        return "even"
    } else {
        return "odd"
    }
}

console.log(oddOrEven(5));


// arrow functions

const add1 = (a, b) => a + b;

console.log(add1(7, 8));


// callback fn

const callback = (n) => {
    return n ** 2;
}

function cube1(callback, n) {
    return callback(n) * n;

}

console.log(cube1(callback, 3));
