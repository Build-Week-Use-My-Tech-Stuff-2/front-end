import React, { useContext } from 'react';
import {MainData} from './context/MainData';
import {LinkSpan, AppNav} from '../Components/StyledSubComponents';
import {Link,useHistory} from 'react-router-dom';
const CardList= ()=>{
    const itemz = useContext(MainData);
    console.log('waaaaejhedwjed: ', itemz)
    const {push}= useHistory();
    const logOut= ()=>{
    localStorage.removeItem("token");
    push('/')
    }
    return(
        <div>
             <AppNav style={{marginBottom:'20px'}}>
            <LinkSpan><Link style={{ textDecoration: 'none', color:'white', fontWeight: "900"  }} to="/cardform">DashBoard</Link></LinkSpan>
            <LinkSpan><Link onClick={logOut} style={{ textDecoration: 'none', color:'white', fontWeight: "900"  }}>Sign out</Link></LinkSpan>
            <LinkSpan><Link style={{ textDecoration: 'none', color:'white', fontWeight: "900"  }} to="/cardlist">Shop</Link></LinkSpan>
        </AppNav>
             {itemz.items.map(itemsss=>(
                    <div key={itemsss.itemid}> 
                        <img src={itemsss.itemimg}/>
                        <div>
                        <h1>Name: {itemsss.itemname}</h1>
                        <p>Type: {itemsss.itemtype}</p>
                        <p>Location: {itemsss.itemlocat}</p>
                        <p>Rate: {itemsss.itemrate}</p>
                        <p>Description: {itemsss.itemdescr}</p>
                        </div>
                    </div>
                ))}
            
        </div>
    )
}
export default CardList;