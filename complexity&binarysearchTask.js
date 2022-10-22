const users = [
    "yagnesh",
    "shikhar",
    "virat",
    "rohit",
    "panth"
]


// find whether virat is exist or not 
// using for loop
// with O(logN) complexity


const SearchUserIndex = 5;
const middle = users.length / 2;
let isViratExist = false;
for (let i = 0; i < users.length; i++) {
    const element = users[i];
    console.log(element);
    if (element === 'virat'){
        isViratExist = true;
        break;
    }
}
console.log(isViratExist);



const number =[1,2,3,4,5,6,7,8];
const searchkey =7 ;
const middlee = number.length/2;
let result =false;
if(number[middle] === searchkey){
    result = true;
}
if(searchkey< number[ middlee]){
    for (let i = 0; i < middle; i++){
        const element = number[i];
    }
}
if(searchkey> number[middle]){
    for (let i = middle; i< number.length; i++){
        const element =number[i];
        console.log(element)
        if(element === searchkey){
            result=true;
            break;

        }
    }
}
console.log(result)