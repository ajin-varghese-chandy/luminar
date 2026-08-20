

function add() {
    let carObj = {
        carBrand: carbrand.value,
        carPrice: carprice.value,
        carKey: carkey.value
    }

    if (carObj.carKey in localStorage) {
        alert("car already exits");
    } else {
        localStorage.setItem(carObj.carKey, JSON.stringify(carObj))
        alert('car deatiles added!!');
        carbrand.value = "";
        carprice.value = "";
        carkey = "";

        
    }
}

function retrive() {
    let carKey = getcarkey.value;
    console.log(carKey);
    
    const car = JSON.parse(localStorage.getItem(carKey))
    console.log(car);
    
    document.getElementById('retrievedDetails').innerHTML = `
    
     
        <h2 class="mb-3 text-lg font-bold text-gray-800">
            Car Details
        </h2>

        <p class="text-gray-700">
            <span class="font-semibold">Brand:</span>
            <span id="displayBrand">${car.carBrand}</span>
        </p>

        <p class="text-gray-700">
            <span class="font-semibold">Price:</span>
            ₹<span id="displayPrice">${car.carPrice}</span>
        </p>

        <p class="text-gray-700">
            <span class="font-semibold">Key:</span>
            <span id="displayKey">${car.carKey}</span>
        </p>
    
    
    `

}

function removeItem(){
    let key =  removecarkey.value;
    if(key in localStorage) {
        localStorage.removeItem(key)
    alert("car removed!!")
    }else {
        alert("no car found")
    }
}

function clearAll() {
    localStorage.clear();
    alert("all deatiles removed!!")
}

console.log("dadsd");
