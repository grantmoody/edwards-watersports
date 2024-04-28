import React from 'react';
import Home from "./page/home";
import './App.css';
import NavBar from "./components/navbar";
import MoreInfo from './page/moreInfo';
import ContactUs from './page/contactUs';

function App() {
  return (
    <>
      <NavBar />
      {/* <MoreInfo /> */}
      <ContactUs />
    </>

  );
}

export default App;
