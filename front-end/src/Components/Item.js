import React from 'react'
import styled from 'styled-components'

const ItemDiv = styled.div`
display: flex;
flex-direction: column;
background-color: ivory;
max-width: 15%;
height: 125px;
width: 125px;
margin: 1%;

    img{
        height: 70%;
         width: 100%;
    }

    h3{
        height: 10%;
    }

    h4{ 
        height: 10%;
    }
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
