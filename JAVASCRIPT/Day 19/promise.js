const count = true;


let countValue = new Promise(function (resolve, reject){
    if(count){
        resolve("there is a count value")
    }else {
        reject("there is no count value")
    }
})

console.log(countValue);


/// then and catch

var pro =  new Promise((resolve,reject)=>{
    let lotnum  = 1;

    let prizeNum = Math.floor(Math.random()*5);
    if(lotnum == prizeNum){
        resolve('you won lottery !!!!!!!!!!!!!!!') // success
    }else {
        reject("better luck next time") // failure
    }


})


pro.then(msg=>console.log(msg)) // from resolve
.catch(err=>console.log(err)); // from reject

