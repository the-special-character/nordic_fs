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
]

// {
//     male: [],
//     female: []
// }


const groupByGender = users.reduce((p, c) => {
    const key = c.gender;
    if(!p[key]) {
        p[key] = [];
    }
    p[key].push(c);
    return p;
}, {})

console.log(groupByGender);


