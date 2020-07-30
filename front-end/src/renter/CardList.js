import React, { useContext } from 'react';
import {MainData} from './context/MainData';
import SearchBar from  '../Components/SearchBar';
import {Link} from 'react-router-dom'
const CardList= ()=>{
    const itemz = useContext(MainData);
    console.log('waaaaejhedwjed: ', itemz)
    return(
        <>
        <SearchBar />
        <Link to="/renterlogin">Signout</Link>
        <Link to="/cardform">Rent your Item!</Link>
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
            
        </>
    )
}
export default CardList;