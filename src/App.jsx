import { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Home from './components/home';
import './index.css';

function App() {
  // const title = 'Welcome to our party';

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div>
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
