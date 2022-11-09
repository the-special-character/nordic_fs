const user = ["seraj" , "yagnesh", "lakshya", "kishor", "seema", "shobha"]


// 1 remove yagnesh from the arry

// 2 add "bhoomi" at 4th index;

// 3. update "laksh" to "love"

user.splice(1,1);
console.log(user);

user.splice(4,0,"bhoomi");
console.log(user);


user.splice(1,1,"love");
console.log(user);
