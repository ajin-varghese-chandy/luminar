function getUsers() {
    var saved = localStorage.getItem("budgetUsers");
    if (saved === null) {
        return [];
    }
    return JSON.parse(saved);
}

function saveUsers(users) {
    localStorage.setItem("budgetUsers", JSON.stringify(users));
}

function getCurrentUser() {
    var saved = localStorage.getItem("budgetCurrentUser");
    if (saved === null) {
        return null;
    }
    return JSON.parse(saved);
}

function setCurrentUser(user) {
    if (user === null) {
        localStorage.removeItem("budgetCurrentUser");
    } else {
        localStorage.setItem("budgetCurrentUser", JSON.stringify(user));
    }
}

function getDataKey(email) {
    return "budgetData_" + email;
}