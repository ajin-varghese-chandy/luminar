//create account - Register a new account
function register() {

    // 1. fetch the values from the html
    acno = reg_acno.value
    uname = reg_name.value
    pswd = reg_pswd.value


    console.log(acno, uname, pswd);

    //2. create acnoDetails object
    accountDetails = {
        acno,
        uname,
        pswd,
        balance: 0
    }

    //3. Check if acno is already present in the 
    if (acno in localStorage) {
        alert("User already registered")
    }
    //To set details in localstorage
    else {
        localStorage.setItem(acno, JSON.stringify(accountDetails))
        alert("Registration successful")
        //redirect to login page
        window.location = "./login.html";
    }

}


//login

function login() {
    //1. fetch the details
    acno = login_acno.value
    pswd = login_pswd.value
    console.log(acno, pswd);

    //2. check if the account number is present in localStorage

    if (acno in localStorage) {
        accountDetails = JSON.parse(localStorage.getItem(acno));
        if (pswd == accountDetails.pswd) {
            alert("Login successful")
            localStorage.setItem("currentUser", acno)
            window.location = "./home.html";
        } else {
            alert("Incorrect password")
        }
    }
    else {
        alert("Invalid account number")
    }

}

//Deposit
let amnt = 0;
let withdraw = 0;
let totalBalance = 0;

function depositeMoney() {
    amnt = deposite_amnt.value;
    acno = deposite_acno.value;
    amnt = Math.floor(amnt);

    if (acno in localStorage) {
        accountDetails = JSON.parse(localStorage.getItem(acno));
        if (acno == accountDetails.acno && amnt <= 0) {
            alert("value cannot be empty or negative")
        }
        else {
            accountDetails.balance += amnt;
            // alert(accountDetails.balance)
            localStorage.setItem(acno, JSON.stringify(accountDetails));

            alert("Your amount is  successfully added")
            document.getElementById("balance_amount").innerHTML = `<div style="color:red;font-weight:500">Your Current Balance ${accountDetails.balance} </div>`;

        }
    }
    else {
        alert("Incorrect account no");
    }
}

function Withdraw() {
    withdraw = withdraw_amnt.value;
    acno = withdraw_acno.value;
    withdraw = Math.floor(withdraw);

    if (acno in localStorage) {
        accountDetails = JSON.parse(localStorage.getItem(acno));
        if (acno == accountDetails.acno && withdraw <= 0) {
            alert("Please enter the amount")
        } else if (withdraw > accountDetails.balance) {
            alert("Insufficient funds...!")
        } else {
            alert("Bank Balance before withdrawal: " + accountDetails.balance)

            alert("withdrawal amount: " + withdraw)

            accountDetails.balance -= withdraw;
            alert("Your amount is  successfully withdrawn")
            localStorage.setItem(acno, JSON.stringify(accountDetails));


            alert("After withdrawal balance : " + accountDetails.balance)
            document.getElementById("Withdraw_amnt").innerHTML = `<div class="text-dark" style="font-weight:800">Your Current Balance ${accountDetails.balance} </div>`;

        }
    } else {
        alert("Incorrect account no");
    }

}
function logout() {
    localStorage.removeItem("currentUser")
    window.location = "./index.html";
}

//Show the current user's balance on the home page
function currentUserBalance() {
    if ("currentUser" in localStorage) {
        acno = localStorage.getItem("currentUser")
        if (acno in localStorage) {
            accountDetails = JSON.parse(localStorage.getItem(acno))
            balanceEl = document.getElementById("current_balance")
            if (balanceEl) {
                balanceEl.innerHTML = `
                    <h3 class="text-lg font-bold text-slate-500">Current Balance</h3>
                    <p class="mt-2 text-3xl font-bold text-blue-700">₹${accountDetails.balance}</p>
                `
            }
        }
    }
}

currentUserBalance()