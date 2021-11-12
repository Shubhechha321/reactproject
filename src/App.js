import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
// import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <HeroSection /> */}
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/services'  />
          <Route path='/products' />
          <Route path='/sign-up' />
        </Routes>
      </Router>
    </>
  );
}

export default App;

