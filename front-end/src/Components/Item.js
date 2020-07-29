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

        </ItemDiv>
    )
}
