import React from 'react'
import axios from 'axios'

export default function SearchBar({setItems, reset, search, setSearch}) {

    const onSearchChange = (evt) => {
        const value = evt.target.value
        setSearch(value)
    }

    const onSearchSubmit = () => {
        axios.get(`http://keg8893.herokuapp.com/items/item/name/like/${search}`)
        .then( res => {
            setItems( res.data )
        }
        )
    }

    const resetItems = () => {
        reset()
    }
    return (
        <div>
            <input
                type="text"
                name="search"
                placeholder="Search for tech goodies"
                onChange={onSearchChange}
                value={search}
            ></input>

            <button onClick={onSearchSubmit}>Search</button>
            <button onClick={resetItems}>Display All</button>
        </div>
    )
}
