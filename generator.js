function* xyz() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } catch (error) {
    console.log(error.message);
  }
}

const gen = xyz();

console.log(gen.next());

gen.throw(new Error("something went wrong"));

// gen.return();

// console.log(gen.next());
