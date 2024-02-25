// All
// AlLSettled
// Race
// Any

const ls = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("ls resolved");
    }, 2000);
  });
};

const main = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("main resolved");
    }, 3000);
  });
};

const rs = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rs resolved");
    }, 1000);
  });
};

const loadData = async () => {
  try {
    console.time("load-data");
    const res = await Promise.any([ls(), main(), rs()]);
    console.log(res);

    // for (let i = 0; i < res.length; i++) {
    //     if(res[i].status === "fulfilled") {
    //         console.log(res[i].value)
    //     } else {
    //         console.log(res[i].reason)
    //     }

    // }
    // const lsRes = await ls();
    // const mainRes = await main();
    // const rsRes = await rs();
    // console.log(res[0]);
    // console.log(res[1]);
    // console.log(res[2]);
    console.timeEnd("load-data");
  } catch (error) {
    console.log(error);
  }
};

loadData();

const loadAPIData = async () => {
  try {
    const res = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/photos"),
      fetch("https://jsonplaceholder.typicode.com/albums"),
    ]);

    const json = await Promise.all([res[0].json(), res[1].json()]);

    console.log(json);
  } catch (error) {}
};

loadAPIData();
