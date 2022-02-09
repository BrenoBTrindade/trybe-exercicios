// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente:'sim',
};

let infotwo= {
  personagem: 'Tio patinhas' ,
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178 ',
  nota: 'O último MacPatinhas',
  recorrente:'sim',
};
 

// console.log('Boas vindas ' + info.personagem)

// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

// for(key in info){
//   console.log(info[key]);
// }

console.log( info.personagem + ' e ' + infotwo.personagem );
console.log(info.origem + ' e ' + infotwo.origem);
console.log(info.nota + ' e ' + infotwo.nota);

if(info.recorrente === infotwo.recorrente){
  console.log('Ambos recorrentes');
}


// Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
    }
  ],
};

console.log('o Livro de '+ leitor.nome + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo)

// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length +' livros Favoritos.')