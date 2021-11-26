import React from "react";
import logo from "../../images/logo.svg";
import {SignUpForm} from "../../forms/SignUpForm";
import './Sign.css';

export const SignUp = () =>{

    return (
        <div className="App">
            <img src={logo} alt="logotype"/>
            <SignUpForm/>
        </div>
    );
}