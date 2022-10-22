const arr = [1, 2, 3, 4, 5, 6, 7, 8];

let result = false;

// O(1)
// O(logN)
// O(N)

const searchNumber = 7;
const middle = arr.length / 2;

console.log(arr[middle]);
if(searchNumber === arr[middle]) {
    result = true;
}

if(searchNumber < arr[middle]) {
    for (let i = 0; i < middle; i++) {
        const element = arr[i];
        console.log(element);
        if(element === searchNumber) {
            result = true;
            break;
        }
        
    }
}

if(searchNumber > arr[middle]) {
    for (let i = middle; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
        if(element === searchNumber) {
            result = true;
            break;
        }
        
    }
}



console.log(result);