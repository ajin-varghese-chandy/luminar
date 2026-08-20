class Employee {
    setEmployee(id,name,designation, salary){
        this.empid = id;
        this.empname = name;
        this.empdesignation = designation;
        this.salary = salary;
        console.log("Employee deatiles created!!");
        
    }

    printEmployee(){
        console.log(this.empid, this.empname , this.empdesignation , this.salary);
        
    }

    increamentSalary(amount){
     this.salary += amount;
     console.log("salary incremented by " + amount , "\n New salary is ", this.salary);
     
    }
}

// objects of class Employeee 
emp = new Employee();
emp.setEmployee(11,'manu','dev',90000);
emp.printEmployee();



emp1 = new Employee();
emp1.setEmployee(100,'amal','designer',90000);
emp1.printEmployee();
emp1.increamentSalary(4000)
emp1.printEmployee();