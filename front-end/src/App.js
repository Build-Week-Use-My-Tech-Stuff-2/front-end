import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Link, Switch, NavLink} from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'
import SignUp from './Components/SignUp'
import CardForm from './renter/CardForm'
import Login from './Components/Login'
import Item from './Components/Item'
import formSchema from './Components/Validation/formSchema'
import RenterLogin from './renter/RenterLogin';
import CreateForm from './renter/CreateForm';
import axiosWithAuth from './renter/utils/axiosWithAuth';
import {MainData} from './renter/context/MainData';
import {RenterData} from './renter/context/RenterData';
import RenterDashboard from './Components/RenterDashboard';
import {LinkSpan, AppNav, AppDiv} from './Components/StyledSubComponents'
import CardList from './renter/CardList';


function App() {

/////CONTEXT API/////
{/*this is where the dummy data lives & renters data*/}

//this is main data
const [item, setItems]= useState([]);
  useEffect(()=>{
    axiosWithAuth()
    .get("/items/items")
      .then(res=>{
        console.log('itemlistttttttt: ', res.data)
        setItems(res.data)
      })
  },[])


///// END OF CONTEXT API/////

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
};

const initialDisabled = true;

//////////// STATES ////////////
const [forms, setForms] = useState(initialForm);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [disabled, setDisabled] = useState(initialDisabled);

//////////// NETWORK HELPERS ////////////
const postReq = (values) => {
  axios.post("http://keg8893.herokuapp.com/createnewuser/", values)
  .then(res => {
    localStorage.setItem("token", res.data.payload)})
  
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
//////////// SIDE EFFECTS ////////////
useEffect(() => {
  formSchema.isValid(forms)
    .then(valid => {
    setDisabled(!valid)
})
}, [forms])

  return (
    <MainData.Provider value={{item, setItems}}>
      <RenterData.Provider>
      <AppDiv>
        {/* Scrolling item gallery? */}
        <Switch>
          

          <Route path="/dashboard">
              <RenterDashboard/>
          </Route>  
        
          <Route path={["/", "/login", "/signup"]}>
              <h1> WareShare </h1>
              <AppNav>
                  <LinkSpan><Link style={{ textDecoration: 'none', color:'white', fontWeight: "900" }} to="/">Home</Link></LinkSpan>
                  <LinkSpan><Link style={{ textDecoration: 'none', color:'white', fontWeight: "900"  }} to="/signup">Sign Up</Link></LinkSpan>
                  <LinkSpan><Link style={{ textDecoration: 'none', color:'white', fontWeight: "900"  }} to="/login">Login</Link></LinkSpan>
                  <LinkSpan><Link style={{ textDecoration: 'none', color:'white', fontWeight: "900"  }} to="/card">Login</Link></LinkSpan>
              </AppNav>
              <Route exact path="/renterlogin">
                <RenterLogin />
              </Route>
              <Route exact path="/createform">
                <CreateForm />
              </Route>
            <Route exact path="/cardform">
              <CardForm />
            </Route>
            <Route exact path="/cardlist">
              <CardList />
            </Route>
                  <Route path="/signup">
                      <SignUp disabled={disabled} formErrors={formErrors} submit={submitNewUser} inputChange={inputChange} forms={forms}/>
                  </Route>

                  <Route path="/login">
                      <Login formErrors={formErrors} setFormErrors={setFormErrors} />
                  </Route>
                  
          </Route>

        </Switch>

      </AppDiv>
      </RenterData.Provider>
    </MainData.Provider>
  
  );
}

export default App;
