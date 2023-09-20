import "./App.css";
import React from "react";
import MainComponent from "./components/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/Menu/Assets/Pages/About';
import Free from './components/Menu/Assets/Pages/Sample';
import Pricing from './components/Menu/Assets/Pages/Pricing';
import Web from "./components/Menu/Assets/Pages/Web";
import Moodle from "./components/Menu/Assets/Pages/Moodle";
import Odoo from "./components/Menu/Assets/Pages/Odoo";
import Mobile from "./components/Menu/Assets/Pages/Mobile";
import Freelancer from "./components/Menu/Assets/Pages/Freelancer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index  path="/" element={<MainComponent />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sample" element={<Free />} />
        <Route path="/Pricing" element={<Pricing/>} />
        <Route path="/Free-consultation" element={<Free/>} />
        <Route path="/Web" element={<Web/>} />
        <Route path="/Moodle" element={<Moodle/>}/>
        <Route path="/Odoo" element={<Odoo/>}/>
        <Route path="/Mobile" element={<Mobile/>}/>
        <Route path="/Freelancer" element={<Freelancer/>}/>
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
