import Home from "./page/home";
import './App.css';
import AboutUs from './page/aboutUs';
import ContactUs from './page/contactUs';
import FAQ from './page/commonQuestions';
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
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
