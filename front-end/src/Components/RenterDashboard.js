import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import Shop from './Shop'

export default function RenterDashboard() {
    return (
        <div>
            <nav>
                <NavLink to="/dashboard/shop">Shop</NavLink>

                {/* rentals */}
                {/* Upgrade*/}
                {/* settings */}
            </nav>

            <Route path="/dashboard/shop"><Shop/></Route>
        </div>
    )
}
