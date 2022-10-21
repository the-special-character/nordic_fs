// const data =[
//     {name: "seraj", lname:"hassan"},
//     {name:"tannu", lname:"ansari"},
//     {name: "sohail", lname:"tanvir"}
// ]
// const filterData = data.filter(item =>
// item.lname=="ansari");
// console.log(filterData);

// Change age of virat immutably
const user = [
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
const index = 1;
const changedAge = [
  ...user.slice(0, index),
  {
    ...user[index],
    age: 32,
  },
  ...user.slice(index + 1),
];
console.log(changedAge);

// find the index of Alia
const finData = user.findIndex((data) => {
  return data.name === "Alia";
});
console.log(finData);

//fetch Deepika 
// const [name] =user;
// console.log(name);
const [, ,{name}, , ,] =user;
console.log(name);