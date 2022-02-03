/*
// Nota de aprovação.
const nota = 50;

if ( nota >= 80) {
  console.log( "parabéns voçê foi aprovado!")
}

else if( nota<80 && nota >= 60) {
  console.log("você esta na fila de espera!")
}

else {
  console.log("voce foi reprovado")
}

// operador AND &&.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

const comida = 'pão na chapa';
const bebida = 'cafézinho';

if (bebida === 'café' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}
//
const conditionOne = true;
const conditionTwo = true;

console.log(conditionOne && conditionTwo);
// Exercicio AND.
const currentHour = 15;
let message = '';

if(currentHour >= 20){
  message = 'não devemos comer nada, hora dde dormir'
}
if(currentHour >= 18 && currentHour < 22) {
  message = 'vamos jantar!';
}
if(currentHour >= 14 && currentHour < 18 ){
  message = 'café da tarde'
}
if(currentHour >= 11 && currentHour < 14){
  message = 'hora do almoço'
}
if(currentHour >= 4 &&currentHour < 11){
  message = 'café da manhã';
}

console.log(message);

//Operador OR | 
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// atividade usando comparação.
let weekDay = 'quarta feira';

if(weekDay == 'segunda feira'){
  console.log('dia de aprendizado na trybe')
}

if(weekDay == 'terça feira'){
  console.log('dia de aprendizado na trybe')
}

if(weekDay == 'quarta feira'){
  console.log('dia de aprendizado na trybe')
}

if(weekDay == 'quinta feira'){
  console.log('dia de aprendizado na trybe')
}

if(weekDay == 'sexta feira'){
  console.log('dia de aprendizado na trybe')
}
else if(weekDay == 'sabado'){
  console.log('descanso')
}
else if(weekDay == 'domingo'){
  console.log('descanso 2')
}
// atividade usando OR ||
let weekDay = 'domingo';

if(weekDay === 'segunda feira' || weekDay === 'terça feira' || weekDay === 'quarta feira' || weekDay === 'quinta feira' || weekDay === 'sexta feira'){
  console.log('dia de aprendizado na trybe');
}else{
  console.log('descanso')
}


// Operador NOT !
const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
*/


