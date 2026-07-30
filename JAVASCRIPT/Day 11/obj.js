weatherdata=[
  {district:'Thrissur',weather:28},
    {district:'Palakkad',weather:36},
    {district:'Kozhikod',weather:28},
    {district:'Thrissur',weather:29},
    {district:'Palakkad',weather:31},
    {district:'Kozhikod',weather:34},

] //array of objects.

  
// print district with its highest temp
// {t:29,p:36,k:34} 
// print district with its highest temp


output = {};

for(let data of weatherdata){
    let currentDistrict = data["district"];
    let currentWeather = data["weather"];


    if(currentDistrict in output){
        let oldtemp = output[currentDistrict];

        if(currentWeather > oldtemp){
            output[currentDistrict] = currentWeather;
        }
    }else {
        output[currentDistrict] = currentWeather;
    }
}

console.log(output);

console.log(Object.entries(output));

console.log(Object.entries(output).sort((n1 , n2)=> n2[1]-n1[1]));


pattern = "ABCABBC"

out = {};

for(let char of pattern) {
    if(char in out) {
        console.log(`first recursive character :${char}`);
        break;
        
    }else {
        out[char] = 1;
    }
}