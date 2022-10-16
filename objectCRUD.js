const user = {
  firstName: "Yagnesh",
  lastName: "Modh",
  age: 33,
};

const obj = {
  a: 1,
  b: 2,
  d: 4,
};

// CRUD Operation

// Create
// Read
// Update
// Delete

// read object

// Dot notation
console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);

// array notation

const key = "firstName";

console.log(user[key]);
console.log(user["lastName"]);
console.log(user["age"]);

// mutable

// user.age = 34;

// can't copy non-primitive type of data like this
// const updatedUser = user;

// spread operator
const updatedUser = {
  ...user,
  age: 34,
  gender: "male",
};

// updatedUser.age = 34;
// updatedUser.gender = "male"

console.log(user);
console.log(updatedUser);

// immutable
