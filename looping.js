// persormance

// O(N)
// O(logN)
// O(1)

// when ever we iterate the data that time complexity come into picture

// const arr = [1,2,3,4,5,6,7,8,9,10]
// collection of data

const a = 1;

// non-premitive type of data storein in stack memoty

// heap memory
// 
// stack memory
// cache memory

const arr = [...Array(10000000).keys()]
// looping techn

// for
console.time("for")
// stack memory
for (let i = 0; i < arr.length; i++) {
}
console.timeEnd("for")

// while
console.time("while")
let j = 0; // heap memory 
while (false) {
    j++;
}
console.timeEnd("while")

console.time("dowhile")
let k = 0;
do {
    k++;
} while (false);
console.timeEnd("dowhile")



console.time("forEach")
// 99%
// they dont need to deal with indexing 
arr.forEach(l => {
});
console.timeEnd("forEach")


// output oriented

// performance oriented -> for

// while
// dowhile
// foreach


// const users = [
//     {
//         name: "yagnesh"
//     },
//     {
//         name: "virat"
//     }
// ]