import React from 'react';
import Home from "./page/home";
import './App.css';
import NavBar from "./components/navbar";
import MoreInfo from './page/moreInfo';
import ContactUs from './page/contactUs';
import AboutUs from './page/aboutUs';

function App() {
  return (
    <>
      <NavBar />
      {/* <MoreInfo /> */}
      {/* <ContactUs /> */}
      <AboutUs />
    </>

  );
}

export default App;
