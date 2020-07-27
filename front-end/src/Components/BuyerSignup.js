import React from 'react'
import {useHistory} from 'react-router-dom'

export default function BuyerSignup(props) {
const history = useHistory();
//////////// PROPS ////////////
const {
    inputChange,
    forms
} = props;

//////////// HELPER FUNCTIONS ////////////
const onChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    inputChange(name, value)
};

const onSubmit = event => {
    event.preventDefault();
    history.push('/')
}

    return (
        <div>
            <h1>Buyer Sign-up</h1>
            <label>Username:
                <input
                    type="text"
                    name="username"
                    value={forms.username}
                    onChange={onChange}
                ></input>
            </label>

            <label>Password:
                <input
                    type="password"
                    name="password"
                    value={forms.password}
                    onChange={onChange}
                ></input>
            </label>

            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}
