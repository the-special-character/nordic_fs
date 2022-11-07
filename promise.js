// 1. callback

// 2. promise

// 3. generator

// document.addEventListener("click", () => {
//     console.log("document clicked...")
// })

// setTimeout(() => { first }, 1000)

// app.use(() => { console.log("success")}, () => { console.log("fail")})

// pending

// completed

// rejected

// const p1 = () => {
//     return new Promise((resolve, reject) => {
//         // start loader...
//         // server call
//         // resolve("server data")
//         reject("server data rejected...")
//      })
// }

// p1()
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })
// .finally(() => {
//     console.log("finally")
//     // stop the loader
// })

// start a loader here
// server call -> 5 minutes
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((data) => {
//     return data.json()
// })
// .then(json => {
//     // write a code here to display this data on html page
//     console.log(json)
// })
// .catch(err => {
//     // write logic here to display error message on html page
//     console.log(err)
// })
// .finally(() => {
//     console.log("stop loader...")
// })

// fetch("http://localhost:3000/login", {
//   method: "POST",
//   body: JSON.stringify({
//     email: "hey@yagneshmodh.com",
//     password: "Password1!",
//   }),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
// .then(res => {
//     return res.json()
// })
// .then(json => {
//     const token = json.accessToken;
//     console.log(token);
//     fetch("http://localhost:3000/660/todoList",
//     {
//         headers: {
//             Authorization: `Bearer ${token}`
//         }
//     })
//     .then(res => {
//         if(res.ok) {
//             return res.json();
//         }
//         throw new Error("token is now available")
//     })
//     .then(todoList => {
//         console.log(todoList)
//     })
//     .catch(err => {
//         console.log(err);
//     })
// });

const loadTodoList = async () => {
  // start loader
  try {
    const loginRes = await fetch("http://localhost:3000/login", {
      method: "POST",
      body: JSON.stringify({
        email: "hey@yagneshmodh.com",
        password: "Password1!",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const loginJSON = await loginRes.json();
    const todoListRes = await fetch("http://localhost:3000/660/todoList", {
      headers: {
        Authorization: `Bearer ${loginJSON.accessToken}`,
      },
    });
    const todoListJSON = await todoListRes.json();
    if (!todoListRes.ok) {
      throw new Error(todoListJSON);
    }
    console.log(todoListJSON);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("stop loader...");
  }
};

loadTodoList();
