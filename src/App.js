import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from '../src/components/SignInMap/SignIn';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<SignIn />}>
        {/* element={signedIn ? <Home /> : <Signin />} */}
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
