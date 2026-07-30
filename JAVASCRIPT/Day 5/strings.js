let s1 = `the name "is" Ajay's `;
console.log(s1);


let text1 = "THis is my \"new\" car";
let text2 = "the charater \\ is called backslash";
let text3 = "the charater \` is called backtick";

console.log(text1);
console.log(text2);
console.log(text3);

let str = "I love\n coding"
console.log(str);

let str1 = "this is my \t new laptop"
console.log(str1);

let str2 = "this is my \v new laptop"
console.log(str2);

// type casting

const n1 = 40;
console.log(typeof(n1));

const ntos = n1.toString();
console.log(typeof(ntos));
console.log(ntos+10);

const str3 = "10";
const n2 = 10;
console.log(n2+Number(str3));

console.log("+++++++++++++string methods+++++++++++++++");

// string methods

let sname = "Malu"
console.log(sname.length);
console.log(sname.toUpperCase());
console.log(sname.toLowerCase());

// find string length


var cmpname = 'Luminar';
console.log(cmpname.length);

console.log(cmpname[2]); //string index

console.log(cmpname[cmpname.length - 1]); // print last char..ter

console.log(cmpname.charAt(5)); // print char at position 5


// replace chars inside string
let name1 = "Ann M";
let nname = name1.replace("M","Luka")

console.log(nname);

// join strings together
let s_name = "Sagar";
let m_name = "Alias";
let l_name = "Jacky";

let full_name =  s_name.concat(m_name + l_name)
console.log(full_name);


