// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palimdromo(str){
  reverso = str.split('').reverse().join('');
  return str === reverso;
}

console.log(palimdromo('arara'));

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .

function indiceMaior(numeros){
  let maior = 0;
  for(let indice in numeros){
    if(numeros[maior] < numeros[indice]) {
      maior = indice;
    }
  }
  return maior;
}
console.log(indiceMaior([2, 3, 6, 7, 10, 1]));


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .

function indiceMenor(numeros){
  let menor = 0;
  for(let indice in numeros){
    if(numeros[menor] > numeros[indice]) {
      menor = indice;
    }
  }
  return menor;
}
console.log(indiceMenor([2, 4, 6, 7, 10, 0, -3]));