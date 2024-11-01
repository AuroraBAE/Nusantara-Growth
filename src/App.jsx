import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Artikel from './pages/Artikel'

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        
        <div className="container mx-auto px-8 mt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artikel" element={<Artikel />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
