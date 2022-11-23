const users = [
  {
    name: "Yagnesh",
    gender: "male",
    age: 33,
  },
  {
    name: "Virat",
    gender: "male",
    age: 30,
  },
  {
    name: "Deepika",
    gender: "female",
    age: 28,
  },
  {
    name: "Alia",
    gender: "female",
    age: 22,
  },
  {
    name: "Taimur",
    gender: "male",
    age: 08,
  },
];
//get the user info whose age is greater than 30
const filteredAge = users.filter((item) => {
  return item.age >= 30;
});
console.log(filteredAge);

//using find method
const getresult = users.find((userAge) => {
  return userAge.age >= 30;
});

console.log(getresult);
