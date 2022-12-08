const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
};

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 2000);
  });
};

const p3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
};

const p4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 1000);
  });
};

const loadData = async () => {
  try {
    const promises = [p1(), p2(), p3(), p4()];

    const res = await Promise.allSettled(promises);

    console.log(res);
    for (let i = 0; i < res.length; i++) {
      const element = res[i];
      if (element.status === "rejected") {
        console.log(`P${i + 1} rejected`);
      }
    }
  } catch (error) {}
};

loadData();

// p2
// p4

// p2 resolved
