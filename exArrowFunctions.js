var sumOld = function(a, b) { // função anônima - só é possível quando é atribuída a uma variável
    return a + b; // ou passada como parâmetro de outra função
}

// arrow functions

var sum = (a, b) => a + b; //(paramentros de entrada) => (saida) - return implicito por ter só um statment
console.log(sum(5, 5));

var prod = (a, b) => {
    return a * b;
};
console.log(prod(5, 5));

var createObj = () => ({ test: 123 });
console.log(createObj());