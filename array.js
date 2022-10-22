const arr = [1,2,3,4,5,6];

const [a, b, ...rest] = arr;

console.log(rest);

console.log(arr[3]);

// console.log(abc);

const arr1 = [-1, 0, ...arr, 7, 8];

console.log(arr1);

console.log(arr);

// const users = ["seraj", "yagnesh", "laksh", "kishor", "seema", "shobha"]

// 1 remove yagnesh from the arry

// 2 add "bhoomi" at 4th index;

// 3. update "laksh" to "love"

// Mutable approch...

// arr.splice(2, 2);

// console.log(arr);

// const index = 3;

// arr.splice(index, 0, 8, 9, 10);

// console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);

// console.log(arr.length);

// arr.push(7);

// console.log(arr);

// arr.pop();

// console.log(arr);

// arr.unshift(0);

// console.log(arr);

// arr.shift();

// console.log(arr);