import './App.css';

import OutraLista from './components/Lista';

function App() {
  const itensLista = ['react', 'vue', 'Angular']
 
  return (
      <div className='App'>
        <h1>Render de Lista</h1>
        < OutraLista itens={itensLista}/>
        < OutraLista itens={[]}/>
      </div>
  );
}

export default App;
