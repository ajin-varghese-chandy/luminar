// 1. sayHi()
function sayHi() {
  console.log("Hi there!");
}
sayHi();


// 2. gradeScore(score)
function gradeScore(score) {
  if (score >= 90) {
    return "Excellent";
  } else if (score >= 75) {
    return "Good";
  } else {
    return "Needs Improvement";
  }
}

console.log(gradeScore(95));
console.log(gradeScore(80));
console.log(gradeScore(60));


// 3. introduce(name = "Anonymous")
function introduce(name = "Anonymous") {
  console.log(`My name is ${name}`);
}

introduce("Ajin");
introduce();


// 4. displayHobbies(...hobbies)
function displayHobbies(...hobbies) {
  console.log("Hobbies:");
  hobbies.forEach(hobby => console.log(hobby));
}

displayHobbies("Reading", "Gaming", "Coding");


// 5. showStudentDetails({ name, roll })
function showStudentDetails({ name, roll }) {
  console.log("Name:", name);
  console.log("Roll:", roll);
}

showStudentDetails({
  name: "Ajin",
  roll: 101
});


// 6. calculateTotal([price1, price2, price3])
function calculateTotal([price1, price2, price3]) {
  return price1 + price2 + price3;
}

console.log(calculateTotal([100, 200, 300]));


// 7. createAccount({ username, password = "1234" })
function createAccount({ username, password = "1234" }) {
  console.log("Username:", username);
  console.log("Password:", password);
}

createAccount({ username: "ajin" });
createAccount({ username: "john", password: "abcd" });


// ------------------------------------------------------------
// 8. Function Hoisting
sayHello();

function sayHello() {
  console.log("Hello!");
}


// 9. Closure - Secret Message
function secretMessage() {
  const secret = "JavaScript is awesome!";

  return function () {
    console.log(secret);
  };
}

const reveal = secretMessage();
reveal();


// 10. Counter using Closure
function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();

increment();
increment();
increment();


// 11. Nested Function (Lexical Scope)
function setup() {
  let message = "Welcome";

  function display() {
    console.log(message);
  }

  display();
}

setup();


// 12. Pure Function (Sum)
function add(a, b) {
  return a + b;
}

console.log(add(10, 20));


// 13. Pure Function (Tax)
function addTax(price, taxRate) {
  return price + price * taxRate;
}

console.log(addTax(1000, 0.18));


// 14. Curried Addition
function addNumbers(a) {
  return function (b) {
    return a + b;
  };
}

console.log(addNumbers(10)(20));


// 15. Curried Welcome Message
function welcome(role) {
  return function (name) {
    console.log(`Welcome ${role}: ${name}`);
  };
}

welcome("Admin")("Ajin");
welcome("Student")("Rahul");


// 16. Function Returning Another Function
function outer() {
  let text = "Hello from outer function";

  return function () {
    console.log(text);
  };
}

const inner = outer();
inner();


// 17. Discount using Currying
function discount(discountPercent) {
  return function (price) {
    const finalPrice = price - (price * discountPercent / 100);
    console.log("Final Price:", finalPrice);
  };
}

const discount10 = discount(10);

discount10(1000);
discount10(500);