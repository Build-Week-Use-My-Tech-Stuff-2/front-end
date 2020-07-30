import React from 'react';
import axiosWithAuth from '../renter/utils/axiosWithAuth';

export default function RenterDashboard(props){
    function routeToItem(ev, item) {
        ev.preventDefault();
        props.history.push(`/renter-dashboard/${item.id}`);
    }

    function promoteToLender(e){
        axiosWithAuth().
            patch(`/roles/promote`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log('promote error', err)
            })
    }

    return(
        <div>
            <h1>Name: {props.user.name}</h1>
            <button onClick={promoteToLender}>Become a Lender!</button>
            {props.items.map(item => (
                <div
                    onClick={ev => routeToItem(ev, item)}
                    className="item-card"
                    key={item.id}
                >
                <img
                className="item-list-image"
                src={item.imageUrl}
                alt={item.name}
                />
                <p>{item.name}</p>
                <p>${item.price}</p>
            </div>
            ))}
        </div>

    )
}