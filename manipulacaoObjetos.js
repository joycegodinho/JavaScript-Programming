// Manipulação de Objetos
//Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor

var book = new Object();
book.title = "1984"; // defino uma propriedade e atribuo valor a ela
book.author = "George Orwell"

// acessar uma propriedade

console.log(book.title); //1984
// OU
console.log(book["author"]); //George Orwell

// alterar uma propriedade

book.title = "Mensagem";
book.author = "Fernando Pessoa";

console.log(book.title); //Mensagem
console.log(book["author"]); //Fernando Pessoa

// adicionar uma propriedade

book.ano = "1943";

console.log(book); //{ title: 'Mensagem', author: 'Fernando Pessoa', ano: '1943' }

//Métodos

// keys - retorna uma matriz com as propriedades
var keys = Object.keys(book);
console.log(keys);
//[ 'title', 'author', 'ano' ]

//values - retorna uma matriz com os valores
var values = Object.values(book);
console.log(values);
//[ 'Mensagem', 'Fernando Pessoa', '1943' ]

//entries - Retorna uma matriz contendo todos os pares [key, value]
var entries = Object.entries(book);
console.log(entries);
//[
//    [ 'title', 'Mensagem' ],
//    [ 'author', 'Fernando Pessoa' ],
//    [ 'ano', '1943' ]
//  ]

//fromEntries - transforma de matriz com dois valores para objeto
var fromEntries = Object.fromEntries(entries);
console.log(fromEntries);
//{ title: 'Mensagem', author: 'Fernando Pessoa', ano: '1943' }