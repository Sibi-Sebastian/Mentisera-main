import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'; // <- new component
import './styles/App.css';
import './styles/Navbar.css';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
