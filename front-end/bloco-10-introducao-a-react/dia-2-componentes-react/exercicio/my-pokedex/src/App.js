import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import './index.css'

class App extends React.Component {
render() {
  return (
    <div className="App">
      <h1 className='pokedexh1'> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

}

export default App;
