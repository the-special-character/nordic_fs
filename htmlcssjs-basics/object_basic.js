//change object properties value wihtout changing original value using immutable
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 5 // 8
    }
}
// const obj1 = {...obj, c:{d:8, e:6}}
const obj1 = {...obj, c:{...obj.c, e:6}}
console.log(obj);
console.log(obj1);

//update the pin number
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
const users1 = {...users,address:{...users.address,pin:844141}}
console.log(users);
console.log(users1)