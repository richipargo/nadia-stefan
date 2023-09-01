import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Home from './components/Home';
import Footer from './components/Footer';
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
        <Footer />
      </div>
    </>
  );
}

export default App;
