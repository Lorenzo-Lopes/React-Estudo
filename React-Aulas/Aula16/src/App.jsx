import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Empresa from './Pages/Empresa';
import Contato from './Pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <NavBar/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/empresa' Component={Empresa}/>
        <Route path='/contato' Component={Contato}/>
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
