import React from 'react';
import Home from "./page/home";
import NavBar from "./components/navbar";
import './App.css';
import MoreInfo from './page/moreInfo';
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/More Info" element={<MoreInfo />} />
      </Routes>

    </div>

  );
}

export default App;
