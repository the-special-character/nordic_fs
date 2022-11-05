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

const age = 32;

const ageGroup = Math.floor(age / 10);

console.log(`${ageGroup}0-${ageGroup}9`);

// {
//     "00-09": [],
//     "20-29": [],
//     "30-39": []
// }

const groupByAge = users.reduce((p, c) => {
    const ageGroup = Math.floor(c.age / 10);
    const key = `${ageGroup}0-${ageGroup}9`;
    if(!p[key]) {
        p[key] = [];
    }
    p[key].push(c);
    return p;
}, {});

console.log(groupByAge);



// {
//     "00-09": [],
//     "20-29": [],
//     "30-39": []
// }