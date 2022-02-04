// Exercicios Conteudo
// Array
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(tasksList.length);
// 3

let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
tasksList.unshift('acordar');// adiciona uma tarefa no inicio do array
console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

tasksList.pop();  // remove a última tarefa (.shift apaga a primeira tarefa)
console.log(tasksList);
// [ 'fazer exercicios da trybe' ]

let indexOftask = tasksList.indexOf('Reunião');
console.log(indexOftask);

//Exercicio Array.

//Exercicio 1.
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);
// [ 'serviços´]

//Exercicio 2.
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);
// 2

//Exercicio 3.
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato')
console.log(menu);
// [ 'Home', 'Serviços', 'Portfólio', 'Links', 'Contato' ]

// Exercicios For

//Exericicio Video
var numero =9;

for(var contador =1; contador <=9 ; contador++){

  console.log(numero * contador);
  //9 18 27 36 45 54 63 72 81
}

//Exercicio for e array;
var listaDeNomes = ['joana', 'Maria',  'lucas'];

for(var indice = 0; indice < listaDeNomes.length; indice += 1) {
  var mensagem = 'Boas vindas, ' + listaDeNomes[indice] + '!';
  console.log(mensagem);
}

//Exercicio 2
let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
  // saab
  //Volvo
  // BMW
}

// exercicio 3
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index =0; index < groceryList.length; index += 1){
  console.log(groceryList[index]);
}

// Ecercicios For/of

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5


let word = 'Hello';
for (let palavras of word) {
  console.log(palavras);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

//Soma Valores
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
// 11
// 21
// 31
console.log(arrOfNumbers);
// Resultado: [10, 20, 30]

//Exercicio 1

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nomes of names){
  console.log(nomes);
  // Resultado: João
  //Maria
  //Antônio
  //Margarida

}
//

// Exercicios dia 4.2
// Exercicio 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let index=0;

for( index = 0; index <numbers.length  ; index +=1){
  console.log(numbers[index]);
  // Resultado : 5
  // 9
  // 3
  // 19
  // 70
  // 8
  // 100
  // 2
  // 35
  // 27
}
// Exercicio 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado=0;

for( index = 0; index < numbers.length  ; index +=1){
  resultado += numbers[index];
}
console.log(resultado);
// Resultado: 278

//Exercicio 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado=0;

for( index = 0; index < numbers.length  ; index +=1){
  resultado += numbers[index]/9;
}
console.log(resultado);

// Exercicio 4
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado=0;

for( index = 0; index < numbers.length  ; index +=1){
  resultado += numbers[index]/9;
}
if (resultado > 20){
  console.log('valor maior que 20');
}else{
  console.log('valor menor ou igual a 20');
}
console.log(resultado);


// Exercicio 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 0;

for (index =0 ; index < numbers.length; index +=1){
  if(numbers[index] > maiorValor){
    maiorValor = numbers[index];
  }
}
console.log(maiorValor);


// Exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar =0 ;

for(index=0; index < numbers.length; index +=1){
  if(numbers [index]%2 == 1){
    impar +=1;
  }
}
if( impar ===0){
  console.log('nenhum valor encontrado');
}else{
  console.log(impar);
}


// Exercicio 7

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];

for (index =0 ; index < numbers.length; index +=1){
  if(numbers[index] < menorValor){
    menorValor = numbers[index];
  }
}
console.log(menorValor);


// Exercicio 8
let array = []

for( i=0; i <=25; i+=1){
  array.push(i);
console.log(array[i]/2);
}
console.log(array);
