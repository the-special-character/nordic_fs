// variable hoisting concept javascript allowed variable redeclaration

// var a;
// console.log(a);

// a = 5;

// console.log(a);


// let a = 5;

// a = 6;

// console.log(a);

if(true) {
    // let pie = 3.14;
    const rest = "hello"
}



//           hoisting       redeclare       reassign

// var          yes             yes             yes

// let          no              no              yes

// const        no              no              no



// var a = 1;

// function test() {
//     var a;
//     console.log(a);

//     a = 5;
// }

// test();


var variable = 10;
(()=>{
   variable_3 = 35;
   console.log(variable_3); // 35
   var variable_3 = 45;
   variable_2 = 15;
   console.log(variable);  // 10
})();

console.log(variable_2); 
console.log(variable_3);
var variable=30;