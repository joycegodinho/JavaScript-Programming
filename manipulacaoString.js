// manipulação strings

const testSize = 'Texto'.length;
console.log(`Quantidade de letras: ${testSize}`);
//Quantidade de letras: 5

const splittedText = 'Texto'.split('x'); // retorno é um array
console.log('\nArray com o texto separado: ', splittedText);
//Array com o texto separado:  [ 'Te', 'to' ]

const replacedText = 'Texto'.replace('Text', 'texT');
console.log(`\nTexto substituído: ${replacedText}`);
//Quantidade de letras: 5

const lastChar = 'Texto'.slice(-1);
console.log(`\nÚltima letra: ${lastChar}`);
//Texto substituído: texTo

const allWithoutlastChar = 'Texto'.slice(0, -1); //(começo, fim)
console.log(`\nString sem a última letra: ${allWithoutlastChar}`);
//Última letra: o

const secondToEnd = 'Texto'.slice(1);
console.log(`\nDa segunda letra até a última: ${secondToEnd}`);
//Da segunda letra até a última: exto

const twoFirstChar = 'Texto'.substr(0, 2); //(começo, posições)
console.log(`\nDuas primeiras letras: ${twoFirstChar}`);
//Duas primeiras letras: Te