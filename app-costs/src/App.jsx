import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import NavBar from './components/NavBar';
import Container from './components/layout/Container';


function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/company' Component={Company}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/newproject' Component={NewProject}/>
        </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  );
}

export default App;
