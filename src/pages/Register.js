import React from 'react';
import RegisterFormContainer from "../components/RegisterComponents/RegisterFormContainer/RegisterFormContainer";

function Register(props){
    return (
        <div className={"Register"}>
            <RegisterFormContainer token = {props.token} setToken = {props.setToken}/>
        </div>
    )
}

export default Register