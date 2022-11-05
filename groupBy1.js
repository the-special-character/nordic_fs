
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

const maleRecords = users.reduce((p, c) => {
    if(c.gender === "male") {
        p.push(c);
    }
    return p;
}, []);

console.log(maleRecords);

// const rohitIndex = users.reduce((p, c, index) => {
//     if(c.name === "Taimur") {
//         return c;
//     }
//     return p;
// }, -1);

// console.log(rohitIndex);

const arr = [1,2,3,4,5,6,7,8];

// [2,4,6,8] => 20

// previous is output of my previous iteration
const sum = arr.reduce((previous, currrent) => {
    console.log(previous);
    console.log(currrent);
    return previous + currrent;
}, 0)

const sumEven = arr.reduce((previous, currrent) => {
    if(currrent % 2 === 0) {
        return previous + currrent;
    }
    return previous;
}, 0);

console.log(sumEven);

console.log(sum);

let result = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
}

console.log(result);