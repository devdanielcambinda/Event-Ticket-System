import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

const App:React.FC = () => {
  return (
      <main className="main-content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
  );
}

export default App;
