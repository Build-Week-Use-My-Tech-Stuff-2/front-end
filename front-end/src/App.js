import React, { useState } from 'react';
import './App.css';
import { Route, Link, Switch} from 'react-router-dom'
import * as yup from 'yup'

import RenterSignUp from './Components/RenterSignup'
import BuyerSignUp from './Components/BuyerSignUp'
<<<<<<< HEAD
import CardForm from './renter/CardForm';
=======
import RenterSignUp from './Components/RenterSignUp'
import CardForm from './renter/CardForm'
import Item from './Components/Item'
import formSchema from './Components/Validation/formSchema'
import * as yup from 'yup'
>>>>>>> 13c006c61a0b16ad1caa6eb04773fee81aa8d43b

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
            <BuyerSignUp formErrors={formErrors} inputChange={inputChange} forms={forms}/>
          </Route>
          <Route path="/renter-signup">
            <RenterSignUp formErrors={formErrors} inputChange={inputChange} forms={forms}/>
          </Route>
          <Route path="/">
            <Item />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
