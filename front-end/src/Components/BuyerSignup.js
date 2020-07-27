import React from 'react'

export default function BuyerSignup(props) {
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
            <h1>Buyer Sign-up</h1>
            <label>Username:
                <input
                    type="text"
                ></input>
            </label>
        </div>
    )
}
