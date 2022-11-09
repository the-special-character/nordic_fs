const p1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("token") }, 2000)
    })
}


const p2 = (token) => {
    return new Promise((resolve, reject) => {
        if (!token) {
            reject("p2 rejected")
        }
        setTimeout(() => { resolve("p2 resolved") }, 1000)
    })
}

// const loadData = async () => {
//     try {

//       const res1 = await p1();
//       console.log(res);
//       const res = await p2();
//       console.log(res);
//     }
// }  

const loadData = async () => {
    try {
        const res1 = await (res2);
        console.log(res1);
        const res2 = await (res2)
        console.log(res2);
    }
    catch {
        console.log(error);
    }

}
