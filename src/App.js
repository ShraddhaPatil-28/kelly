import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homes from './Components/Homes';
import About from './Components/About';
import Container from 'react-bootstrap/esm/Container';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Navbars from './Components/Navbars';
import Portfolio from './Components/Portfolio';


function App() {
  return (
    <BrowserRouter>
      <Navbars />
      
         
        
      <Routes>
        <Route path='/' element={<Homes />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/Portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer/> 
    </BrowserRouter>
  );
}

export default App;
