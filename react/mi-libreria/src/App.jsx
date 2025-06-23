import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Ficcion from './pages/Ficcion';
import Poesia from './pages/Poesia';
import Historia from './pages/Historia';
import Infantil from './pages/Infantil';
import Contacto from './pages/Contacto';
import Registro from './pages/Registro';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ficcion" element={<Ficcion />} />
        <Route path="/poesia" element={<Poesia />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/infantil" element={<Infantil />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
