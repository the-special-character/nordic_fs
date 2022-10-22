const user = [
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
];

// Complexity
// O(1)
// O(N)
// O(logN)

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

let isThreeExist = false;

const searchNumber = 3;
const middle = arr.length / 2;

console.log(arr[middle]);
if(searchNumber === arr[middle]) {
    isFiveExist = true;
}

console.log(isFiveExist);

// if (searchNumber > arr[middle]) {
//   for (let i = 0; i < middle; i++) {
//     const element = arr[i];
//     console.log(element);
//   }
// }

// if(searchNumber < arr[middle]) {
//     for (let i = 0; i < middle; i++) {
//     const element = arr[i];
//     console.log(element);
//   }
// }


// let isFiveExist = false;

// Number of records = N(6)
// iteration time = N(5) 1 > & > N

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
//   if (element === 5) {
//     isFiveExist = true;
//     break;
//   }
// }

// console.log(isFiveExist);

// const index = user.findIndex((element) => {
//   return element.name === "Deepika"
// });

// console.log(index);

// const index = user.findIndex((data) => {
//     console.log(data);
//     // return true or false;
//     return data.name === "Deepika"

// })

// console.log(index);
