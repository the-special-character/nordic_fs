const arr = [1, 2, 3, 4, 4, 5, 6, 7];

const obj = {
  1: 1,
  1: 2,
};

const set = new Set(arr);

console.log(set);

// O(1)
set.delete(3);

// O(1)
console.log(set.has(5));

set.add(8);

console.log(set);

// O(logN)

// O(1)
const isFiveExist = arr.some((x) => {
  console.log(x);
  return x === 5;
});

console.log(isFiveExist);

const map = new Map();

map.set("yagnesh", {
  name: "Yagnesh",
  age: 33,
  gender: "male",
});

map.set("virat", {
  name: "Virat",
  age: 30,
  gender: "male",
});

console.log(map);

console.log(map.has("virat"));

map.delete("virat");

console.log(map.has("virat"));

console.log(map.get("yagnesh"));
