import React from 'react';

ex[prt default function RenterDashboard(props){
    function routeToItem(ev, item) {
        ev.preventDefault();
        props.history.push(`/renter-dashboard/${item.id}`);
    }

    return(
        <div>
            <h1>Name: {props.user.name}</h1>
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