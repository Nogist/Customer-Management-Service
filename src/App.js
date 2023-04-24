import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import SignIn from './components/Signin/SignIn';
import SignUp from './components/Signup/SignUp';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path= '/' element= {<Home />} />
      <Route path= '/signin' element= {<SignIn />} />
      <Route path= '/signup' element= {<SignUp />} />
    </Routes>
  );
}

export default App;
