import React, { useState } from 'react';
import './App.css';
import { Route, Link, Switch} from 'react-router-dom'
import * as yup from 'yup'

import RenterSignUp from './Components/RenterSignup'
import BuyerSignUp from './Components/BuyerSignUp'
import CardForm from './renter/CardForm';

function App() {
//////////// INITIAL STATES ////////////
const initialForm = {
  username: '',
  password: ''
  //Location
};

const initialFormErrors = {
  username: '',
  password: ''
 //Location

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
