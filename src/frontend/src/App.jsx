import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.css';
import Landing from './pages/landing';
import Login from './pages/login';
import SignIn from './pages/signin';

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/landing" />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
    </Router>
  )
}

export default App
