
function getJoke(){
fetch('http://127.0.0.1:5500/joke/joke.json').then((res)=>{
    res.json().then((data)=>{
        let joke = data[Math.floor(Math.random() * 201)]
        
        console.log(joke);
        document.getElementById('punchline').innerHTML = joke.punchline;
        document.getElementById('setup').innerHTML = joke.setup;
    })
    
})
}



getJoke()