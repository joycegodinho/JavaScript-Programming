// significa unpacking valores individuais de estruturas de data e atribuidos a outras variaveis
// pode ser aplicado a objects e arrays

//array
// antes 

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

// destructuring

var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];

console.log(apple, apple2);
console.log(tomato2);

// objetos 
//antes 

var obj = {
    name: 'Joyce'
};

var name2 = obj.name;

// destructuring

var { name: name2 } = obj; //{propriedade: nomeAtribuido}

console.log(name2);