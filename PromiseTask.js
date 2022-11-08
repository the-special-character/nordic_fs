const ls = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("ls resolved") }, 2000)
    })

}
const main = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("main resolved") }, 3000)
    })

}
const rs = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve("rs resolved") }, 1000)
    })

}git remote 

const loadData = async () => {
    try {
        console.time("load-data")
        const res = await Promise.all([
            ls(),
            main(),
            rs()
        ])
        console.log(res);
        console.log(res[0]);
        console.log(res[1]);
        console.log(res[2]);
    } catch (error) {

    }
}
loadData()