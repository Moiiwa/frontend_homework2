import React from 'react';
import './login.css'
import LoginFormContainer from "../components/LoginComponents/LoginFormContainer/LoginFormContainer";


function Login(props){
    return (
        <div className={"Login"}>
            <LoginFormContainer token = {props.token} setToken = {props.setToken}/>
        </div>
    )
}

export default Login