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

// get me all the records whoes age >= 30

const filteredAge =users.filter((item)=>{
    return item.age >= 30;
})
console.log(filteredAge);
