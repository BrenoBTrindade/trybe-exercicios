// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function adicao(numero1, numero2){
  return numero1 + numero2;
}
 console.log(adicao(5,8));

 function subtracao(numero1, numero2){
   return numero1 - numero2;
 }
 console.log(subtracao(8,20));

 function multiplicacao(numero1, numero2){
   return numero1 * numero2;
 }
 console.log(multiplicacao(5, 6));

 function divisao(numero1, numero2){
   return numero1 / numero2;
 }
console.log(divisao(8, 2));

function modulo(numero1, numero2){
  return numero1 % numero2;
}
console.log(modulo(48, 5));

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

function maiorValor(numero1, numero2){

  if(numero1 > numero2){
    console.log('O maior valor é');
    return numero1
    
  }else{
    console.log('O maior valor é');
    return numero2;
  }
}
console.log(maiorValor(2,3));

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

function maior3(numero1, numero2, numero3){
  if(numero1 > numero2 && numero1 > numero3){
    console.log('O maior valor é');
    return numero1;
  }
  else if(numero2 > numero1 && numero2 > numero3){
    console.log('O maior valor é');
    return numero2;
  }else{
    console.log('O maior valor é');
    return numero3;
    
  }
}
console.log(maior3(5, 3, 2 ));


// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

function teste(numero){
  if(numero > 0){
    console.log('Postive');
    return numero
  }else if(numero < 0){
    console.log('Negative');
    return numero
  }else{
    console.log('zero');
    return numero
  }
}
console.log(teste(0));

// //Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

function areaTriangulo(numero1, numero2, numero3){
  if(numero1 + numero2 + numero3 === 180){
    return true;
  }else{
    console.log('Error!!')
    return false;
  
  }
}
console.log(areaTriangulo(40, 80, 80));