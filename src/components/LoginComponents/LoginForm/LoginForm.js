import React, {createContext, useContext, useState} from 'react';
import {useForm} from "react-hook-form";
import styled from "styled-components";
import './LoginForm.css'
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import axios from "axios";
import {useHistory} from "react-router-dom";


export default function LoginForm(props) {

    const history = useHistory()

    const validationSchema = Yup.object().shape({
        login: Yup.string()
            .required("Login is required"),
        password: Yup.string()
            .min(8, "Password should contain at least 8 symbols")
    });
//asdasdasdasd
    async function onSubmit(pars) {
        // display form data on success

        let response = await axios({
            method: 'post',
            url: 'http://localhost:3003/login',
            data: {
                login: pars.login,
                password: pars.password
            }
        }).then((response) => {
            let token = response.data.token
            return token
        }, (error) => {
            console.log(error);
        });
        sessionStorage.setItem('token', response)
        props.setToken(response)
        history.push('/')
    }


    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema)
    });

    const StyledForm = styled.form`
        margin: auto;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    `;

    const StyledInput = styled.input`
      border-radius: 30px;
    `;

    const InputContainer = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: auto;
      margin-top: 30px;
      margin-bottom: 30px;
    `;
    const SubmitInput = styled.input`
      display: flex;
      flex-direction: column;
      width: 70%;
      margin: auto;
      margin-top: 50%;
      margin-bottom: 5px;
      border-radius: 30px;
      text-align: center;
    `;

    return (
        <div className={"LoginForm"}>
            <StyledForm onSubmit={handleSubmit(onSubmit)} onReset={reset}>
                <InputContainer>
                    <StyledInput {...register("login")}/>
                    <div className="invalid-feedback">{errors.login?.message}</div>
                </InputContainer>
                <InputContainer>
                    <StyledInput {...register("password")}/>
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </InputContainer>

                <SubmitInput className={"Submit-button"} type={"submit"} value={"Log in"} />
            </StyledForm>
        </div>
    )
}
