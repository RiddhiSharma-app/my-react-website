import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainMission from './components/sections/MainMission';
import MainCareer from './components/sections/MainCareer';
import MainContact from './components/sections/MainContact';

function App(): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/main-mission" element={<MainMission />} />
        <Route path="/main-career" element={<MainCareer />} />
        <Route path="/main-contact" element={<MainContact />} />
      </Routes>
    </Router>
  );
}

export default App;
