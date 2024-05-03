import Home from "./page/home";
import NavBar from "./components/navbar";
import './App.css';
import MoreInfo from './page/moreInfo';
import AboutUs from './page/aboutUs';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif !important',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} >
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<MoreInfo />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
