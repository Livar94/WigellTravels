import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from '../src/components/SignInMap/SignIn';
import Orders from './components/OrdersMapp/Orders';
import AdminWeb from '../src/components/AdministrationsWebb/AdminWeb';
import UserPage from './components/Customer/UserPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}>
        </Route>
        <Route path='/orders' element={<Orders />} />
        <Route path='/adminweb' element={<AdminWeb />} />
        <Route path='/UserPage' element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
