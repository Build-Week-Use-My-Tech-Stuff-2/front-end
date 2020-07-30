import React from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components';
import DraftsIcon from '@material-ui/icons/Drafts'
import FaceIcon from '@material-ui/icons/Face'
import LockIcon from '@material-ui/icons/Lock'
import {SignUpDiv, SubmitButton, LabelDiv, ErrorDiv} from './StyledSubComponents'

export default function SignUp(props) {
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
        history.push('/login')
    }
    
    return (
        <SignUpDiv>
            <h1>Sign-up</h1>
            <LabelDiv>
            <label htmlFor="username"><FaceIcon float="left"/>&nbsp;Username:</label>
               <input
                    type="text"
                    name="username"
                    value={forms.username}
                    onChange={onChange}
                ></input>
            </LabelDiv>

            <ErrorDiv><span>{formErrors.username}</span></ErrorDiv>

            <LabelDiv>
            <label htmlFor="email"><DraftsIcon  float="left"/> &nbsp;Email:</label>
            
            <input
                type="email"
                name="email"
                value={forms.email}
                onChange={onChange}
            ></input>
            </LabelDiv>

            <ErrorDiv><span></span></ErrorDiv>

            <LabelDiv>
            <label htmlFor="password"><LockIcon float="left"/>&nbsp;Password:</label>
                <input
                    type="password"
                    name="password"
                    value={forms.password}
                    onChange={onChange}
                ></input>
            </LabelDiv>

            <ErrorDiv><span>{formErrors.password}</span></ErrorDiv>

            <SubmitButton disabled={disabled} onClick={onSubmit}>Submit</SubmitButton>
        </SignUpDiv>
    )
}
