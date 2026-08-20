class Student {
    constructor(rollno, name, grade, total) {
        this.rollno = rollno;
        this.StudentName = name;
        this.grade = grade;
        this.total = total;

    }
    print() {
        console.log(this);
    }    
}

class Bank {
    createAcc(acno, name, balance, phno) {
        this.acno = acno;
        this.name = name;
        this.balance = balance;
        this.phno = phno;
        console.log("Account Created Successfully!");
    }

    deposit(amount) {
        if (amount != 0) {
            this.balance += amount;
            console.log(amount + " credited!");
        }

    }

    withdrew(amount) {
        if (amount > this.balance) {
            console.log("insufficent balance");

        } else {
            this.balance = this.balance - amount;
            console.log(amount + " Debited!");

        }
    }

    checkBalance() {
        console.log(this.balance);

    }
}

b1 = new Bank();
b1.createAcc(12, 'arun', 4500, 98542344);
b1.checkBalance();
b1.deposit(1000);
b1.checkBalance();
b1.withdrew(400);
b1.checkBalance();

