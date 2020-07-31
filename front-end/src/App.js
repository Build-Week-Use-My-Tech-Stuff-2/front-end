import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Link, NavLink} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CardForm from './renter/CardForm'
import RenterLogin from './renter/RenterLogin';
import CreateForm from './renter/CreateForm';
import axiosWithAuth from './renter/utils/axiosWithAuth';
import {MainData} from './renter/context/MainData';
import {RenterData} from './renter/context/RenterData';
import {LinkSpan, AppNav, AppDiv} from './Components/StyledSubComponents';
import CardList from './renter/CardList';
import PrivateRoute from './Components/PrivateRoute';
import {useHistory} from 'react-router-dom';


function App() {

/////CONTEXT API/////
{/*this is where the dummy data lives */}
const [items, setItems]= useState([]);
const [role, setRole] = useState();

useEffect(()=>{
  axiosWithAuth()
  .get("/items/items")
    .then(res=>{
      console.log('itemlistttttttt: ', res.data)
      setItems(res.data)
    })
},[])

//Role setting
useEffect(() => {
  axiosWithAuth()
      .get('/users/getuserinfo')
      .then(res => {
          console.log('this lives on app.js: ', res)
          //set state of role
      })
      .catch(err => console.log('error', err))
})



///// END OF CONTEXT API/////
  return (
    <MainData.Provider value={{items,setItems}}>
      <RenterData.Provider value={{role,setRole}}>
      <AppDiv>
          <Router>
            <Route exact path="/" component={RenterLogin} />
              
            <PrivateRoute exact path="/cardlist" component={CardList}/>
              
            <Route exact path="/cardform">
              <CardForm />
            </Route>
            <Route exact path="/createform">
              <CreateForm />
            </Route>
          </Router>
      </AppDiv>
      </RenterData.Provider>
    </MainData.Provider>
  
  );
}

export default App;
