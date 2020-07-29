import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Item from './Item'
import SearchBar from './SearchBar'

const initItems = [

]

const initSearch = ""

export default function Shop() {
    const [items, setItems] = useState(initItems)
    const [search, setSearch] = useState(initSearch)

///// NETWORK HELPERS /////
const loadItems = () => {
    axios.get("http://keg8893.herokuapp.com/items/items")
    .then( res => {
      console.log(res);
      setItems(res.data)
    })
      .catch( err => {
        debugger
      })

  }

  useEffect( () => {
    loadItems()
  }, []
  )
    return (
        <div>
           <SearchBar search={search} setItems={setItems} setSearch={setSearch}/>
            <section id="gallery">
                {
                items.map( item => {
                    return <Item item={item}/>
                } )
                }
            </section> 
        </div>
    )
}
