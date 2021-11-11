import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact/>
          <Route path='/services'  />
          <Route path='/products' />
          <Route path='/sign-up' />
        </Routes>
      </Router>
    </>
  );
}

export default App;

