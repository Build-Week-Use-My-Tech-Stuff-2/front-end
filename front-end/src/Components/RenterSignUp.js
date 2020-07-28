import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {SignUpDiv, SubmitButton} from './StyledSubComponents'

export default function RenterSignUp(props) {
    const history = useHistory();
    //////////// PROPS ////////////
    const {
        inputChange,
        forms,
        formErrors,
        submit
    } = props;
    
    //////////// HELPER FUNCTIONS ////////////
    const onChange = event => {
        const name = event.target.name;
        const value = event.target.value;
    
        inputChange(name, value)
    };
    
    const onSubmit = event => {
        event.preventDefault();
        submit()
        history.push('/')
    }
    
        return (
            <SignUpDiv>
                <h1>Seller Sign-up</h1>
                <label>Username:
                    <input
                        type="text"
                        name="username"
                        value={forms.username}
                        onChange={onChange}
                    ></input>
                    <p>{formErrors.username}</p>
                </label>
    
                <label>Password:
                    <input
                        type="password"
                        name="password"
                        value={forms.password}
                        onChange={onChange}
                    ></input>
                    <p>{formErrors.password}</p>
                </label>

                <label>Email:
             <input
                type="email"
                name="email"
                value={forms.email}
                onChange={onChange}
             ></input>
            </label>
    
            <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
            </SignUpDiv>
        )
    }
    
