import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {SignUpDiv, SubmitButton, LabelDiv, ErrorDiv} from './StyledSubComponents'

export default function RenterSignUp(props) {
    const history = useHistory();
    //////////// PROPS ////////////
    const {
        inputChange,
        forms,
        formErrors,
        submit,
        disabled
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
            <h1>Renter Sign-up</h1>
            <LabelDiv>
            <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    value={forms.username}
                    onChange={onChange}
                ></input>
            </LabelDiv>

            <ErrorDiv><span>{formErrors.username}</span></ErrorDiv>

            <LabelDiv>
            <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={forms.password}
                    onChange={onChange}
                ></input>
            </LabelDiv>

            <ErrorDiv><span>{formErrors.password}</span></ErrorDiv>

            <LabelDiv>
            <label htmlFor="email">Email:</label>
             <input
                type="email"
                name="email"
                value={forms.email}
                onChange={onChange}
             ></input>
            </LabelDiv>

            <ErrorDiv><span></span></ErrorDiv>
            <SubmitButton disabled={disabled} onClick={onSubmit}>Submit</SubmitButton>
        </SignUpDiv>
    )
}
