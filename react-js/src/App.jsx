import logo from './logo.svg';
import './App.css';

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
        <p>Soma: {soma(2,4)}</p>
        <p>{agorasim}</p>
        <img src={url} alt="Minha img"/>
      </div>
  );
}

export default App;
