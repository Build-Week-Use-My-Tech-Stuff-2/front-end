import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import BuyerSignUp from './Components/BuyerSignUp'
import RenterSignUp from './Components/RenterSignUp'

function App() {
//////////// INITIAL STATES ////////////
const initialForm = {
  username: '',
  password: ''
};

const initialFormErrors = {
  username: '',
  password: ''
};

//////////// INITIAL STATES ////////////
const [forms, setForms] = useState(initialForm);
const [formErrors, setFormErrors] = useState(initialFormErrors);

//////////// FORM ACTIONS ////////////
const inputChange = (name, value) => {
  setForms({
    ...forms,
    [name]: value
  })
}

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
            <BuyerSignUp inputChange={inputChange} forms={forms}/>
          </Route>
          <Route path="/renter-signup">
            <RenterSignUp inputChange={inputChange} forms={forms}/>
          </Route>
          <Route path="/">

          </Route>
        </Switch>
    </div>
  );
}

export default App;
