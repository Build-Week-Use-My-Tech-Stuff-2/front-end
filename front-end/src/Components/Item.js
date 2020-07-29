import React from 'react'
import styled from 'styled-components'

const ItemDiv = styled.div`
display: flex;
flex-direction: column;
background-color: ivory;
max-width: 15%;
`;

export default function Item({item}) {


    return (
        <ItemDiv>
            <img src={item.itemimg}></img>
            <h3>{`Name: ${item.itemname}`}</h3>
            <h4>{`Price: ${item.itemrate}`}</h4>
            {/* Availability [create a component?] [needs state] */}
            {/* Button routes to a checkout screen for buyers, edit details for renters 
            (On another note, for readability's sake we should change 'renters' to 'sellers') */}
        </ItemDiv>
    )
}
