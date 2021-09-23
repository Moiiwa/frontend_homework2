import * as React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Register from "./pages/Register";
import Login from "./pages/Login";
import {useCallback, useEffect, useState} from "react";
import './app.css'



function App() {
    const [token, setToken] = useState(null)


    useEffect(() => {
        const tokenInStorage = sessionStorage.getItem('token')
        if (tokenInStorage) {
            setToken(tokenInStorage)
        }
    }, [])

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <Home token = {token}/>
                </Route>
                <Route path={"/login"}>
                    <Login token = {token} setToken = {setToken}/>
                </Route>
                <Route exact path={"/register"}>
                    <Register setToken = {setToken}/>
                </Route>
                <Route>404</Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App