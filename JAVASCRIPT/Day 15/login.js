function login(){
    const urname = document.getElementById('usrname').value;
    console.log(urname);
    window.localStorage.setItem("name",urname);

    window.location = './home.html'
    
    
}