import './App.css';
import Navbar from './Components/Navbar';
import MenuBottom from './Components/MenuBottom'
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MenuBottom/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;