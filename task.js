// abstraction

class Employee {
    static test = "hello";

    constructor(employeeName, employeeID, salary) {
        this.#chnageName(employeeName)
        this.employeeID = employeeID;
        this.salary = salary;
        //this.age = age
    }

    // getter and setter
    set firstName(value) {
        this._employeeName = User.nameCase(value);    
    }

    get employeeName() {
        return this._employeeName;
    }

    set lastName(value) {
        this._employeeID = User.nameCase(value);
    }

    get employeeID() {
        return this._employeeID;
    }

    static nameCase(value) {
        console.log(this.test);
        return `${value[0].toUpperCase()}${value.slice(1)}`;
    }

    // fullName() {
    //     return `${this.employeeName} ${this.employeeID}`
    // }

    // private method
    #chnageName(employeeName, employeeID) {
        this.employeeName = employeeName;
        this.employeeID = employeeID;
    }
}

const data = "hello";

console.log(User.nameCase(data));

console.log(User.test);


// instance
const yagneshInfo = new User("yagnesh", "modh", 33, "male");
const ViratInfo = new User("virat", "kohli", 30, "male");

// console.log(yagneshInfo.nameCase(data));

console.log(yagneshInfo.employeeName);
console.log(yagneshInfo.employeeID);
console.log(yagneshInfo.salary);
// console.log(yagneshInfo.fullName());
// console.log(ViratInfo);
// console.log(ViratInfo.fullName());




