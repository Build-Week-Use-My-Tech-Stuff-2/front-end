import React, { useState } from 'react';
import './App.css';
import { Route, Link, Switch} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'

import RenterSignUp from './Components/RenterSignUp'
import BuyerSignUp from './Components/BuyerSignUp'
import CardForm from './renter/CardForm'
import Item from './Components/Item'
import formSchema from './Components/Validation/formSchema'

function App() {
//////////// INITIAL STATES ////////////
const initialForm = {
  username: '',
  password: '',
  email: ''
  //Location
};

const initialFormErrors = {
  username: '',
  password: '',
  email: ''
 //Location

};

//////////// INITIAL STATES ////////////
const [forms, setForms] = useState(initialForm);
const [formErrors, setFormErrors] = useState(initialFormErrors);

//////////// NETWORK HELPERS ////////////
const postReq = (values) => {
  axios.post("http://keg8893.herokuapp.com/createnewuser/", values)
  .then(res => localStorage.setItem("token", res.data.payload))
  .catch(err => {debugger})
}

//////////// FORM ACTIONS ////////////
const inputChange = (name, value) => {
yup
  .reach(formSchema, name)
  .validate(value)
  .then(valid => {
    setFormErrors({
      ...formErrors,
      [name]: ""
    })
})
  .catch(invalid => {
    setFormErrors({
      ...formErrors,
      [name]: invalid.errors[0]
    })
})

setForms({
    ...forms,
    [name]: value
})
}

const submitNewUser = () => {
  const payload = {
    "username": forms.username,
    "password": forms.password,
    "primaryemail": forms.email,
  }
  postReq(payload)
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
            <BuyerSignUp formErrors={formErrors} submit={submitNewUser} inputChange={inputChange} forms={forms}/>
          </Route>
          <Route path="/renter-signup">
            <RenterSignUp formErrors={formErrors} submit={submitNewUser} inputChange={inputChange} forms={forms}/>
          </Route>
          <Route path="/">
            <Item />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
