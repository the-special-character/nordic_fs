

// create class of Employee

// employeeName
// employeeId
// salary

// employee name should print first letter capital

// create one method of displaySalary that method should be private

// Public (access modifiers)
// Private (access modifiers)


class Employee {
    constructor(employeeName, employeeId, salary) {
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.#displaySalary(salary);
    }

    set employeeName(value) {
        this._employeeName = Employee.nameCase(value);
    }

    static nameCase(value) {
        return `${value[0].toUpperCase()}${value.slice(1)}`
    }

    get employeeName() {
        return this._employeeName;
    }

    #displaySalary(salary) {
        console.log(salary);
        return salary;
    }

    displayName() {
        return this.employeeName; 
    }
}

class CEO extends Employee {
    constructor() {
        super("Dhoni", 1, 1000000)
    }

    hireEmpoyee() {
        return "hired..."
    }

    // method overriding
    displayName() {
        const data = super.displayName();
        console.log(data);
        return `Mr. ${this.employeeName}`;
    }
}

class Admin extends Employee {
    dipositSalary() {
        return "salary diposited"
    }
}

const ceo = new CEO();

console.log(ceo.displayName());

// console.log(ceo.nameCase("hello"))

const admin = new Admin("rahul", 2, 19999);

console.log(ceo.hireEmpoyee());

console.log(admin.dipositSalary());

console.log(admin.displayName());

ceo

const e1 = new Employee("yagnesh", 1002, 10000);

console.log(e1);

console.log(e1.employeeName);