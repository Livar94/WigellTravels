import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from '../src/components/SignInMap/SignIn';
import Orders from './components/OrdersMapp/Orders';
import AdminWeb from '../src/components/AdministrationsWebb/AdminWeb';
// import Destination from '../src/components/Dest/Destination'
// import FlightTickets from './components/Customer/FlightTickets'
// import TicketsData from '../src/components/Tickets/TicketsData'
// import UpdateTicketsList from '../src/components/Tickets/UpdateTicketsList'
import UserPage from './components/Customer/UserPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}>
          {/* Om användaren är inloggad, omdirigera till Orders */}
          {/* <Route path='/' element={<Orders />} /> */}
        </Route>
        {/* Lägg till en separat rutt för att visa Orders */}
        <Route path='/orders' element={<Orders />} />
        <Route path='/adminweb' element={<AdminWeb />} />
        <Route path='/UserPage' element={<UserPage />} />
      </Routes>
      
      
      {/* <Orders />
      <AdminWeb /> */}
      
      
      
      
    </BrowserRouter>
  );
}

export default App;
