import logo from "../../images/logo.svg";
import {SignInForm} from "../../components/containers/forms/SignInForm";
import './Sign.css';

import React from "react";

export const SignIn = () => {

    return (
        <div className="App">
            <img src={logo} alt="logotype"/>
            <SignInForm/>
        </div>
    );
}
