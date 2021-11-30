import React from "react";
import logo from "../../images/logo.svg";
import {SignUpFormWithStore} from "../../forms/SignUpFormWithStore";
import './Sign.css';

export const SignUp = () =>{

    return (
        <div className="signForm">
            <img src={logo} className="signImg" alt="logotype"/>
            <SignUpFormWithStore/>
        </div>
    );
}