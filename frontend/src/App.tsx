import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Layout/NavBar/NavBar';
import Home from './components/Pages/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import { Events } from './components/Pages/Events/Events';
import { Tickets } from './components/Pages/Tickets/Tickets';
import { EventPage } from './components/Pages/Events/EventPage';
import { TicketPage } from './components/Pages/Tickets/TicketPage';
import PageNotFound from './components/Pages/PageNotFound/PageNoutFound';
import RequireAuth from './components/AuthWrapper/RequireAuth';
import MyTickets from './components/Pages/MyTickets/MyTickets';
import Settings from './components/Pages/Settings/Settings';
import Profile from './components/Pages/Profile/Profile';
import SignUp from './components/Pages/SignUp/SignUp';
import Login from './components/Pages/Login/Login';
import FAQ from './components/Pages/FAQ/FAQ';
import About from './components/Pages/About/About';

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
          <Route path='/faq' element={<FAQ/>} />
          <Route path='/about' element={<About/>} />
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
