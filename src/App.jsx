import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Boda from './components/Boda';
import Hospedaje from './components/Hospedaje';
import Mesa from './components/Mesa';
import Rsvp from './components/Rsvp';
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
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/boda">
              <Boda />
            </Route>
            <Route exact path="/hospedaje">
              <Hospedaje />
            </Route>
            <Route exact path="/mesa-regalos">
              <Mesa />
            </Route>
            <Route exact path="/rsvp">
              <Rsvp />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
