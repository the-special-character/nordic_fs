

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
        this._employeeName = this.nameCase(value);
    }

    nameCase(value) {
        return `${value[0].toUpperCase()}${value.slice(1)}`
    }

    get employeeName() {
        return this._employeeName;
    }

    #displaySalary(salary) {
        console.log(salary);
        return salary;
    }
}

class CEO extends Employee {
    hireEmpoyee() {
        return "hired..."
    }
}

class Admin extends Employee {
    dipositSalary() {
        return "salary diposited"
    }
}

const ceo = new CEO("Dhoni", 1, 10000000);

console.log(ceo.nameCase("hello"))

const admin = new Admin("rahul", 2, 19999);

console.log(ceo.hireEmpoyee());

console.log(admin.dipositSalary());

ceo

const e1 = new Employee("yagnesh", 1002, 10000);

console.log(e1);

console.log(e1.employeeName);