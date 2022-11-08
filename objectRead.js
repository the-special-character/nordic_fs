

// add new Property
// update any existing property

// how to remove existing property

const objectForAlphabets = {
    a: 1,
    b: 2,
    c: 3
}


console.log(objectForAlphabets.a);

const key = "b";

console.log(objectForAlphabets[key]);

// 3rd approch to read a property;

const a = 5;

// object desctucturing
const { a:objA, c, [key]:dynamicKey } = objectForAlphabets;

console.log(a);
console.log(objA);
console.log(c);
console.log(dynamicKey);


// mutable approch

// delete obj.c;


// console.log(obj);


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

const { name: { first } } = users;

console.log(first);

