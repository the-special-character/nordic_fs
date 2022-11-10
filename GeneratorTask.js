function* abc() {
    try {
        yield 1;
        yield 2;
        yield 6;
        yield 4;
    } catch (error) {
        console.log(error.message)
    }
}

//if yield value is 6 then throw the error something went wrong
const gen = abc();
const p1=gen.next();

console.log(p1.value)

const p2=gen.next();
console.log(p2.value)

const p3=gen.next();
console.log(p3.value)
gen.throw(new Error("something went wrong"))


