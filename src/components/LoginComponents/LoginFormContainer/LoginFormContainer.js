import React from 'react';
import LoginForm from "../LoginForm/LoginForm";

function LoginFormContainer(props) {
    return (
        <div className={"LoginFormContainer"}>
            <LoginForm token = {props.token} setToken={props.setToken}/>
        </div>
    )
}

export default LoginFormContainer