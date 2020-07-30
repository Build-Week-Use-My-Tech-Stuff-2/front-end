import React from "react";
import { Route, NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import axiosWithAuth from '../renter/utils/axiosWithAuth';

export default function Item(props) {
    const { push } = useHistory();
    const item = props.items.find(
      thing => `${thing.id}` === props.match.params.id
    );
  
    if (!props.items.length || !item) {
      return <h2>Loading item data...</h2>;
    }
  
    const handleDelete = e => {
      e.preventDefault();
      axiosWithAuth()
        .delete(`/items/item/${item.id}`)
        .then(res => {
            //set items
            push('/renter-dashboard')
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            {/* Item info */}
            <button
                onClick={() => push(`/update-form/${item.id}`, item)}
            >
                Edit
            </button>
            <button onClick={handleDelete} className="md-button">
                Delete
            </button>
        </div>
    )

}