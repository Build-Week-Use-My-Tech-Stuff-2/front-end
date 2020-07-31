import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axiosWithAuth from './utils/axiosWithAuth';
import {MainData} from './context/MainData';
import {useHistory} from 'react-router-dom'
import {LinkSpan, AppNav} from '../Components/StyledSubComponents';
const CardForm = ()=>{
    const setItems=useContext(MainData);
    const items = useContext(MainData);
    const {push}= useHistory();



    const initialItem ={
        isavailable: true,
        itemtype: '',
        itemname:'',
        itemdescr:'',
        itemlocat:'',
        itemrate:0,
        itemimg: ''
    }

    
    const [newItems,setNewItems]=useState(initialItem);
    const [userInfo, setUserInfo] = useState({items:[]})
    const [editing, setEditing] = useState(false);
    const [itemToEdit, setItemToEdit] = useState(initialItem);
    console.log('whagddjffdhfosdfhkjfdhsjkfhsdjkfhdfjdhf ', userInfo)
    const editItem = item => {
        setEditing(true)
        setItemToEdit(item)
    }
    const handleEditChange = e =>{
        setItemToEdit({...itemToEdit,[e.target.name]: e.target.value })
    }
    const handleChange = e =>{
        setNewItems({...newItems,[e.target.name]: e.target.value })
    }

    useEffect(()=>{
        getUserInfo();
    },[])



    const deleteItem = item => {
        //e.preventDefault();
        axiosWithAuth()
          .delete(`/items/item/${item.itemid}`)
          .then(res => {
              getUserInfo();
          })
          .catch(err => console.log(err));
    };
    const saveEdit = e => {
        e.preventDefault();
        console.log(itemToEdit)
        // Make a put request to save your updated color
        // think about where will you get the id from...
        // where is is saved right now?
        axiosWithAuth()
          .patch(`/items/item/${itemToEdit.itemid}`, itemToEdit)
          .then(res => {
            getUserInfo();
          })
          .catch(err => console.log(err));
    };

  const addNewItem = e =>{
    e.preventDefault();
    console.log('new items formms??', newItems)
    axiosWithAuth()
        .post("/items/item", newItems)
        .then(res=>{
            console.log("add new item for rent: ", res)
            window.location.reload()
            setItems(res.data)
            setNewItems(initialItem)
            getUserInfo();
        })
        .catch(err=>console.log('omg this sucks what now?? .. ', err))
}
    function promoteToLender(e){
        axiosWithAuth()
            .patch(`/roles/promote`, {})
            .then(res => {
                console.log('promote',res)
            })
            .catch(err => {
                console.log('promote error', err)
            })
    }
    //get user info
    function getUserInfo(){
        axiosWithAuth()
            .get('/users/getuserinfo')
            .then(res => {
                console.log('User Info:', res)
                setUserInfo(res.data)
            })
            .catch(err => console.log('Get User Info error', err))
    }
    
    const logOut= ()=>{
    localStorage.removeItem("token");
    push('/app')
    }
    return(
        <div>
            <AppNav style={{marginBottom:'20px'}}>
            <LinkSpan><Link style={{ textDecoration: 'none', color:'white', fontWeight: "900"  }} to="/cardform">DashBoard</Link></LinkSpan>
            <LinkSpan><Link onClick={logOut} style={{ textDecoration: 'none', color:'white', fontWeight: "900"  }}>Sign out</Link></LinkSpan>
            <LinkSpan><Link style={{ textDecoration: 'none', color:'white', fontWeight: "900"  }} to="/cardlist">Shop</Link></LinkSpan>
        </AppNav>
            <h2>Your email is: {userInfo.primaryemail}</h2>
            <h2>Rent Your item {userInfo.username} !</h2>
            <h2>Your Total Rent Items: {userInfo.items.length}</h2>
    <button style={{marginBottom:'10px'}} onClick={promoteToLender}>Become a Lender!{}</button>
            <form onSubmit={addNewItem} style={{display:'flex', flexDirection:'column', width:'400px', margin:'0 auto'}}>
                <input
                    placeholder='Item Name'
                    onChange={handleChange}
                    value={newItems.itemname}
                    name="itemname"
                    type="text"
                />
                <input 
                    placeholder='description'
                    onChange={handleChange}
                    value={newItems.itemdesc}
                    name="itemdescr"
                    type="text"
                />
                <input 
                    placeholder='price per hour'
                    onChange={handleChange}
                    value={newItems.itemrate}
                    name="itemrate"
                    type="number"
                />
                <input
                    placeholder='location'
                    onChange={handleChange}
                    value={newItems.itemlocat}
                    name="itemlocat"
                    type="text"
                />
                <input 
                    placeholder='image link'
                    onChange={handleChange}
                    value={newItems.itemimg}
                    name="itemimg"
                    type="url"
                />
                <input 
                    placeholder='Type'
                    onChange={handleChange}
                    value={newItems.itemtype}
                    name="itemtype"
                    type="text"
                />
                <button style={{width:'100px', margin:'0 auto', marginBottom:'10px', marginTop:'10px'}}>Add Item</button>
            </form>
            <div>
                
                {userInfo.items.map(item =>(
                    <div key={item.itemid}> 
                            <img src={item.itemimg} alt={item.itemid}/>
                            <div style={{marginBottom:'20px'}}>
                            <h3>name: {item.itemname}</h3>
                            <p>Type: {item.itemtype}</p>
                            <p>Location: {item.itemlocat}</p>
                            <p>Rate: {item.itemrate}</p>
                            <p>Description: {item.itemdescr}</p>
                                <button onClick={e=>{
                                    e.preventDefault();
                                    deleteItem(item)
                                }}>Delete</button>
                                <button onClick={()=> editItem(item)}>Edit Card</button>
                            </div>
                    </div>
                ))}
            </div>
            {editing && (
                    <form onSubmit={saveEdit}>
                        <label> {'Item Name:  '}
                            <input 
                                name='itemname'
                                onChange={handleEditChange} 
                                placeholder='Item Name'
                                value={itemToEdit.itemname}
                                type='text' />
                        </label>
                        <label> {'Item Type:  '}
                            <input 
                                name='itemtype'
                                onChange={handleEditChange} 
                                placeholder='Item Type'
                                value={itemToEdit.itemtype}
                                type='text' />
                        </label>
                        <label> {'Item Description:  '}
                            <input 
                                name='itemdescr'
                                onChange={handleEditChange} 
                                placeholder='Item Description'
                                value={itemToEdit.itemdescr}
                                type='text' />
                        </label>
                        <label> {'Rental Rate:  '}
                            <input 
                                name='itemrate'
                                onChange={handleEditChange} 
                                placeholder='Item Rate'
                                value={itemToEdit.itemrate}
                                type='text' />
                        </label>
                        <label> {'Item Location:  '}
                            <input 
                                name='itemlocat'
                                onChange={handleEditChange} 
                                placeholder='Item Location'
                                value={itemToEdit.itemlocat}
                                type='text' />
                        </label>
                        <label> {'Item Picture:  '}
                            <input 
                                name='itemimg'
                                onChange={handleEditChange} 
                                placeholder='Item Image Link'
                                value={itemToEdit.itemimg}
                                type='text' />
                        </label>
                        <div className="button-row">
                            <button type="submit">save</button>
                            <button onClick={() => setEditing(false)}>cancel</button>
                        </div>
                    </form>
                )}
           
            <button>signout</button>
        </div>
    )
}
export default CardForm;