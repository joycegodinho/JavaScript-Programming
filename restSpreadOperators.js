// Arguments(palavra resenvada que lista todos os inputs) 
// usado antes do ES6
// prototype object
// não funciona com arrow functions 
function sum(a, b) {
    let value = 0;
    for (var i = 0; i < arguments.length; i++) {
        value = value + arguments[i];
    }
    //console.log(arguments)
    // { '0': 5, '1': 5, '2': 5, '3': 2, '4': 3 }
    return value;
}
console.log(sum(5, 5, 5, 2, 3));

//resp operator ...
// prototype array
//function sum2(a,b,...args) - pode ser usado para pegar apenas o restante dos parâmetros

function sum2(...args) {
    //console.log(args)
    // [ 5, 5, 5, 2, 3 ]
    // reduce - roda a função para cada value dentro do vetor 
    return args.reduce((acc, value) => acc + value, 0);
    //(valorAcumulado, item) => operação, valorAcumInocial
}
console.log(sum2(5, 5, 5, 2, 3));

// apply - antes do ES6
//// apply é = call(lista) porem para array
// chama uma função com um dado valor this e arguments providos como uma array 
//  se um método é uma função em código non-strict mode , null e undefined serão substituidos com o objeto global

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);
const sum3 = (...rest) => {
    return multiply.apply(undefined, rest);
};
console.log(sum3(5, 5, 5, 2, 3));

// spread operator ... 
//funcionamento semelhante ao apply
// funciona em strings, arrays, literal objects e objetos iteraveis
const sum4 = (...rest) => {
    return multiply(...rest);
};
console.log(sum4(5, 5, 5, 2, 3));

// quebra os itens e repassa
const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}
logArgs(...str);