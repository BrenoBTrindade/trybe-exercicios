import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromisso = ['comer', 'treinar', 'dormir', 'estudar']
  return compromisso.map((element) => Task(element))
}

export default App;
