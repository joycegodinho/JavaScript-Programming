// symbols 

const uniqueId = Symbol('hello'); //valor é opcional e utilizado apenas para debug
const uniqueId2 = Symbol('hello');

console.log(uniqueId); //Symbol(hello)
console.log(uniqueId === uniqueId2); //false

//criar propriedades ocultas 

const obj = {
    [uniqueId]: 'hello'
};
console.log(obj); //{ [Symbol(hello)]: 'hello' }

//mostrar propriedade oculta

console.log(Object.keys(obj)); //[] - não vai retornar a propriedade oculta

console.log(Object.getOwnPropertySymbols(obj)); //[ Symbol(hello) ]

//Symbol.iterator - retorna um objeto

const arr = [10, 20, 30, 40, 50]
const it = arr[Symbol.iterator]();

console.log(it.next()); //{ value: 10, done: false }

while (true) {
    let { value, done } = it.next();
    if (done) {
        break
    }
    console.log(value);
}