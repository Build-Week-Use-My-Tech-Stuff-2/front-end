import React, {useState} from "react";
import axiosWithAuth from '../renter/utils/axiosWithAuth';
import {useHistory,Link} from "react-router-dom";


const Login = () =>{
    const [cred, setCred]= useState({
        username: '',
        password: '',
    });
    const {push}= useHistory();

    const handleChange = e =>{
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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="username"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={cred.username}
                />
                <input
                    placeholder="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={cred.password}
                />
                <button type="submit">Login</button>
                <Link to="/sign-up">Create Acount</Link>
            </form>
        </div>
    )
}
export default Login;