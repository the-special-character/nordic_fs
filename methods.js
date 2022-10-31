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

const viratIndex = users.findIndex(item => {
    return item.name === "Virat"
})

const updatedUsers = [
    ...users.slice(0, viratIndex),
    {
        ...users[viratIndex],
        age: 32
    },
    ...users.slice(viratIndex + 1),
];

console.log(updatedUsers);

// map

// reduce



// O(logN)
// if record exist then it will return index of data
// else return -1
const deepikaIndex = users.findIndex((user) => {
    return user.name === "Deepika"
})


// O(logN)
// if record found it will return data;
// else return undefined

// return only single item
const deepikaInfo = users.find((user) => {
    console.log(user.name);
  return user.name === "xyz"
});


const isViratExist = users.some(user => {
    return user.name === "Virat"
});

const isEveryoneAdult = users.every(user => {
    return user.age >= 18;
})


console.log(isViratExist);

console.log(isEveryoneAdult);

// return collection of data
// O(N)
// if record exist then return collection of data
// else return []
const maleRecords = users.filter(user => {
    return user.gender === "male"
})

console.log(deepikaIndex);
console.log(deepikaInfo);

console.log(maleRecords);

// get me all the records whoes age >= 30

// list of users and i want to get all users who is > 18

// filter