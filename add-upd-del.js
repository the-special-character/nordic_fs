
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 5 // 8
    }
}
const obj1 = { ...obj,c:{d:8,e:6}}


console.log(obj1);

const users = {
    name: {
        first: "Yagnesh",
        last: "Modh"
    },
    age: 33,
    gender: "male",
    address: {
        address1: "Murdhanya Appartment",
        address2: "satelite",
        city: "ahmedabad",
        state: "gujarat",
        pin: 382480
    }
}

const ob2={...users,address:{...users.address,pin:844141}}

console.log(ob2)

const{address:{address1}}=users;

console.log(address1)


const users1 = ["seraj", "yagnesh", "laksh", "kishor", "seema", "shobha"]

// 1 remove yagnesh from the arry

// 2 add "bhoomi" at 4th index;

// 3. update "laksh" to "love"
users1.splice(1,1)
console.log(users1)

users1.splice(4,0,"bhoomi")
console.log(users1);

users1.splice(1,1,"love")
console.log(users1);

const users2 = ["seraj", "yagnesh", "laksh", "kishor", "seema", "shobha"]

// remove yagnesh
// replace "laksh" with "love"
// add "reshma" at after kishor and before seema

const index=1
const result=[
    ...users2.slice(0,index),
    ...users2.slice(index+1)

]
console.log(result);

const result2=[
    ...users2.slice(0,2),'love',...users2.slice(3)
]
    
    
    

console.log(result2);

const result3=[
    ...users2.slice(0,4),
    'reshma',
    ...users2.slice(4)
]
console.log(result3);

const user = [
    {
        name: "Yagnesh",
        gender: "male",
        age: 33
    },
    {
        name: "Virat",
        gender: "male",
        age: 30
    },
    {
        name: "Deepika",
        gender: "female",
        age: 28
    },
    {
        name: "Alia",
        gender: "female",
        age: 22
    },
    {
        name: "Taimur",
        gender: "male",
        age: 08
    },
]
const index1=1;
const viratinfo=user[index1]
const changeResult=[
    ...user.slice(0,index1),
    {
    ...user[index1],
    age:32
    },
    ...user.slice(index1+1)
]
console.log(changeResult);
 

// to find index
const Index2 = user.findIndex((data)=> {
    return data.name ==="Alia"
});
console.log(Index2);


const user1 = [
    "yagnesh",
    "shikhar",
    "virat",
    "rohit",
    "panth"
]


// find whether virat is exist or not 
// using for loop
// with O(logN) complexity

let isexist=false;
//const index3=2
for(let i=0;i<=user1.length;i++)
{
    const element=user1[i];
    if(element==='virat')
    {
    isexist = true;
    }
    
}
console.log(isexist);



// find whether virat is exist or not 
// using for loop
// with O(logN) complexity
//

// find whether virat is exist or not 
// using for loop
// with O(logN) complexity

const number =[1,2,3,4,5,6,7,8];
const searchkey =7 ;
const middle = number.length/2;
let result4 =false;

if(number[middle] === searchkey){
    result4 = true;
}
if(searchkey< number[ middle]){
    for (let i = 0; i < middle; i++){
        const element = number[i];
    }
}
if(searchkey> number[middle]){
    for (let i = middle; i< number.length; i++){
        const element =number[i];
        console.log(element)
        if(element === searchkey){
            result4=true;
            break;

        }
    }
}
console.log(result4)

const user2 = [
    {
        name: "Yagnesh",
        gender: "male",
        age: 33
    },
    {
        name: "Virat",
        gender: "male",
        age: 30
    },
    {
        name: "Deepika",
        gender: "female",
        age: 28
    },
    {
        name: "Alia",
        gender: "female",
        age: 22
    },
    {
        name: "Taimur",
        gender: "male",
        age: 08
    },
]

const groupby=users1.reduce((p,c)=>{
    const key1=c.gender;
    if(!p[key1])
    {
        p[key1]=[];
    }
    p[key1].push(c);
    return p;
},{})

console.log(groupby);


const adddata=user2.reduce((p,c)=>{
    if(c.gender === 'male')
    {
        c['Profession']='Crickter';
        
    }
    return c;

},[])
console.log(adddata);


const updateuser=user2.map(item=>item.name==="Alia" ? ({...item,age : 25}) : item)
console.log(updateuser);


const returnNames=user2.map(item => item.name
);
console.log(returnNames);
//get me all the records whoes age >= 30

const getresult=user2.find((user)=>{
return user.age>=30})

console.log(getresult);


const arr = [1,2,3,4,5,6,7,8];
const newarray=arr.map(item => {
    if(item % 3===0)
    {
        return 0;

    }
    return item;
})
console.log(newarray);

/*const names = ["yagnesh", "virat", "rohit", "deepika", "alia"];
const updatenames=names.map(item => '${item(0)'
    //if(item ==='yagnesh')
    //{
        //return item.touppercase();
    //}

    
    
})

console.log(updatenames); */

const arr1 = [1,2,3,4,5,6,7,8];
const sum=arr1.reduce((previous,current)=>{
    if(current%2 != 0)
    {
        return previous+current;
    }
    return previous;
},0);
console.log(sum);


const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description:
        "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      category: "jewelry",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
  ];
  
  // 
  const pricesum=products.reduce((p,c)=>{
    const price=Math.floor(c.price/1);
},0)

console.log(pricesum)

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

const totalvoters = voters.reduce((p, c) => p + (c.voted ? 1 : 0),0);
console.log(totalvoters);

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

const totalprice=wishlist.reduce((p,c)=>p+(c.price),0);
console.log(totalprice);



const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  ];

  const userwithball=array.reduce((p,c)=>{
    const a=c.items;
    if(a.includes('ball'))
    {
        p.push(c);
    }
    return p;
  },[])


  console.log(userwithball);


  //some

  const ary=[1,2,3,4,5,6,7]
  const set=new Set(ary);
  console.log(set);

  set.add(11);
  console.log(set);

  set.delete(11);
  console.log(set);

  set.keys(1);
  console.log(set);


fetch("https://jsonplaceholder.typicode.com/album").then((data)=>{return data.json})
.then(json=>{
  console.log(json);
})



  