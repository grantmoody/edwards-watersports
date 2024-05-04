import Home from "./page/home";
import './App.css';
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
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
