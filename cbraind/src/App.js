import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import HowToOrder from './components/HowToOrder';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About />
      <Portfolio />
      <HowToOrder />
    </div>
  );
}

export default App;
