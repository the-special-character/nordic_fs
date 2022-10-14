
const obj = {
    a: 1,
    b: 2,
    c: {
        g: 10,
        j: 15,
        k: 16,
        d: 5, // 8
    }
}


const obj1 = {...obj, c: {...obj.c, e: 6} }

console.log(obj1);

// immutably

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

const users1 = {...users, address:{pin: 844141}};

console.log(users1);

