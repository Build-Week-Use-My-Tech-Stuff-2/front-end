import React from 'react'
import styled from 'styled-components'

const ItemDiv = styled.div`
display: flex;
flex-direction: column;
background-color: ivory;
max-width: 15%;
`;

export default function Item() {
    return (
        <ItemDiv>
            <img src={"https://picsum.photos/200"}></img>
            <h3>Name:</h3>
            <h4>Price:</h4>
            {/* Availability [create a component?] [needs state] */}
            {/* Button routes to a checkout screen for buyers, edit details for renters 
            (On another note, for readability's sake we should change 'renters' to 'sellers') */}
        </ItemDiv>
    )
}
