let n1 = 200;
let n2 = 40;
let n3 = 950;

if (n1 > n2) {
    if (n1 > n3) {
        console.log(`${n1} is the largest`);
        console.log(`${n3} is the second largest`);
        console.log(`${n2} is the third largest`);
    } else {
        console.log(`${n3} is the largest`);
        console.log(`${n1} is the second largest`);
        console.log(`${n2} is the third largest`);
    }
} else {
    if (n2 > n3) {
        console.log(`${n2} is the largest`);
        console.log(`${n3} is the second largest`);
        console.log(`${n1} is the third largest`);

    } else {
        console.log(`${n3} is the largest`);
        console.log(`${n2} is the second largest`);
        console.log(`${n1} is the third largest`);
    }

}