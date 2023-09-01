import { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './index.css';

function App() {
  // const title = 'Welcome to our party';

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Home />
        {/* <div>
          <Home1 />
        </div> */}
      </div>
    </>
  );
}

export default App;
