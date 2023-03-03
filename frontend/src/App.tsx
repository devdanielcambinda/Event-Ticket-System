import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Events } from './components/Events/Events';
import { Tickets } from './components/Tickets/Tickets';
import { EventPage } from './components/Events/EventPage';
import { TicketPage } from './components/Tickets/TicketPage';
import PageNotFound from './components/PageNotFound/PageNoutFound';

const App:React.FC = () => {
  return (
      <main className="main-content">
        <NavBar />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/events">
              <Route index element={<Events/>} />
              <Route path=":id" element={<EventPage/>} />
          </Route>
          <Route path="/tickets">
              <Route index element={<Tickets/>} />
              <Route path=":id" element={<TicketPage/>} />
          </Route>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer />
      </main>
  );
}

export default App;
