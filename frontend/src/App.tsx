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
import RequireAuth from './components/AuthRequired/RequireAuth';
import MyTickets from './components/MyTickets/MyTickets';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';

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
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route element={<RequireAuth/>}>
              <Route path="/mytickets" element={<MyTickets/>} />
              <Route path="/settings" element={<Settings/>} />
              <Route path="/profile" element={<Profile/>} />
          </Route>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer />
      </main>
  );
}

export default App;
