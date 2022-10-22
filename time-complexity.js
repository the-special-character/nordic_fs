const users = ["yagnesh", "shikhar", "virat", "rohit", "panth"];

// find whether virat is exist or not
// using for loop
// with O(logN) complexity

let isViratExist = false;
for (let i = 0; i < users.length; i++) {
  const element = users[i];
  console.log(element);
  if (element === "virat") {
    isViratExist = true;
    break;
  }
}
console.log(isViratExist);

// using for loop
// with O(logN) complexity
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const searchnum = 7;
const middle = number.length / 2;
let result = false;
console.log(number[middle]);
if (searchnum === number[middle]) {
  result = true;
}
if (searchnum < number[middle]) {
  for (let i = 0; i < middle; i++) {
    const element = number[i];
  }
}
if (searchnum > number[middle]) {
  for (let i = middle; i < number.length; i++) {
    const element = number[i];
    console.log(element);
    if (element === searchnum) {
      result = true;
      break;
    }
  }
}
