import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = 'Bonny'
  const pessoa ={
    nome:'Lorenzo',
    idade:25,
    profissao:'Programador',
    foto:"https://via.placeholder.com/150x150"
  }
  
  return (
      <div className='App'>
        <HelloWorld/>
        <SayMyName nome = 'lorenzo'/>
        <SayMyName nome = 'joao'/>
        <SayMyName nome = {nome}/>
        <p>{Pessoa(pessoa)}</p>
      </div>
  );
}

export default App;
