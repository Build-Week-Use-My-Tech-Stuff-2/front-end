import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import Shop from './Shop'



export default function RenterDashboard() {
    return (
        <div>
           <h1> WareShare Dashboard</h1>
            <div id="dash-nav-bar"  style={{display: 'flex', margin: '0 auto', width: '30%'}}>
              <NavLink activeStyle={{backgroundColor: 'white',  borderRadius: "3px",}} style={{width: '50%'}} to="/dashboard/shop">Shop</NavLink>
              <NavLink activeStyle={{backgroundColor: 'white'}} style={{width: '50%'}} to="/dashboard/upgrade">Upgrade</NavLink>
              {/* <LinkSpan><Link style={{ textDecoration: 'none', color:'white', fontWeight: "900"  }} to="/login">Something else</Link></LinkSpan> */}
              </div>

            <Route path="/dashboard/shop">
                <Shop />
            </Route>
        </div>
    )
}
