/*
// Exercicio 1
const a = 20;
const b = 30;
// Adição
console.log(a+b);

//Subtração
console.log(a-b);

//Multiplicação
console.log(a*b);

//Divisão
console.log(a/b);

//Módulo
console.log(b%a);


// Exercicio 2
const num1 = 10;
const num2 = 15;

if( num1>num2){
  console.log(num1);
}
else if( num2>num1){
  console.log(num2);
}


// Exercicio3

const num1 = 30;
const num2 = 20;
const num3 = 15;

if( num1 > num2 && num1 > num3 ){
  console.log(num1);
}
else if(num2 > num1 && num2 > num3){
  console.log(num2);
}
else if(num3 > num2 && num3 > num1){
  console.log(num3);
}

// Exercicio 4.

const valor = 10 ;
if(valor > 0){
  console.log('positive')
}
else if(valor  < 0){
  console.log('negative')
}
else if(valor = 0){
  console.log('zero');
}


// Exercicio 5.
const angulo1 = 80;
const angulo2 = 40;
const angulo3 = 80;

const triangulo = angulo1 + angulo2 + angulo3;

if (triangulo === 180){
  console.log(true)
}
else if (angulo1 < 0 && angulo2< 0 && angulo3 < 0) {
  console.log('Angulo invalido');
}

else{
  console.log(false);
} 


// Exercicio 6.
const peça ='Peão';

switch(peça){
  case 'Peão':
    console.log('os peões se movem somente para frente, uma casa por vez.')
    break;

  case 'Bispo':
    console.log('O Bispo que iniciar a partida em uma casa O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas')
    break;
  
  case 'Torre':
    console.log('A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça.')
    break;
  case 'Cavalo':
    console.log('O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto.')  
    break;
  case 'Rainha':
    console.log('A rainha é considerada a peça mais poderosa do tabuleiro. Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente. A rainha se move como a torre e o bispo combinados.')
    break;
  case 'Rei':
    console.log('O rei pode se mover para qualquer casa adjacente.')  
    break;
    default:
    console.log('peça invalida')
    break;
 
}
 */

 const nota = 40;

 if( nota < 0 && nota > 100){
   console.log('Nota Invalida')
 }
 else if(nota >= 100){
  console.log('Nota A')
 }
 else if(nota >= 80){
  console.log('Nota B')
}
else if(nota >= 70){
  console.log('Nota C')
}
else if(nota >= 60){
  console.log('Nota D')
}
else if(nota >= 50){
  console.log('Nota E')
}
 else if(nota < 50){
   console.log( 'Nota F')
 }


