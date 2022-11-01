const users = [
    {
        name: "Yagnesh",
        gender: "male",
        age: 33
    },
    {
        name: "Virat",
        gender: "male",
        age: 30
    },
    {
        name: "Deepika",
        gender: "female",
        age: 28
    },
    {
        name: "Alia",
        gender: "female",
        age: 22
    },
    {
        name: "Taimur",
        gender: "male",
        age: 08
    },
]

const names1 = users.map(x => x.name);


console.log(names1);
// ["Yagnesh","Virat",... ]

// const index = users.findIndex(x => x.name === "Virat");

// const updatedUsers = [
//     ...users.slice(0, index),
//     {...users[index], age: 32},
//     ...users.slice(index + 1),
// ]

const updatedUsers = users.map(item => item.name === "Virat" ? ({...item,age: 32}) : item)


console.log(updatedUsers);



// map 

const arr = [1,2,3,4,5,6,7,8];

const a1 = arr.map(item => {
    if(item % 3 === 0) {
        return 0
    }
    return item;
});

console.log(a1);


const names = ["yagnesh", "virat", "rohit", "deepika", "alia"];

const a2 = names.map(item => `${item[0].toUpperCase()}${item.slice(1)}`)

console.log(a2);



// ["Yagnesh", "Virat",  "Rohit", "Deepika", "Alia"]

// [1,2,0, 4,5,0,7,8]

// convert all the number which is divisable by 3 to 0

// map 
const newArray = arr.map(item => {
    if(item % 2 === 0) {
        return item * 2
    }
    return item
})

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArray.push(element * 2);
// }

console.log(newArray);


// return single item
const viratInfo = users.find(item => item.name === "Virat");

console.log(viratInfo);

// return collection of items
// const adultUsers = users.filter(item => item.age > 65);

// console.log(adultUsers);