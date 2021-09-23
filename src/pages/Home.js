import React, {useContext, useState} from 'react';
import './home.css';
import {getTokenContext} from "../components/LoginComponents/LoginForm/LoginForm";
import axios from "axios";
import PersonContainer from "../components/PersonContainer/PersonContainer";
import {useHistory} from "react-router-dom";

function Home(props){
    const history = useHistory()
    function goToLogin(){
        history.push('/login')
    }

    function goToRegister(){
        history.push('/register')
    }

    return (
        <div className="Home">
            {props.token && <PersonContainer token={props.token}>
            </PersonContainer> ||
                !props.token && <div>
                    <span>Please log in </span>
                    <button onClick={goToLogin}>Log in</button>
                    <button onClick={goToRegister}>Register</button>
                </div>
            }
        </div>
    );
}

export default Home