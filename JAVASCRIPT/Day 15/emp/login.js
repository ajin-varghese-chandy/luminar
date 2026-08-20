function login(){
    let username =  document.getElementById('usrname').value;
    localStorage.setItem("username",username);
    location.href = './home.html';
}