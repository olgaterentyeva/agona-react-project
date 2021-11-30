import logo from "../../images/logo.svg";
import {SignInFormWithStore} from "../../forms/SignInFormWithStore";
import './Sign.css';

import React from "react";

export const SignIn = () => {

    return (
        <div className="signForm">
            <img src={logo} className="signImg" alt="logotype"/>
            <SignInFormWithStore/>
        </div>
    );
}
