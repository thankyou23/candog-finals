import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import './Components/LoginForm/LoginForm.css';
import Dashboard from './Components/LoginForm/Dashboard';
import Contact from './Components/LoginForm/Contact'; 
import Portfolio from './Components/Portfolio/Portfolio'; 
import AboutMe from './Components/AboutMe/AboutMe';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/aboutme" element={<AboutMe />}/>
      </Routes>
    </Router>
  );
};

export default App;
