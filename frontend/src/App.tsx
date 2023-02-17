import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Events } from './components/Events/Events';
import { Tickets } from './components/Tickets/Tickets';

const App:React.FC = () => {
  return (
      <main className="main-content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
        <Footer />
      </main>
  );
}

export default App;
