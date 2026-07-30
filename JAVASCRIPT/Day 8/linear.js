// linear search

function linearSearch(array , tofind){
    for(let i=0;i < array.length;i++){
        if(array[i] === tofind){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([4,5,52,5,34,3],40));


var  rainbow = ['red','orange','yellow','green','blue','indigo','violet']

function rainbowSearch(rainbow , find){
    for(let i in rainbow){
        if(rainbow[i]== find) {
            return i;
        }
    } return null;
}

console.log(rainbowSearch(rainbow,'green'));

console.log(rainbowSearch(rainbow,'white'));
