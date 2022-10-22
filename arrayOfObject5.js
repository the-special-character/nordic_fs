const user = [
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

const index = 1;

console.log({...user[3], age: 10 });

const updatedUsers = [
    ...user.slice(0, index),
    {
        ...user[index],
        age: 32
    },
    ...user.slice(index + 1)
];







console.log(updatedUsers);


// Update Age of Virat immutabally

const todoList = [
    {
        id: 1,
        task: "Get milk",
        isDone: false
    },
    {
        id: 2,
        task: "Learn React",
        isDone: false
    },
    {
        id: 3,
        task: "Learn React Native",
        isDone: false
    }
]


const index1 = 1;

const newTodoList = [
    ...todoList.slice(0, index1),
    {
        ...todoList[index1], isDone: true
    },
    ...todoList.slice(index1 + 1)
]

console.log(newTodoList);