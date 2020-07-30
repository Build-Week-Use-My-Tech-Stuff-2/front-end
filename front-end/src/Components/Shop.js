import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Styled from 'styled-components'

import Item from './Item'
import SearchBar from './SearchBar'


const initItems = [

]

const initSearch = ""

const StyledGallery = Styled.section`
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  margin: 5% auto 0 auto;
  border: 2px solid #00A699;
  background-color: rgba(72,72,72, .5);
  justify-content: space-between;
`

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
           <SearchBar search={search} reset={loadItems} setItems={setItems} setSearch={setSearch}/>
            <StyledGallery id="gallery">
                {
                items.map( item => {
                    return <Item item={item}/>
                } )
                }
            </StyledGallery> 
        </div>
    )
}
