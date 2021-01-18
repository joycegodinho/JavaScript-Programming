function* hello() {
    console.log('Hello');
    yield;

    console.log('From');
    yield;

    console.log('Function');

}
const it = hello();

console.log(it.next());
//Hello
//{ value: undefined, done: false }
console.log(it.next());
//From
//{ value: undefined, done: false }
console.log(it.next());
//Function
//{ value: undefined, done: true }

//Passando value no yield 

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}
const it2 = naturalNumbers();
console.log(it2.next());
//{ value: 0, done: false }
console.log(it2.next());
//{ value: 1, done: false }
console.log(it2.next());
//{ value: 2, done: false }

// gerando iteradores

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj) {
    console.log(value);
}
//1
//2
//3
//4