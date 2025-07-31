import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/Homepage';
import Gallery from './components/Gallery';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      <Footer />
    </>  
  );
}

export default App;
