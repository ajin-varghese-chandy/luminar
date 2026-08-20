var authMessage = document.getElementById("authMessage");

function showAuthMessage(text) {
    authMessage.textContent = text;
    authMessage.classList.remove("hidden");
}

if (getCurrentUser() !== null) {
    window.location.href = "index.html";
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("loginEmail").value.trim().toLowerCase();
    var pass = document.getElementById("loginPass").value;

    var users = getUsers();
    var found = null;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === pass) {
            found = users[i];
            break;
        }
    }

    if (found === null) {
        showAuthMessage("Wrong email or password.");
        return;
    }

    setCurrentUser(found);
    window.location.href = "index.html";
});