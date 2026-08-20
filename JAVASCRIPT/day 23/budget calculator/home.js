var currentUser = getCurrentUser();

if (currentUser === null) {
    document.getElementById("guestButtons").classList.remove("hidden");
} else {
    document.getElementById("userButtons").classList.remove("hidden");
    document.getElementById("userGreeting").textContent = "Hi, " + currentUser.name;
}

var logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn !== null) {
    logoutBtn.addEventListener("click", function () {
        setCurrentUser(null);
        window.location.href = "home.html";
    });
}