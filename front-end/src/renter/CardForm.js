import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axiosWithAuth from './utils/axiosWithAuth';
import {MainData} from './context/MainData';

const CardForm = ()=>{
    const {items, setItems}=useContext(MainData);

    console.log('items from cardform', items)
    console.log('whattt is thisssssss: ', setItems)
    const InputStyled= styled.input`
    display:flex;
    text-align:center;
    margin-bottom:10px;
    padding:10px;
`
const initialItem ={
    itemname:'',
    itemdescr:'',
    itemlocat:'',
    itemrate:'',
    itemimg: ''
  }
  const [newItems,setNewItems]=useState(initialItem);

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

  const addNewItem = e =>{
    e.preventDefault();
    axiosWithAuth()
        .post("/items/item", newItems)
        .then(res=>{
            console.log("add new item for rent: ", res)
            setNewItems(initialItem)
            setItems(res.data)
        })
        .catch(err=>console.log('omg this sucks what now?? .. ', err))
}

    const handleChange = e =>{
        setNewItems({...newItems,[e.target.name]: e.target.value })
    }

    {/*add new item using axios*/}
    //FIGURE OUT CONTEXT API
    const postItem = newItem => {
        axiosWithAuth.
            post('items/item', newItem)
            .then(res => {
                // setItems({
                //     ...items,
                //     newItem
                // })
            })
            .catch(err => {
                console.log('Post error:', err)
            })
    }



    {/*add new item using axios*/}
   
    return(
        <div>
            <h1>Rent Your item!</h1>
            <button onClick={promoteToLender}>Become a Lender!</button>
            <form onSubmit={addNewItem} style={{display:'flex', flexDirection:'column', width:'400px', margin:'0 auto'}}>
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
           
            <Link to="/renterlogin">signout</Link>
        </div>
    )
}
export default CardForm;