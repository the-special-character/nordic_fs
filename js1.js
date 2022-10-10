// global scope
// function scope
// block scope



// console.log(a);

// IIFE(self calling function)

// per file only one self calling function
(function() {
   if(true) {
    var a = 10;
    console.log(a);
    }
})()

(function() {
    if(true) {
     var a = 10;
     console.log(a);
     }
 })()







// function test() {
//     var a = 10;

//     console.log(a);
// }

// console.log(a);

