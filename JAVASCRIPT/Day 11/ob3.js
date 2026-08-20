// db = {
//     1000: { "acno": 1000, "username": "Neer", "password": 1000, "balance": 5000, transaction: [] },
//     1001: { "acno": 1001, "username": "Laisha", "password": 1001, "balance": 5000, transaction: [] },
//     1002: { "acno": 1002, "username": "Vyom", "password": 1002, "balance": 3000, transaction: [] },
// }

// //1 create a function for validate account number. To validate account check
// //if account number in db return true otherwise return false

// //2 create a function for authenticate user using account number and password 
// //if both are in db then print 'access granted' otherwise print 'permission denied'
// //authenticated(acno,pswd)?access granted else permission denied

// function validate(acno) {
//     return acno in db;
// }

// console.log(validate(1000));
// console.log(validate(1005));


// function authenticate(acno, pswd) {

//     if (validate(acno) && db[acno].password == pswd) {
//         console.log("Access Granted");
//     }
//     else {
//         console.log("Permission Denied");
//     }

// }

// authenticate(1000, 1000);
// authenticate(1000, 1234);
// authenticate(1005, 1005);


class Bank {

    db = {
        1000: { acno: 1000, username: "Neer", password: 1000, balance: 5000, transaction: [] },
        1001: { acno: 1001, username: "Laisha", password: 1001, balance: 5000, transaction: [] },
        1002: { acno: 1002, username: "Vyom", password: 1002, balance: 3000, transaction: [] }
    }

    validate(acno) {
        return acno in this.db;
    }

    authenticate(acno, pswd) {

        if (this.validate(acno) && this.db[acno].password == pswd) {
            console.log("Access Granted");
        } else {
            console.log("Permission Denied");
        }

    }

    getBalance(acno) {

        if (this.validate(acno)) {
            console.log(this.db[acno].balance);
        } else {
            console.log("Invalid Account");
        }

    }

    fundTransfer(fromAcno, toAcno, amount) {

        if (!this.validate(fromAcno) || !this.validate(toAcno)) {
            console.log("Invalid Account");
            return;
        }

        if (this.db[fromAcno].balance >= amount) {

            this.db[fromAcno].balance -= amount;
            this.db[toAcno].balance += amount;

            console.log("Transfer Successful");

        } else {    
            console.log("Insufficient Balance");
        }

    }

}

let ac1 = new Bank();

ac1.authenticate(1000, 1000);
ac1.getBalance(1000);

ac1.fundTransfer(1000, 1001, 1000);

ac1.getBalance(1000);
ac1.getBalance(1001);