var authMessage = document.getElementById("authMessage");

function showAuthMessage(text) {
    authMessage.textContent = text;
    authMessage.classList.remove("hidden");
}

if (getCurrentUser() !== null) {
    window.location.href = "index.html";
}

document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("signupName").value.trim();
    var email = document.getElementById("signupEmail").value.trim().toLowerCase();
    var pass = document.getElementById("signupPass").value;

    if (name === "" || email === "" || pass === "") {
        showAuthMessage("Please fill all fields.");
        return;
    }

    var users = getUsers();
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            showAuthMessage("Email already registered.");
            return;
        }
    }

    var newUser = {
        name: name,
        email: email,
        password: pass
    };
    users.push(newUser);
    saveUsers(users);
    setCurrentUser(newUser);

    window.location.href = "index.html";
});