import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import * as yup from 'yup'

import RenterSignUp from './Components/RenterSignup'
import BuyerSignUp from './Components/BuyerSignUp'

function App() {
  return (
    <div className="App">
        <h1> WareShare </h1>

        <nav>
          <Link  to="/">Home</Link>
          <Link to="/renter-signup">Rent Hardware</Link>
          <Link to="/buyer-signup">Share Your Goods</Link>
        </nav>
        {/* Scrolling item gallery? */}
        <Switch>
          <Route path="/buyer-signup">
            <BuyerSignUp />
          </Route>
          <Route path="/renter-signup">
            <RenterSignUp />
          </Route>
          <Route path="/">

          </Route>
        </Switch>
    </div>
  );
}

export default App;
