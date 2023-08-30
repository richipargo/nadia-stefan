import { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/home';
import './index.css';

function App() {
  // const title = 'Welcome to our party';

  return (
    <>
      <div>
        <Navbar />
        {/* <div>
          <Home />
        </div> */}
      </div>
    </>
  );
}

export default App;
