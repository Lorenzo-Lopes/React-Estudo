import './App.css';
import HelloWorld from './components/HelloWorld';
import Soma from './components/Soma';

function App() {
  const nome = 'Lorenzo Lopes Costa'
  function soma(a,b){
    return a+b;
  }
  const agorasim = 'jsx>js'
  const url="https://via.placeholder.com/190x150"
  return (
      <div className='App'>

        <h1>{nome}</h1>
        <p>Soma Local: {soma(2,4)}</p>
        <p>{agorasim}</p>
        <img src={url} alt="Minha img"/>
        <HelloWorld/>
        <p>Soma importada: {Soma(9,4)}</p>
       

      </div>
  );
}

export default App;
