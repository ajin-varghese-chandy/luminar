var arr = [10, 23, 45, 5, 50, 19];

var el = 110;

flag = 0;

for (let i of arr) {
    if (i == el) {
        flag = 1;
        break;
    }
}
console.log(flag == 1 ? "Number is found" : "Number IS not found");
