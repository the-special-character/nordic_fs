
const users = {
    name: {
        first: "Yagnesh",
        last: "Modh"
    },
    age: 33,
    gender: "male",
    address: {
        address1: "Murdhanya Appartment",
        address2: "satelite",
        city: "ahmedabad",
        state: "gujarat",
        pin: 382480
    }
}
//Read age and gender using destructuring
let {age, gender } = users;
console.log(age);
console.log(gender);

//mutable approach 
console.log(users.name['first']);

//fetch first/last name using immutable

const {name:{last}} = users;
console.log(last);

// Fetch the address1 with destructuring
const {address:{address1}}= users;
console.log(address1);

//Arrays basics
// Task is to remove 
//  1. Yagnesh from given arrey 
//  2. add Bhoomi at 4th index
//  3. Update Laks to "love"

const users1= ["seraj", "yagnesh", "Laksh", "kishore", "seema", "shobha"];
users1.splice(1,1);
users1.splice(4, 0, "Bhoomi");
console.log(users1);
users1.splice(1,1 , "Love");
console.log(users1);