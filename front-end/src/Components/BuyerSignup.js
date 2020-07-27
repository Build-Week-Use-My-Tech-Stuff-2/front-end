import React from 'react'

export default function BuyerSignup() {
//////////// PROPS ////////////
const {
    inputChange
} = props;

//////////// HELPER FUNCTIONS ////////////
const onChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    inputChange(name, value)
}

    return (
        <div>
            
        </div>
    )
}
