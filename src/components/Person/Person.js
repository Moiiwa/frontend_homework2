import React from 'react';
import './Person.css'

export default function Person(pars){
    return (
        <div className={"Person"}>
            <img id ="avatar" className={"field"} src={pars.avatar}/>
            <span id="name" className={"field"}>{pars.name}</span>
            <span id={"email"} className={"field"}>{pars.email}</span>
            <span id={"address"} className={"field"}>{pars.address}</span>
        </div>
    )
}