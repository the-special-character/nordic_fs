// abstraction

class User {
    static test = "hello";

    constructor(firstName, lastName, age, gender) {
        this.#chnageName(firstName, lastName)
        this.gender = gender;
        this.age = age
    }

    // getter and setter
    set firstName(value) {
        this._firstName = User.nameCase(value);    
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        this._lastName = User.nameCase(value);
    }

    get lastName() {
        return this._lastName;
    }

    static nameCase(value) {
        console.log(this.test);
        return `${value[0].toUpperCase()}${value.slice(1)}`;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    // private method
    #chnageName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const data = "hello";

console.log(User.nameCase(data));

console.log(User.test);


// instance
const yagneshInfo = new User("yagnesh", "modh", 33, "male");
const ViratInfo = new User("virat", "kohli", 30, "male");

// console.log(yagneshInfo.nameCase(data));

console.log(yagneshInfo.firstName);
console.log(yagneshInfo.lastName);
console.log(yagneshInfo.fullName());
console.log(ViratInfo);
console.log(ViratInfo.fullName());




