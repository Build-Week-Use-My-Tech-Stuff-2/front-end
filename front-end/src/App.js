import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import CardForm from './renter/CardForm';
import {MainData} from './renter/context/MainData';
import CreateForm from './renter/CreateForm';
import RenterLogin from './renter/RenterLogin';

function App() {

  
  return (
    <div className="App">
      <h1>Use My Tech APP</h1>
      {/*<Router>
        <Switch>
            <Route exact path='/'>
                <CreateForm />
            </Route>
            <Route exact path='/renterlogin'>
                <RenterLogin />
            </Route>
            <Route exact path="/cardform">
                <CardForm />
            </Route>
        </Switch>
      </Router>
    */}
      
      
    </div>
  );
}

export default App;
