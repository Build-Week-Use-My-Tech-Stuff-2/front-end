import React from 'react';
import styled from 'styled-components';

const CardForm = ()=>{
    const InputStyled= styled.input`
        display:flex;
        text-align:center;
        margin-bottom:10px;
        padding:10px;
    `
    return(
        <div>
            <h1>Rent Your item!</h1>
            <form style={{display:'flex', flexDirection:'column', width:'400px', margin:'0 auto'}}>
                <InputStyled
                    placeholder='Item Name'
                />
                <InputStyled 
                    placeholder='Type'
                />
                <InputStyled 
                    placeholder='description'
                />
                <InputStyled 
                    placeholder='price per day'
                />
                <InputStyled 
                    placeholder='Duration'
                />
                <InputStyled
                    placeholder='Pickup Location'
                />

                <button style={{width:'100px', margin:'0 auto'}}>Add Item</button>

            </form>
        </div>
    )
}
export default CardForm;