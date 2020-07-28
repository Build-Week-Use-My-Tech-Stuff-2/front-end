import React, { useState } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const CardForm = ()=>{

    const InputStyled= styled.input`
    display:flex;
    text-align:center;
    margin-bottom:10px;
    padding:10px;
`

    const initialItem ={
        itemname:'',
        itemdesc:'',
        itemlocat:'',
        itemrate:'',
        itemimg: ''
    }
    {/*this is where the dummy data lives */}
    const [items, setItems]= useState([]);

    const [newItems,setNewItems]=useState(initialItem);

    {/*useEffect to get /items */}

    const handleChange = e =>{
        setNewItems({...newItems,[e.target.name]: e.target.value })
    }

    {/*add new item using axios*/}

    return(
        <div>
            <h1>Rent Your item!</h1>
            <form style={{display:'flex', flexDirection:'column', width:'400px', margin:'0 auto'}}>
                <InputStyled
                    placeholder='Item Name'
                    onChange={handleChange}
                    value={newItems.itemname}
                    name="itemname"
                    type="text"
                />
                <InputStyled 
                    placeholder='description'
                    onChange={handleChange}
                    value={newItems.itemdesc}
                    name="itemdesc"
                    type="text"
                />
                <InputStyled 
                    placeholder='price per hour'
                    onChange={handleChange}
                    value={newItems.itemrate}
                    name="itemrate"
                    type="number"
                />
                <InputStyled 
                    placeholder='location'
                    onChange={handleChange}
                    value={newItems.itemlocat}
                    name="itemlocat"
                    type="text"
                />
                <InputStyled 
                    placeholder='image link'
                    onChange={handleChange}
                    value={newItems.itemimg}
                    name="itemimg"
                    type="url"
                />
                <button style={{width:'100px', margin:'0 auto'}}>Add Item</button>
            </form>
            <div>
                Where the cardlist will be
            </div> 
            <Link to="/renterlogin">signout</Link>
        </div>
    )
}
export default CardForm;