import { useState } from 'react';
import Navbar from './components/Navbar';

import Home from './components/Home';
import Home1 from './components/Home1';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';

function App() {
  // const title = 'Welcome to our party';

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        {/* <Hero /> */}
        {/* <div>
          <Home1 />
        </div> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
