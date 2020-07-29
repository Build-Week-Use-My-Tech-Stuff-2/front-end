import React from 'react'

export default function SearchBar({search, setSearch}) {

    const onSearchChange = (evt) => {
        const value = evt.target.value
        setSearch(value)
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

            <button>Search</button>
            {/* view all btn */}
        </div>
    )
}
