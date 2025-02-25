import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Travel from './pages/Travel';
import Contact from './pages/Contact';
import OurWorld from './pages/OurWorld';

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/ourWorld" element={<OurWorld />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
