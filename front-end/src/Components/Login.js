import React, {useState} from "react";
import axiosWithAuth from '../renter/utils/axiosWithAuth';
import {useHistory,Link} from "react-router-dom";
import {SignUpDiv, SubmitButton, LabelDiv, ErrorDiv} from './StyledSubComponents'
import formSchema from './Validation/formSchema'
import * as yup from 'yup'

const Login = (props) =>{
const {
    formErrors,
    setFormErrors
} = props;

    const [cred, setCred]= useState({
        username: '',
        password: '',
    });
    const {push}= useHistory();

    const handleChange = e =>{
    const name = e.target.name;
    const value = e.target.value;

        yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid => {
          setFormErrors({
            ...formErrors,
            [name]: ""
          })
      })
        .catch(invalid => {
          setFormErrors({
            ...formErrors,
            [name]: invalid.errors[0]
          })
      })


        setCred({...cred, [e.target.name]: e.target.value})
    }
    const handleSubmit= e =>{
        e.preventDefault();
            axiosWithAuth()
            .post("/login", cred)
            .then(res =>{
                console.log("login page data: ", res)
                localStorage.setItem("token", res.data.payload)
                 push("/cardform") 
            })
            .catch(err=> console.log("this is the error from login: ", err))
    }
    return(
        <SignUpDiv>
            <h1>Login</h1>
            <LabelDiv>
            <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={cred.username}
                />
                </LabelDiv>

                <ErrorDiv><span>{formErrors.username}</span></ErrorDiv>

                <LabelDiv>
            <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={cred.password}
                />
                </LabelDiv>
                <ErrorDiv><span>{formErrors.password}</span></ErrorDiv>
                <SubmitButton onClick={handleSubmit} type="submit">Login</SubmitButton>
                <Link style={{marginTop: '2%', color: 'black'}} to="/signup">Create Acount</Link>
                
        </SignUpDiv>
    )
}
export default Login;