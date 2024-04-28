import React from 'react';
import Home from "./page/home";
import NavBar from "./components/navbar";
import './App.css';
import MoreInfo from './page/moreInfo';
import ContactUs from './page/contactUs';
import AboutUs from './page/aboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<MoreInfo />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
