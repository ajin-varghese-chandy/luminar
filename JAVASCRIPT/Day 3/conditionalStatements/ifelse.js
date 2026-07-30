
// if else statement
var n = 10;

if (n % 2 == 0) {
    console.log("the number is even");

} else {
    console.log("the number is odd");
}

// if else if

var t = 11;

if (n > 0) {
    console.log("the number is positive");

} else if (n == 0) {
    console.log("the number is 0");

} else {
    console.log("the number is negative");

}

var n1 = 10;
var n2 = 3;

if(n1 == n2) {
    console.log("the numbers are equal");
    
} else if((n1<0)&& (n2<0)) {
    console.log("the numbers are less than 0");
        
} else {
    console.log("the numbres are greater than 0");
    
}

// nested if 

var m1 = 0;
var m2 = 5;

if(m1 == m2) {
    if((m1<0) && (m2<0)){
        console.log("numbres are less than 0");
        
    }else {
        console.log("numbers are greater than 0");
        
    }
   console.log("numbers are eqaul");
    
}else {
    if((m1 <0) && (m2 <0 )) {
        console.log("numbers are less than 0");
        
    }else {
        console.log("numbers are greater than 0");
        
    }
}