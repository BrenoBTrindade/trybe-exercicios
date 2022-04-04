import React, {Component} from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {
    return conteudos.map((element) => <ul>
      <li>o conteudo é: {element.conteudo}</li>
      <li>Status:{element.status}</li>
      <li>Bloco: {element.bloco}</li>
    </ul>  )
  }
}

export default Content;