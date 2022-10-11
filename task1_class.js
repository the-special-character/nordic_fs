

class Employee {
    
    constructor(empName, empID, empSalary) {
        this.empName = empName;
        this.empID =empID;
        this.#displaySalary(empSalary)
        
    }

    // getter and setter
    set empName(value) {
        this._empName = `${value[0].toUpperCase()}${value.slice(1)}`   
    }

    get empName() {
        return this._empName;
    }
   

    #displaySalary(empSalary) {
        return `Employee salary is: ${this.empSalary}`
    }

}


// instance
const EmployeeInfo = new Employee("seraj", 101, 20000);
console.log(EmployeeInfo);

