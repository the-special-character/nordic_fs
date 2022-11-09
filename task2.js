//immutable approach

const user = {
    firstName: "Yagnesh",
    lastName: "Modh",
    age: 33,
  };

const updateduser = Object.assign({},user);

console.log(user);

updateduser.gender = user.gender;

console.log(updateduser.gender);
console.log(user);


  