
// OOPS

// four pillars of OOPS

// abstration -> hiding / securing information
// encapsulation -> wrapping info in one object
// polimorphysm -> 
// inheritance -> 

// DRY Concept

// Do not repeat yourself


// const yagneshInfo = {
//     firstName: "Yagnesh",
//     lastName: "Modh",
//     age: 33,
//     gender: "male",
//     speeks: ["gujarati", "English"],
//     fullName() {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const viratInfo = {
//     firstName: "Virat",
//     lastName: "Kohli",
//     age: 30,
//     gender: "male",
//     speeks: ["hindi", "English"],
//     fullName() {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const aliaInfo = {
//     firstName: "Alia",
//     lastName: "Bhatt",
//     age: 24,
//     gender: "female",
//     speeks: ["hindi", "English"],
//     fullName() {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// class can provide structure of the object

// properties
// methods -> function

// every class has default Method

class User {
    // pass outside information to class
    // call when you create instance
    // call only once
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// instance
const yagneshInfo = new User("Yagnesh", "Modh", 33, "male");
const ViratInfo = new User("Virat", "Kohli", 30, "male");

console.log(yagneshInfo.firstName);
console.log(yagneshInfo.lastName);
console.log(yagneshInfo.fullName());
console.log(ViratInfo);
console.log(ViratInfo.fullName());




