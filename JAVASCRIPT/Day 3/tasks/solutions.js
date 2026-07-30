// Q 1: Variables and typeof

let firstName = "amal";
let lastName = "vs";
let country = "india";
let city = "kochi";
let age = 25;
let isMarried = false;
let year = 2026;

console.log("Q 1: Variables and typeof");
console.log("firstName:", firstName, "=> typeof:", typeof firstName);
console.log("lastName:", lastName, "=> typeof:", typeof lastName);
console.log("country:", country, "=> typeof:", typeof country);
console.log("city:", city, "=> typeof:", typeof city);
console.log("age:", age, "=> typeof:", typeof age);
console.log("isMarried:", isMarried, "=> typeof:", typeof isMarried);
console.log("year:", year, "=> typeof:", typeof year);


// Q 2: Miles to Kilometers and Kilometers to Miles

console.log("\nQ 2: Miles <-> Kilometers");

const MILES_TO_KM = 1.60934;
const KM_TO_MILES = 0.621371;

function milesToKilometers(miles) {
  return miles * MILES_TO_KM;
}

function kilometersToMiles(km) {
  return km * KM_TO_MILES;
}

console.log(`10 miles = ${milesToKilometers(10).toFixed(2)} kilometers`);
console.log(`16 kilometers = ${kilometersToMiles(16).toFixed(2)} miles`);


// Q 3: Hours to Minutes and Seconds

console.log("\nQ 3: Hours -> Minutes & Seconds");

function convertHours(hours) {
  const minutes = hours * 60;
  const seconds = hours * 3600;
  console.log(`${hours} hour(s) = ${minutes} minutes = ${seconds} seconds`);
}

convertHours(1);
convertHours(2.5);


// Q 4: Check if typeof '10' is equal to 10

console.log("\nQ 4: typeof '10' vs typeof 10");

const strValue = '10';
const numValue = 10;

console.log("typeof '10':", typeof strValue);    // string
console.log("typeof 10:", typeof numValue);        // number
console.log(`Are types equal? ${typeof strValue === typeof numValue}`); // false
console.log(`'10' == 10  (loose):  ${strValue == numValue}`);   // true
console.log(`'10' === 10 (strict): ${strValue === numValue}`);  // false


// Q 5: Voting Eligibility using Ternary Operator

console.log("\nQ 5: Voting Eligibility");

function checkVotingEligibility(age) {
  const result = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
  console.log(`Age ${age}: ${result}`);
}

checkVotingEligibility(20);
checkVotingEligibility(15);
checkVotingEligibility(18);


// Q 6: Check if parseInt('9.8') is equal to 10

console.log("\nQ 6: parseInt('9.8') === 10");

const parsed = parseInt('9.8');
console.log("parseInt('9.8'):", parsed);                        // 9
console.log(`parseInt('9.8') === 10: ${parsed === 10}`);        // false
console.log(`parseInt('9.8') === 9:  ${parsed === 9}`);         // true


// Q 7: Currency Conversion USD <-> INR

console.log("\nQ 7: USD <-> INR");

const USD_TO_INR = 83.5;
const INR_TO_USD = 1 / USD_TO_INR;

function usdToInr(usd) {
  return (usd * USD_TO_INR).toFixed(2);
}

function inrToUsd(inr) {
  return (inr * INR_TO_USD).toFixed(2);
}

console.log(`$100 USD = ₹${usdToInr(100)} INR`);
console.log(`₹1000 INR = $${inrToUsd(1000)} USD`);


// Q 8: Area and Circumference of a Circle

console.log("\nQ 8: Circle Area & Circumference");

function circleArea(radius) {
  return (Math.PI * radius * radius).toFixed(2);
}

function circleCircumference(radius) {
  return (2 * Math.PI * radius).toFixed(2);
}

const radius = 7;
console.log(`Radius: ${radius}`);
console.log(`Area: ${circleArea(radius)}`);
console.log(`Circumference: ${circleCircumference(radius)}`);


// Q 9: Temperature Conversion Celsius <-> Fahrenheit

console.log("\nQ 9: Celsius <-> Fahrenheit");

function celsiusToFahrenheit(c) {
  return ((c * 9) / 5 + 32).toFixed(2);
}

function fahrenheitToCelsius(f) {
  return (((f - 32) * 5) / 9).toFixed(2);
}

console.log(`0°C = ${celsiusToFahrenheit(0)}°F`);
console.log(`100°C = ${celsiusToFahrenheit(100)}°F`);
console.log(`32°F = ${fahrenheitToCelsius(32)}°C`);
console.log(`212°F = ${fahrenheitToCelsius(212)}°C`);


// Q 10: Truthy and Falsy Values

console.log("\nQ 10: Truthy & Falsy Values");

// Truthy values
console.log("-- Truthy --");
console.log(Boolean(1));          // true  - non-zero number
console.log(Boolean("hello"));    // true  - non-empty string
console.log(Boolean([]));         // true  - empty array is truthy

// Falsy values
console.log("-- Falsy --");
console.log(Boolean(0));          // false - zero
console.log(Boolean(""));         // false - empty string
console.log(Boolean(null));       // false - null
