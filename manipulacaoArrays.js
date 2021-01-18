// criar uma array
console.log("Criar Array")

console.log();
console.log("[]");
const arr = [1, 2, 3];
console.log(arr); //[ 1, 2, 3 ]

//ou
console.log();
console.log("new Array");
const arr2 = new Array(4, 5, 6);
console.log(arr2); //[ 4, 5, 6 ]

//ou
console.log();
console.log("Array.of");
const arr3 = Array.of(7, 8, 9);
console.log(arr3); //[ 7, 8, 9 ]

//ou
console.log();
console.log("Array()");
const arr4 = Array(3); //com apenas uma variável n, cria um vetor com n espaços vazios
console.log(arr4); //[ <3 empty items> ]

const arr5 = Array(10, 11, 12);
console.log(arr5); //[ 10, 11, 12 ]

//adicionar e remover elementos
console.log();
console.log("Adicionar e remover elementos");

// push - adiciona 1 ou + elementos ao final da array e retorna o tamanho do novo array
console.log();
console.log("Push - adiciona ao final");
console.log("Array: ", arr);
console.log("Tamanho:", arr.push(4, 5, 6)); //6
console.log("Array: ", arr);; //[ 1, 2, 3, 4, 5, 6 ]

// pop - remove o último elemento e retorna o elemento removido
console.log();
console.log("Pop - remove ao final");
console.log("Array: ", arr);
console.log("Removida: ", arr.pop()); //6
console.log("Array: ", arr);; //[ 1, 2, 3, 4, 5 ]

// unshift - adiciona 1 ou + elementos ao início da array e retorna o tamanho do novo array
console.log();
console.log("Unshift - adiciona ao inicio");
console.log("Array: ", arr);
console.log("Tamanho: ", arr.unshift(0)); //6
console.log("Array: ", arr);; //[ 0, 1, 2, 3, 4, 5 ]

// shift - remove o primeiro elemento e retorna o elemento removido
console.log();
console.log("Array: ", arr);
console.log("Shift - remove ao início");
console.log("Removida: ", arr.shift()); //0
console.log("Array: ", arr);; //[ 1, 2, 3, 4, 5 ]

// concat - concatena 2 ou + arrays retornando um novo array
console.log();
console.log("Concat - concatena");
console.log("Array: ", arr);
console.log("Array: ", arr2);
const arr6 = arr.concat(arr2);
console.log("Concatenado: ", arr6);
//[
//  1, 2, 3, 4,
//  5, 4, 5, 6
//]

//slice - retorna um novo array de acordo com o início e o fim informados.
console.log();
console.log("Slice - fatia o array");
console.log("Array: ", arr6);
const arr7 = arr6.slice(0, 5);
console.log("Slice: ", arr7); //[ 1, 2, 3, 4, 5 ]

const arr8 = arr6.slice(-3); // com apenas 1 parâmentro, esse é o inicial
console.log("Slice: ", arr8); //[ 3, 4, 5 ]

// splice - remove ou adiciona itens de acordo com a posição passada - não é imutável
console.log();
console.log("Splice - remove");
console.log("Array: ", arr7);
const removidas = arr7.splice(2);
console.log("Removidas: ", removidas); //[ 3, 4, 5 ]
console.log("Array: ", arr7); //[ 1, 2 ]

//splice para adicionar
console.log("Splice - adiciona");
arr7.splice(0, 0, "first"); //(posição_inicial,numero_itens_removidos, itens_adicionados)
console.log("Array: ", arr7); //[ 'first', 1, 2 ]

// iterar elementos 
console.log();
console.log("Iterar elementos");

//forEach
console.log();
console.log("forEach");
console.log("Array: ", arr);
arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});
//0: 1
//1: 2
//2: 3
//3: 4
//4: 5

//map - diferente de forEach, retorna um novo array
console.log();
console.log("Map");
console.log("Array: ", arr);
const arr9 = arr.map(value => value * 2);
console.log("Novo array com itens multiplicados por 2: ", arr9); //[ 2, 4, 6, 8, 10 ]

// buscar elementos 
console.log();
console.log("Buscar elementos");

// find - retorna o primeiro item que satisfaz a condição
console.log();
console.log("Find - retorna o primeiro item que satisfaz a condição");
console.log("Array: ", arr9);
const primeiro = arr9.find(value => value > 2);
console.log("Primeiro item maior que 2", primeiro); //4

// findIndex - retorna o índice do primeiro item que satisfaz a condição
console.log();
console.log("findIndex - retorna o índice do primeiro item que satisfaz a condição");
console.log("Array: ", arr9);
const primeiroIndex = arr9.findIndex(value => value > 2);
console.log("Primeiro índice com valor maior que 2: ", primeiroIndex); //1

// filter - retorna um array com todos os itens que satisfazem a condição
console.log();
console.log("Filter- retorna um array com todos os itens que satisfazem a condição");
console.log("Array: ", arr9);
const todos = arr9.filter(value => value > 2);
console.log("Todos que o valor é maior que 2: ", todos); //[ 4, 6, 8, 10 ]

//indexOf - retorna o primeiro indice do elementos buscado
console.log();
console.log("indexOf - retorna o primeiro indice do elementos buscado");
console.log("Array: ", arr9);
const itemIndex = arr9.indexOf(4);
console.log("Primeiro índice do elemento 4: ", itemIndex); //1

//lastIndexOf - retorna o último indice do elementos buscado
console.log();
console.log("lastIndexOf - retorna o último indice do elementos buscado");
console.log("Array: ", arr9);
const ultimoItemIndex = arr9.indexOf(8);
console.log("Último índice do elemento 8: ", ultimoItemIndex); //3

//includes - retorna um booleano se o elemento existe ou não na array
console.log();
console.log("includes - retorna um booleano se o elemento existe ou não na array");
console.log("Array: ", arr9);
const existe = arr9.includes(8);
console.log("Na array existe 8: ", existe); //true

//some - retorna um booleano se algum elemento satisfaz a condição
console.log();
console.log("some - retorna um booleano se algum elemento satisfaz a condição");
console.log("Array: ", arr9);
const cond = arr9.some(value => value % 2 === 0);
console.log("Na array existem números pares: ", cond); //true

//every - retorna um booleano se todos os elemento satisfaz a condição
console.log();
console.log("some - retorna um booleano se algum elemento satisfaz a condição");
console.log("Array: ", arr9);
const cond2 = arr9.every(value => value % 2 === 0);
console.log("Na array todos são números pares: ", cond2); //true

//reverse - reverte o array
console.log();
console.log("reverse - reverte o array");
console.log("Array: ", arr9);
const rever = arr9.reverse();
console.log("Array invertida: ", rever); //[ 10, 8, 6, 4, 2 ]

//sort - ordena o array
console.log();
console.log("sort - ordena o array");
console.log("Array: ", rever);
const ordem = rever.sort();
console.log("Array ordenada: ", ordem); //[ 10, 2, 4, 6, 8 ]

//join - junta e transforma em string
console.log();
console.log("join - junta e transforma em string");
console.log("Array: ", rever);
const juntos = rever.join('');
console.log("Join elementos: ", juntos); //102468