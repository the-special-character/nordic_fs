// combination "related" data

const firstName = "Yagnesh";

const lastName = "Modh";

const age = 33;

const gender = "male"

// pointer

// this

const user = {
    firstName,
    lastName,
    age,
    gender,
    speeks: ["gujarati", "English"],
    fullName() {
        console.log(this);
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user.firstName);
console.log(user.gender);
console.log(user.fullName());



