//const users = ["seraj", "yagnesh", "laksh", "kishor", "seema", "shobha"]

// remove yagnesh
// replace "laksh" with "love"
// add "reshma" at after kishor and before seema

const new_users= ["seraj", "yagnesh", "Laksh", "kishore", "seema", "shobha"];
const rm_index= 1;

//task 1 solution
const arr1= new_users.slice(0,rm_index);
console.log(arr1);

const arr2 = new_users.slice(rm_index+1);
console.log(arr2);

const result1 = [
    ...arr1,
    ...arr2,
]
console.log(result1);

//Task 2 solution
const arr3 = new_users.slice(0,1);
const arr4 = new_users.slice(3);
const result2 =[ ...arr3,'love', ...arr4];
console.log(result2);

//task 3 solution

const result3 =[
    ...result2.slice(0,3), 'Reshma', ...result2.splice(3)
];
console.log(result3);
