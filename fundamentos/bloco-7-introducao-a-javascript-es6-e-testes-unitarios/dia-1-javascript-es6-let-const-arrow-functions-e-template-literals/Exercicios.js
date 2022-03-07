// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
 
// }

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sorted = oddsAndEvens.sort((a,b) => {
  if(a < b) return -1;
  if(a > b) return 1;
  return 0;
});


console.log(sorted); 

//Parte 2!

const fatorial = (x) => {
  if (x ==0){
    return 1;
  } else {
    return x * fatorial(x - 1);
  }
}

let num = 4;
 if(num > 0){
   let resultado = fatorial(num);
   console.log(resultado);
 }
 


 const starships = {
  option1: "Tardis",
  option2: "Millennium Falcon",
  option3: "Enterprise",
  option4: "Heart of Gold"
}

Object.values(starships);