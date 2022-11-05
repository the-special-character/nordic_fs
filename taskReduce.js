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
  
  
  //   [
//     {
//         username: "john",
//         team: "red",
//         score: 5,
//         items: ["ball", "book", "pen"]
//       },
//       {
//         username: "susy",
//         team: "red",
//         score: 55,
//         items: ["ball", "eraser", "pen"]
//       },
//   ]



const userball=array.reduce((p,c)=>{
    const a=c.items;
    if(a.includes('ball'))
    {
        p.push(c);
    }
    return p;
  },[])
 console.log(userball)
