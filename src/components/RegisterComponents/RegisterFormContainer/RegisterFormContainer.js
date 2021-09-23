import React from 'react';
import RegisterForm from "../RegisterForm/RegisterForm";

function RegisterFormContainer(props) {
    return (
        <div className={"RegisterFormContainer"}>
            <RegisterForm token = {props.token} setToken={props.setToken}/>
        </div>
    )
}

export default RegisterFormContainer