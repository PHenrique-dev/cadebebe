import './App.css';
import Navbar from './Components/Navbar';
import MenuBottom from './Components/MenuBottom';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
import Catalogo from './Pages/Catalogo'
import Resultado from './Pages/Resultado'

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Navbar />
          <MenuBottom />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/contato' element={<Contato />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/results' element={<Resultado />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
