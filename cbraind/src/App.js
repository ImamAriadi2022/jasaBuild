import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Jasa from './components/Jasa'; 
import Portfolio from './components/Portfolio';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Metode from './components/Metode';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About />
      <Jasa />
      <Portfolio />
      <Metode />
      <Footer />
    </div>
  );
}

export default App;
