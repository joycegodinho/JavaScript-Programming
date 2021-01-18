// antes do ES6

function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i]; // arguments retorna todas as entradas com tipo objeto
    }
    return value;
}
console.log(sum(5, 5, 5, 2, 3));

// rest operator ... - retorna as entradas como array

function sum2(...args) { //args é o nome da array
    return args.reduce((acc, value) => acc + value, 0) // acc - valor acumulado de valor inicial 0
}
console.log(sum2(5, 5, 5, 2, 3));

// spread operator ... - quebra os argumentos e joga em uma lista
// strings, arrays, literal objects e objetos iteraveis

const str = "Digital Innovation One";

function logArgs(...args) {
    console.log(args);
}
logArgs(...str);

//[
//    'D', 'i', 'g', 'i', 't',
//    'a', 'l', ' ', 'I', 'n',
//    'n', 'o', 'v', 'a', 't',
//    'i', 'o', 'n', ' ', 'O',
//    'n', 'e'
//]